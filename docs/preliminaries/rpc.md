---
id: rpc
title: Key Performance Indicators for Services
type: explainer
---

# Key Performance Indicators for Services

When evaluating the performance of a service, there are several key indicators to consider. These indicators can help us understand the performance of the service in terms of latency, throughput, error rate, and other aspects. Here are some commonly used key performance indicators:

## 1. Throughput

Throughput refers to the number of requests that can be processed in a unit of time. It is another important indicator for measuring service performance because it can help us understand the service's processing capability. Common throughput indicators include:

- **QPS (Queries Per Second)**: The number of requests that can be processed in a unit of time, usually measured in seconds.
- **TPS (Transactions Per Second)**: The number of transactions that can be completed in a unit of time, usually measured in seconds.

In business, it is generally more meaningful to test peak throughput, which is the throughput under a sufficient and determined concurrency level.


## 2. Response Time

Response time (latency) refers to the time required from sending a request to receiving a response:

- **Average Response Time** and **TP50**: Represent the average response time of requests, where TP50 selects the median by sorting all response times in ascending order.
- **TP99**: The response time that is faster than 99% of all requests. In other words, only the slowest 1% of requests have a response time longer than TP99.
- **Maximum Response Time**: Represents the longest response time of requests.

It is more meaningful to measure response time under peak load, which is the response time under sufficient and determined concurrency level. Except for services that require very high real-time performance, response time generally should not exceed a certain threshold.



 
## 3. Error Rate

Error rate refers to the proportion of errors that occur during service operation. It is an important indicator for measuring service quality because it directly affects user experience. Common error rate indicators include:

- Timeout Error Rate: The percentage of failed requests due to timeouts.
- Error Rate: The percentage of failed requests, including client errors and server errors.


## 4. Resource Utilization

- CPU/GPU Utilization: Represents the usage of CPU/GPU.
- Memory Utilization: Represents the usage of memory.
- Network Utilization: Represents the usage of network bandwidth.

In addition to the above indicators, there are other indicators that can be used to measure service performance, such as concurrency and availability. Depending on the specific scenario and requirements, appropriate indicators can be selected to evaluate service performance.


## Summary
Evaluating service performance requires considering multiple indicators comprehensively. Appropriate indicators should be selected based on specific scenarios and requirements, and historical data and regular evaluations should be taken into account.