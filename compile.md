
## compile

### Starting the Container

 

```bash
# remove image if needed
docker stop docu2 && docker rm docu2
export your_ip=<your_ip>
# Changing the external IP and port（your_ip:port:3000 ）：
docker run  -p $your_ip:3000:3000 --privileged=true  -v `pwd`:/workspace  --name="docu2"  --cap-add=SYS_PTRACE  -itd   node     
docker exec -it -w/workspace/ docu2 bash
```

### Installing Dependencies

```bash
yarn add @docusaurus/theme-mermaid
yarn add @easyops-cn/docusaurus-search-local
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```

### Compiling and Running


```bash
git config --global --add safe.directory /workspace

yarn run build # < repeat this command if u need update the document

npm run serve &
```
You can now preview the document content by accessing <your_ip>:3000.

 




### Updating the Translation (optional)
For translating system parts such as menus, please:
- Write the main content in English
- Then execute:
```bash
yarn run write-translations --locale zh
```
- Replace the corresponding English words with Chinese in the generated file.