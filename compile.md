
## compile

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

```bash
git config --global --add safe.directory /workspace

yarn run build # < repeat this command if u need update the document

npm run serve &
```
接下来，您就可以通过<your_ip>:3000预览文档内容了。




### 更新翻译(optinal)

菜单等系统部分的翻译，需要:
- 将主体用英语书写
- 再执行：
```bash
yarn run write-translations --locale zh
```
- 在生成的文件中将对应的英文修改为中文