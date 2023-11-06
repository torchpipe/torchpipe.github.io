---
id: modify_the_code
title:  修改代码
type: reference
---

# 修改代码


修改代码方式：
- 提交 merge request 至 develop 分支
- 重大修改可提前在issue上进行讨论

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

需要时请考虑补充[python测试](https://github.com/torchpipe/torchpipe//test)。

:::note 代码格式（optinal）
请配置格式化插件以便[.clang-format](https://github.com/torchpipe/torchpipe/blob/develop/.clang-format)生效。
:::
