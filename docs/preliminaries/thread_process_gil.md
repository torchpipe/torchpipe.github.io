---
id: thread_process_gil
title: Threads, Processes, and the GIL
type: recipe
---

# Threads, Processes, and the GIL






When deploying deep learning services with multiple threads in a Python environment, a major challenge is the GIL lock. There have been many attempts to solve this problem.

Two attempts to solve the GIL lock problem when deploying deep learning services with multiple threads in a Python environment are:

- [torch::deploy](https://github.com/pytorch/multipy) attempts to run multiple Python interpreters in a single process.
- [Walle](https://www.usenix.org/system/files/osdi22-lv.pdf) re-implemented the Python interpreter to discard the GIL lock for edge-side use, and re-implemented some open-source libraries in the ecosystem for this interpreter.


## Choosing between Thread and Process Modes
Due to the impact of the GIL lock, the multi-threaded mode of Python computing backend is bound to have significant defects. One relatively simple solution is:




| Computing Backend                       | Mode              | Remarks                                                                                                                                         |
|-----------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| GPU Backend                             | Multi-threaded    | Virtualization is required under multi-process mode, and there are issues with sharing GPU memory.                                              |
| CPU Backend with less GIL lock          | Multi-threaded    | -                                                                                                                                               |
| CPU Backend/Mixed Backend with GIL lock | Multi-process/RPC | - `multiprocessing/Joblib` library<br />- Bridging third-party RPC frameworks<br />- torch.distributed.rpc<br />- `torch.multiprocessing`<br /> |