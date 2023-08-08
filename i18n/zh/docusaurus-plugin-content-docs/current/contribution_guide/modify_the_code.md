---
id: modify_the_code
title:  修改代码
type: reference
---

# 修改代码

代码位于 https://g.hz.netease.com/deploy/torchpipe/-/tree/develop

修改代码方式：
- 直接提交commit至develop分支
- 提交 merge request 至 develop 分支

为了保证服务端的稳定性，我们对c++有所要求：
- 所有的代码需要是异常安全的
- 不允许人为退出程序，而是以抛出异常代替

对于复杂的修改，请考虑进行测试：

- 准备运行环境，请参考[torchpipe的安装](../installation)
- 运行已有测试：
```bash
cd test
pip install -r requirements.txt 
pytest .
```

需要时请考虑补充[python测试](https://g.hz.netease.com/deploy/torchpipe/-/tree/develop/test)。

:::note 代码格式（optinal）
请配置格式化插件以便[.clang-format](https://g.hz.netease.com/deploy/torchpipe/-/blob/develop/.clang-format)生效。
:::
