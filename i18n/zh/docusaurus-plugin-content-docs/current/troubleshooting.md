---
id: troubleshooting
title: 常见问题排查
type: recipe
---

# 常见问题排查

> 以下是用户在使用Torchpipe时可能遇到的问题以及相应的解决方案。

## TensorrtTensor
<!-- ### 模型初始化速度过慢 -->
<details><summary>模型初始化速度过慢</summary>

- 使用模型cache

    转好的模型可缓存到本地，当 model::cache存在时，直接加载此模型，否则加载 model 指定的模型，并将 生成的模型保存在 model::cache 指定的路径中：
    ```toml
    [model]
    backend="SyncTensor[TensorrtTensor]"
    model="a.onnx.encrypted"
    "model::cache"="a.trt.encrypted"
    ```
- 预先针对常用的卡保存缓存模型，使用多个配置去处理不同种类的卡：

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
使用内置加解密功能，需要在编译torchpipe时指定`IPIPE_KEY`.
:::

</details>


<!-- This document contains solutions for certain issues our users encountered
in the past while using Torchpipe. -->

