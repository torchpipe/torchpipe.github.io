---
id: modify_the_code
title: Code Modification
type: reference
---

 
Code Modification:

To modify the code, please follow these steps:
- Submit a merge request to the develop branch.
- For major changes, please discuss them in an issue beforehand.

To ensure the stability of the server, we have certain requirements for C++:
- All code must be exception-safe.
- Manual program exits are not allowed; exceptions should be thrown instead.

For complex modifications, please consider testing:
- Prepare the runtime environment by referring to [Torchpipe installation](../installation).
- Run existing tests:

```bash
cd test
pip install -r requirements.txt 
pytest .
```

If necessary, please consider supplementing with [Python tests](https://github.com/torchpipe/torchpipe//test).

:::note Code Formatting (optional)
Please configure a formatting plugin to enable [.clang-format](https://github.com/torchpipe/torchpipe/blob/develop/.clang-format).
:::