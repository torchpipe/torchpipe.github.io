

<p align="center">
<h1 align="center">Documentation for torchpipe</h1>
<h6 align="center">Ensemble Pipeline Serving with Pytorch Frontend</h6>
</p>
<p align="center">
<!-- <img alt="license" src="https://img.shields.io/github/license/alibaba/async_simple?style=flat-square"> -->
<img alt="build" src="https://img.shields.io/badge/build-passing-brightgreen">
<img alt="language" src="https://img.shields.io/github/languages/top/torchpipe/torchpipe.github.io?style=flat-square">
<img alt="feature" src="https://img.shields.io/badge/pytorch-Serving-orange?style=flat-square">
<img alt="last commit" src="https://img.shields.io/github/last-commit/torchpipe/torchpipe.github.io?style=flat-square">
</p>




[torchpipe](https://github.com/torchpipe/torchpipe) 是 介于底层加速库（如tensorrt，opencv，torchscript）以及 RPC（如thrift, gRPC）之间并与他们严格解耦的多实例流水线并行库；对外提供面向pytorch前端的线程安全函数接口，对内提供面向用户的细粒度后端扩展。



Torchpipe is a multi-instance pipeline parallel library that acts as a bridge between lower-level acceleration libraries (such as TensorRT, OpenCV, TorchScript) and RPC frameworks (like Thrift, gRPC), ensuring a strict decoupling from them. It offers a thread-safe function interface for the PyTorch frontend at a higher level, while empowering users with fine-grained backend extension capabilities at a lower level.



这里是其v0版本文档站点。 新版（v1）文档位于 https://torchpipe.github.io/torchpipe/

Here is its documentation site.






## Edit

- **Chinese version located at：[./i18n/zh/docusaurus-plugin-content-docs/current](./i18n/zh/docusaurus-plugin-content-docs/current)**


## Compile
See [./compile.md](./compile.md)


