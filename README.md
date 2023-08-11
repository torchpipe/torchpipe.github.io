torchpipe的中文文档站点

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

## 其他
### 图标

本项目使用了来自于[IconPark](https://iconpark.oceanengine.com/official)的免费图标(soap-bubble)，其遵循[Apache License 2.0](https://github.com/bytedance/IconPark/blob/master/LICENSE), 并经过ChatGPT4对其矢量图进行调优。

### 可替代选择
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)


### 参考链接：
  https://docusaurus.io/docs
