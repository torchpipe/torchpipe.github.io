---
id: thread_process_gil
title: 线程，进程，GIL
type: recipe
---

# 线程，进程，GIL





在python环境下使用多线程部署深度学习服务时一大难以克服的问题就是GIL锁。
有许多解决此问题的尝试。

- [torch::deploy](https://github.com/pytorch/multipy)尝试在单进程中运行多个python解释器。
- [Walle](https://www.usenix.org/system/files/osdi22-lv.pdf)为了在端侧使用，重新实现了python 解释器，舍弃了全局解释器锁 GIL，并针对此解释器重新实现了生态中的一些开源库。



## 线程，进程模式选择
由于GIL锁的影响, 多线程模式python计算后端注定有比较大的缺陷。一个比较简单的方案是：

| 计算后端                    | 模式       | 备注                                                                                                                      |
|---------------------------|----------|---------------------------------------------------------------------------------------------------------------------------|
| GPU后端                     | 多线程     | 多进程下需要虚拟化，存在共享显存传递的问题                                                                                 |
| 不太涉及GIL锁的CPU后端      | 可多线程   | -                                                                                                                         |
| 涉及GIL锁的CPU后端/混合后端 | 多进程/RPC | - `multiprocessing/Joblib`库<br />- 桥接第三方RPC框架 <br />- torch.distributed.rpc <br />- `torch.multiprocessing`<br /> |

