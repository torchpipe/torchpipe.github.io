

<p align="center">
<h1 align="center">torchpipe</h1>
<h6 align="center">Serving Inside <a href="https://pytorch.org/">Pytorch</a> with Multiple Threads</h6>
</p>
<p align="center">
<!-- <img alt="license" src="https://img.shields.io/github/license/alibaba/async_simple?style=flat-square"> -->
<img alt="build" src="https://img.shields.io/badge/build-passing-brightgreen">
<img alt="language" src="https://img.shields.io/github/languages/top/torchpipe/torchpipe.github.io?style=flat-square">
<img alt="feature" src="https://img.shields.io/badge/pytorch-Serving-orange?style=flat-square">
<img alt="last commit" src="https://img.shields.io/github/last-commit/torchpipe/torchpipe.github.io?style=flat-square">
</p>




torchpipe是 介于底层加速库（如tensorrt，opencv，torchscript）以及 RPC（如thrift, gRPC）之间并与他们严格解耦的多实例流水线并行库；对外提供面向pytorch前端的线程安全函数接口，对内提供面向用户的细粒度后端扩展。



Torchpipe is a multi-instance pipeline parallel library that acts as a bridge between lower-level acceleration libraries (such as TensorRT, OpenCV, TorchScript) and RPC frameworks (like Thrift, gRPC), ensuring a strict decoupling from them. It offers a thread-safe function interface for the PyTorch frontend at a higher level, while empowering users with fine-grained backend extension capabilities at a lower level.



torchpipe代码正在开源准备中。这里是其（中文）文档站点

The torchpipe code is being prepared for open sourcing. Here is its (Chinese) documentation site.


## updates
- Some parts of the documentation have been translated into English:
https://torchpipe.github.io/en/



## 修改方法

- **文档部分建议优先修改中文版本，路径为：[./i18n/zh/docusaurus-plugin-content-docs/current](./i18n/zh/docusaurus-plugin-content-docs/current)**
- 您也可以删除中文版的文件，修改英语版本，这样中文版就默认为英语版本的内容；后期再翻译英语版本亦可。
- 待中文版成熟后，翻译为英语版本


## 文档编译

### 启动容器
```bash
# remove image if needed
docker stop docu2 && docker rm docu2
export your_ip=<your_ip>
# 修改对外ip和端口（your_ip:port:3000 ）：
docker run  -p $your_ip:3000:3000 --privileged=true  -v `pwd`:/workspace  --name="docu2"  --cap-add=SYS_PTRACE  -itd   node     
docker exec -it -w/workspace/ docu2 bash
```

### 安装依赖

```bash
yarn add @docusaurus/theme-mermaid
yarn add @easyops-cn/docusaurus-search-local
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

### 编译并运行

本地预览时，需要将`docusaurus.config.js`中的`url`修改为您的IP
```bash
git config --global --add safe.directory /workspace

yarn run build # < repeat this command if u need update the document

npm run serve &
```





### 更新翻译(optinal)

菜单等系统部分的翻译，需要:
- 将主体用英语书写
- 再执行：
```bash
yarn run write-translations --locale zh
```
- 在生成的文件中将对应的英文修改为中文

正文（markdown）部分的翻译：
- 只翻译较为成熟部分的文档
- 使用chatgpt：


```
你充当我的翻译官，我将不断给你中文markdown格式的文本(带docusaurus扩展语法)，你翻译为地道而精简的英文版文档，仅直接给出mdx源码即可, 不要多余的废话，让我可以直接替换掉中文版md源码。请使用地道美国人说的书面英语，确保美观合理好看且符合英文科技文档风格，不用完全一字一字的对应，保留代码注释，链接和文档结构。准备好了么
```


### 图标

本项目使用了来自于[IconPark](https://iconpark.oceanengine.com/official)的免费图标(soap-bubble)，其遵循[Apache License 2.0](https://github.com/bytedance/IconPark/blob/master/LICENSE), 并经过ChatGPT4对其矢量图进行调优。




