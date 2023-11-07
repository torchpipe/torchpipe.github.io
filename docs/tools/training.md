---
id: training
title: "Training Integration"
type: explainer
---

:::caution
This feature is currently under development.
:::

To align the preprocessing process of deployment and training, a natural idea is to incorporate torchpipe into the training pipeline. However, this is not an easy task, mainly due to the involvement of multi-card data. In fact, there are currently few practices that integrate GPU preprocessing of torchvision into the training pipeline. One reference example is the [training API of Kornia](https://kornia.readthedocs.io/en/latest/get-started/training.html). However, it is quite heavy and requires a complete restructuring of the entire process.



###  Motivation

In the train-infer iteration of a project, it is common practice to use the OpenCV module for data preprocessing on the CPU during the training phase. However, during the deployment phase, it is desirable to use the GPU for this operation to further enhance the performance of the online service.

* Regarding the performance improvement testing brought by this project, you can refer to the following performance improvement experiment. However, please note that metrics such as QPS and RT (Response Time) are heavily influenced by the actual online environment and data, so these results should be taken as reference only.
* Test Configuration: ResNet50, input image size 1080x1080.

       
| machine  | decode type  | client  | cpu utilization  |qps  |avg  |TP50  |TP99  |QPS improvement  |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----: |  :----: | 
| 3080Ti | cpu decode | 10 | 300% limit | 271 | 36.88 | 30.11 | 65.97 |  | 
| 3080Ti | gpu decode  | 10 |  300% limit |319 | 31.34 | 23.15 | 61.60 | 17.71% | 
| 3080Ti | cpu decode  | 1 |  300% limit |70 | 14.27 | 14.24 | 18.35 |  | 
| 3080Ti | gpu decode  | 1 |  300% limit |90 | 11.08 | 10.76 | 14.46 | 28.57% | 
| 3080Ti | cpu decode  | 5 |  300% limit |276 | 18.11 | 12.62 | 38.87 |  | 
| 3080Ti | gpu decode  | 5 |  300% limit |321 | 15.59 | 9.83 | 40.43 | 16.30% | 





* Due to the misalignment between CPU data preprocessing and GPU, it may lead to fluctuations in the recognition accuracy of the model, thus restricting the application of GPU decoding during inference.

* For the negative impact of misalignment between training and inference, as well as the improvements introduced in this project, you can refer to the consistency test experiment below. The conclusions regarding the effects can be found in the analysis section of the table. This experiment uses an internal dataset as an example and compares the training with CPU decoding and GPU decoding, while keeping other experimental hyperparameters consistent.
  
       
| index  | train type  |Model Inference Method  |recall  |Diff  |precision  | Diff  |Analysis  |
| :----:  | :----:  | :----:  | :----:  | :----:  | :----:  | :----: | :----: | 
| 1 | cpu decode， all data train | cpu decode  | 94.76% |  | 89.73% |  |  | 
| 2 | cpu decode， all data train | gpu decode  | 95.09% | 0.33% | 90.35% | 0.62% | The comparison between experiments 1 and 2 demonstrates that using the CPU for decoding during training and GPU for decoding during inference can result in significant fluctuations in model performance. This poses a risk to the stability of the model's performance once it is deployed. | 
| 3 | cpu decode ，5% data train | cpu decode  | 88.56% |  | 75.83% |  |  | 
| 4 | cpu decode ，5% data train | gpu decode  | 91.14% | 2.58% | 79.86% | 4.03% | Experiments 3 and 4 further demonstrate that in scenarios with a small amount of training data, which are prone to overfitting, the pipeline of using CPU for decoding during training and GPU for decoding during inference can lead to significant fluctuations in model performance. This exacerbates the instability of the results. | 
| 5 | gpu decode ， all data train | gpu decode +torch模型 | 94.19% |  | 90.55% |  |  | 
| 6 | gpu decode ， all data train | gpu decode + torchpipe fp32 | 94.19% |  | 90.59% |  |  | 
| 7 | gpu decode ， all data train | gpu decode + torchpipe fp16  | 94.19% | 0 | 90.59% | 0.04% | Experiments 5, 6, and 7 provide evidence that the pipeline of using GPU for both training and inference based on torchpipe can align the results and further improve the performance for deploying the model. This suggests that using GPU for both training and inference can lead to consistent and improved performance for the model when deployed in a production environment.  | 


     
    
   * This project aims to implement GPU preprocessing in the PyTorch training framework using the Torchpipe acceleration framework. Additionally, leveraging the multi-instance operation feature of Torchpipe can effectively improve training efficiency.




### Major features
* Embedding the Torchpipe framework as a GPU preprocessing pipeline into the general PyTorch training framework for convenient usage.
* Aligning the GPU decoding for Train-Infer, further enhancing the performance of online services in terms of concurrency and response time.
* Implementing efficient training through techniques such as thread pools, caching queues, and multi-GPU data distribution, achieving multi-process Dataloader, GPU load balancing, and efficient training.
* Supporting various distributed training modes such as DP (Data Parallel) and DDP (Distributed Data Parallel).
* Supporting both CPU and GPU decoding, with the ability to control the proportion through parameters, effectively increasing the augment operations.


### Quick Usage

In this example, reference code for learning is provided in the torchpipe's example/gpu_train directory. The code files are train_gpu.py, train_dp.py, and train_ddp.py.
  
- train_dp.py  # if you use dp in your code，you can refer to this code.
  ```
  sh train_dp.sh
  ```
- train_ddp.py # if you use ddp in your code，you can refer to this code.

:::warning DDP mode is temporarily unavailable
DDP mode may cause the main card's memory load to be higher than other cards.
:::

  ```
  sh train_ddp.sh
  ```



**To make it easier for everyone to use, you can follow these 8 steps to apply this method to your project：**

##### step 1: Prepare toml file

- Toml is primarily used to configure GPU decoding, resizing, and other operations.
- You can refer to the `gpu_decode_train.toml` and `gpu_decode_val.toml` files in the "toml" folder as examples. These files are used for data loading and preprocessing during training and validation processes respectively.
- If necessary, you can modify the corresponding operations in these files.

##### step 2: import library

```python
from wrap_loader_torchpipe import cv2_loader, DataLoader , TensorToTensor
```

 ##### step 3: dataset not need augment, and change loader to cv2_loader

```python
train_dataset = datasets.ImageFolder(traindir, loader=cv2_loader)

```

##### step 4: set gpu augment , Here, we don't need to include the resize operation as it is already set in the toml file for TorchPipe. We only need to set the other operations, and the only difference is that [ToTensor] is replaced with a custom operation called [TensorToTensor].

```python

train_transform_gpu = transforms.Compose([       
    transforms.RandomCrop(224),
    transforms.RandomHorizontalFlip(0.05),
    transforms.RandomGrayscale(0.02),
    transforms.RandomRotation(10),
    transforms.ColorJitter(0.05, 0.05, 0.05),  ## Here, we are setting three out of four parameters because the last parameter, "hue," tends to slow down the speed of computation on a 1080Ti GPU. Other GPUs should not have an issue with it.
    TensorToTensor(),
    #the same as normalize range [0,1]
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

```

##### step 5: If you want to perform joint preprocessing on both GPU and CPU, you need to set up the CPU augment as well. This can be done following the regular PyTorch approach for CPU preprocessing.

```python

train_transform_cpu =transforms.Compose([
        cv2Resize((args.image_size, args.image_size)),
        transforms.ToPILImage(),
        transforms.RandomHorizontalFlip(0.05),
        transforms.RandomGrayscale(0.02),
        transforms.RandomRotation(5),
        transforms.ColorJitter(0.05, 0.05, 0.05, 0.05),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

```

##### step 6: We can wrap the DataLoader class into our custom class called `wrap_dataloader_torchpipe`.


* Please note that the path to the TOML file needs to be passed as an argument.
* The `local_rank` parameter is only used when using Distributed Data Parallel (DDP). If DDP is not used, this parameter can be left unset.
* `cpu_percentage` represents the percentage of CPU decoding and preprocessing.


```python
  
wrap_train_loader = wrap_dataloader_torchpipe( 
        parallel_type = 'ddp',
        dataloader = train_loader , 
        toml_path = './toml/gpu_decode_train.toml' , 
        local_rank = local_rank ,
        transforms_gpu = train_transform_gpu ,
        transforms_cpu = train_transform_cpu , 
        cpu_percentage = 0.3
)
```

##### step 7: Apply the same operations to the "val" as applied to the "train" dataset.

##### step 8: Reset the iterator after each epoch.

```python

wrap_train_loader.reset()
wrap_val_loader.reset()
 ```




### How to perform local testing with a trained model?

Training and testing go hand in hand. We have already implemented GPU decoding using TorchPipe and completed model training. Now, how can we use the trained model for GPU decoding testing?

There are primarily two aspects to consider:
1. How to implement GPU decoding and preprocessing during the testing phase.
2. How to perform model inference.

Here are two solutions for your reference. You can choose the specific approach based on your project requirements.

For detailed code examples, you can refer to "test_gpu.py" and "test_gpu.sh" in the "example" directory. First, read the following explanation, and then take a look at the detailed code to gain a clearer understanding.

#### Solution 1 (Recommended): Perform decoding and model inference all using TorchPipe

This solution is suitable for relatively simple projects (such as those with 1 or 2 models) or for individuals who have a good understanding of TorchPipe and can utilize its capabilities to implement complex logic.


##### step 1: Convert the PyTorch model to an ONNX model. You can refer to the documentation here: [Converting PyTorch models to ONNX](../faq/onnx?_highlight=onnx).

* One important thing to consider in this step is whether to include the "subtract mean and divide by variance" preprocessing in the model itself. If you have already incorporated this preprocessing step, then there is no need to perform it separately later on.

##### step 2: write your toml

Here's a simple and generic version:

* This version implements basic operations for decoding and forward pass of the model. It starts by decoding the image, resizing it, and converting the color space. Then, it passes the image through the model to obtain the results.

```python
batching_timeout = 1 
instance_num =1

[jpg_decoder]
backend = "SyncTensor[ Sequential[DecodeTensor,ResizeTensor,cvtColorTensor] ]" 
resize_h = 224
resize_w = 224 
color = "rgb"
next = "cpu_decoder"
instance_num =6

[cpu_decoder]
backend = "SyncTensor[Sequential[DecodeMat,ResizeMat,cvtColorMat,Mat2Tensor]   ]" 
filter = "or" 
resize_h = 224 
resize_w = 224 
color = "rgb"
instance_num =8 
next = "resnet50"

[resnet50]
backend = "SyncTensor[TensorrtTensor]" 
max='4'
model = "/app/pth/dog-cat/checkpoint_resnet50.onnx"
instance_num = 2
```


##### step3：forward code example

```python
def init_decodeNode(self):
    config = torchpipe.parse_toml(self.toml_path)
    for key in config.keys():
        if key != 'global':
            # If no GPU is specified in the TOML file, it is necessary to specify the GPU here.
            config[key]["device_id"] = 0
    print(config)
    decode_node = torchpipe.pipe(config)
    return decode_node


def predict(self, img_path):
    try:
        img = open(img_path, 'rb').read()
        if img is None or img == b'':
            print('open error:{}'.format(img_path))
            return None
        
        pipe_input = {TASK_DATA_KEY: img, "node_name": "jpg_decoder"}
        self.decode_node(pipe_input)
        result = pipe_input[TASK_RESULT_KEY]
        result = torch.nn.functional.softmax(result).cpu().numpy()
        return result
    
    except Exception as e:
        print('error:{}'.format(e))
        return None

```

#### Solution 2 ：We will only use TorchPipe for GPU decoding and resizing, while still utilizing PyTorch models.

This method only requires modifications to the preprocessing part of the original PyTorch code. No other modifications are needed, and there is no need to go through the process of converting to ONNX.

##### step1: exmaple of toml(Suggest keeping the toml consistent with Val.)

* Completed GPU decoding, resizing, and cvtColor functionalities.
* Returns tensor of shape 1x3x224x224.

```python
batching_timeout = 1 
instance_num =1

[jpg_decoder]
backend = "SyncTensor[ Sequential[DecodeTensor,ResizeTensor,cvtColorTensor] ]" 
resize_h = 224
resize_w = 224 
color = "rgb"
next = "cpu_decoder"
instance_num =6

[cpu_decoder]
backend = "SyncTensor[Sequential[DecodeMat,ResizeMat,cvtColorMat,Mat2Tensor]   ]" 
filter = "or" 
resize_h = 224 
resize_w = 224 
color = "rgb"
instance_num =8 

```

##### step2 : infer code：

```python

def init_decodeNode(self):
    config = torchpipe.parse_toml(self.toml_path)
    for key in config.keys():
        if key != 'global':
            # If no GPU is specified in the TOML file, it is necessary to specify the GPU here.
            config[key]["device_id"] = 0
    print(config)
    decode_node = torchpipe.pipe(config)
    return decode_node


mean = [0.485 * 255 , 0.456 * 255, 0.406 * 255]
std  = [0.229 * 255 , 0.224 * 255, 0.225 * 255]

def predict(self, img_path):
   

    try:
        img = open(img_path, 'rb').read()
        if img is None or img == b'':
            print('open error:{}'.format(img_path))
            return None
        
        pipe_input = {TASK_DATA_KEY: img, "node_name": "jpg_decoder"}
        self.decode_node(pipe_input)
        img_data = pipe_input[TASK_RESULT_KEY]
        mean_tensor = torch.tensor(mean).unsqueeze(0).unsqueeze(2).unsqueeze(3).repeat(1, 1, 224, 224).cuda() 
        std_tensor = torch.tensor(std).unsqueeze(0).unsqueeze(2).unsqueeze(3).repeat(1, 1, 224, 224).cuda()
        img_data -= mean_tensor
        img_data /= std_tensor
        
        
        with torch.no_grad():
            probs = self.model(img_data)
            result = torch.nn.functional.softmax(probs).cpu().numpy()
        return result
    
    except Exception as e:
        print('error:{}'.format(e))
        return None


```

### For Users:
The core implementation code of this project is mainly the DataLoader class in gpu_train_tools.py, which is further encapsulated based on PyTorch. If you want to add functionality to your existing training framework or further explore, you can refer to this class for modifications.

**During the implementation process, there may be some unforeseen aspects that were not considered. If you encounter any bugs, please contact the authors (WangLichun, LinYuxing, ZhangShiyang) for assistance in resolving them.**


