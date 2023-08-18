<div align="center">


<h1 align="center">Torchpipe|<a href="https://torchpipe.github.io">Documentation</a></h1>
<p align="center">
 <a href="https://pytorch.org/">Pytorch</a> 内部的多线程流水线并行推理库。
 </p>
 <p align="center">
Serving Inside <a href="https://pytorch.org/">Pytorch</a> with Multiple Threads.
</p>

</div>


torchpipe是 介于底层加速库（如tensorrt，opencv，torchscript）以及 RPC（如thrift, gRPC）之间并与他们严格解耦的多实例流水线并行库；对外提供面向pytorch前端的线程安全函数接口，对内提供面向用户的细粒度后端扩展。



Torchpipe is a multi-instance pipeline parallel library that acts as a bridge between lower-level acceleration libraries (such as TensorRT, OpenCV, TorchScript) and RPC frameworks (like Thrift, gRPC), ensuring a strict decoupling from them. It offers a thread-safe function interface for the PyTorch frontend at a higher level, while empowering users with fine-grained backend extension capabilities at a lower level.



torchpipe代码正在开源准备中。这里是其（中文）文档站点

The torchpipe code is being prepared for open sourcing. Here is its (Chinese) documentation site.



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
你充当我的翻译官，我将不断给你中文markdown格式的文本(带docusaurus扩展语法)，你翻译为地道而极其精简短小的英文版文档， 直接给出以```作为开始和结束的mdx源码，让我可以直接替换掉中文版。请使用地道美国人说的书面英语，不要一字一字的对应。准备好了么
```
```
给你一段代码，你把其中文注释一一对应翻译为英语注释
```

### 图标

本项目使用了来自于[IconPark](https://iconpark.oceanengine.com/official)的免费图标(soap-bubble)，其遵循[Apache License 2.0](https://github.com/bytedance/IconPark/blob/master/LICENSE), 并经过ChatGPT4对其矢量图进行调优。

