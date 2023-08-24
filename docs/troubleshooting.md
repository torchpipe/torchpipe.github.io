---
id: troubleshooting
title: Troubleshooting
type: recipe
---

<!-- This document contains solutions for certain issues our users encountered
in the past while using Torchpipe. -->


> The following are the issues that users may encounter when using Torchpipe and their corresponding solutions.

## TensorrtTensor
<!-- ### Slow model initialization speed -->
<details><summary>Slow model initialization speed</summary>

- Use model caching

    The converted model can be cached locally. When `model::cache` exists, this model is loaded directly. Otherwise, the model specified by `model` is loaded, and the generated model is saved in the path specified by `model::cache`:
    ```toml
    [model]
    backend="SyncTensor[TensorrtTensor]"
    model="a.onnx.encrypted"
    "model::cache"="a.trt.encrypted"
    ```

- Save cached models in advance for commonly used GPUs, and use multiple configurations to handle different types of GPUs:

```rst
+--------------+---------------+-------------------------+
| config file  |   key         |    value                |
+==============+===============+=========================+
|              |               |                         |
| 2080ti.toml  | model         | a.2080ti.trt.encrypted  |
+--------------+---------------+-------------------------+
| t4.toml      | model         | a.t4.trt.encrypted      |
+--------------+---------------+-------------------------+
| others.toml  | model         | a.onnx.encrypted        |
+--------------+---------------+-------------------------+
```

:::tip
To use the built-in encryption and decryption functions, you need to specify `IPIPE_KEY` when compiling Torchpipe.
:::

</details>
 






