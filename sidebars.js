/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// import Translate from '@docusaurus/Translate'

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // main: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  main: [
    "welcome",
    {
      type: "category",
      label: "快速上手",
      items: [
        "installation",
        "quick_start_new_user",
        "quick_start_professional",
        {
          type: "category",
          label: "贡献指南",
          items: ["contribution_guide/modify_the_code", 
                  "contribution_guide/modify_the_doc",
                  "contribution_guide/statement",
                  "contribution_guide/communicate",],
          link: {
            type: "doc",
            id:"contribution",
          },
        },
      ],
      link: {
        type: "generated-index",
        title: "快速上手",
        description: "本章节在为刚接触 Torchpipe 项目的用户提供快速上手的方法。从安装到初阶版单模型加速案例再到多模型级联加速案例，看完本教程后，新用户应该能够快速上手使用 Torchpipe 来优化加速模型部署方案。",
        slug: "/",
      },
    },
    
    "introduction",
    {
      type: "category",
      label: "2. Preliminaries",
      items: [
        "preliminaries/cuda_stream",
        "preliminaries/pytorch_libtorch",
        "preliminaries/thread_process_gil",
        "preliminaries/rpc",
      ],
      link: {
        type: "generated-index",
        title: "Preliminaries",
        description: "Feel free to quickly skim or skip over this section, and refer back to it when needed.",
        slug: "/preliminaries",
      },
    },
    {
      type: "category",
      label: "3. Intra-node Parallelism",
      items: [
        "Intra-node/model_parallel",
        "Intra-node/computational_backend",
        "Intra-node/Sequential",
        "Intra-node/extensible_backend",
        {
          type: "category",
          label: "后端API 参考文档",
          // items: ["backend-reference/basic", "backend-reference/opencv", "backend-reference/torch"],
          items: [{type:"ref", id:"backend-reference/basic"}, {type:"ref", id:"backend-reference/opencv"},{type:"ref", id:"backend-reference/torch"},],
        },
        // {
        //   type: "category",
        //   label: "后端API 参考文档",
        //   items: ["backend-reference/basic", "backend-reference/opencv", "backend-reference/torch"],
        //   link: {
        //     type: "generated-index",
        //     title: "后端API 参考文档",
        //     description: "here is backend-reference",
        //     slug: "/backend-reference",
        //   },
        // },
        "Intra-node/schedule",
      ],
      link: {
        type: "generated-index",
        title: "Intra-node Parallelism",
        description: "In this section we utilizes intra-node parallelism to improve processing speed",
        slug: "/Intra-node",
      },
    },
    {
      type: "category",
      label: "4. Inter-node Scheduling",
      items: ["Inter-node/next","Inter-node/filter","Inter-node/context","Inter-node/graphtraversal", "Inter-node/logical_nodes" ],
      link: {
        type: "generated-index",
        title: "Inter-node Scheduling",
        description: "This chapter utilizes inter-node scheduling and parallel computing to effectively parallelize task scheduling and logical control flow, thereby improving processing speed.",
        slug: "/Inter-node",
      },

      
    },
    {
      type: "category",
      label: "5. tools",
      items: [
        "tools/encrypt",
        "tools/quantization",
        "tools/training",
        "tools/debug",
        "tools/vis",
      ],
      link: {
        type: "generated-index",
        title: "工具",
        description: "torchpipe相关的扩展工具",
        slug: "/tools",
        keywords: ["training", "vis", "debug"],
      },
    },
    // "backend",
    // "batching-and-multiple-sinstances",
    // "pipeline",
    "benchmark",
    {
      type: "category",
      label: "FAQ",
      items: [
        "faq/onnx",
        "faq/consistency",
        "faq/remote-gdb"
      ],
      link: {
        type: "generated-index",
        title: "FAQ",
        description: "FAQ",
        slug: "/faq",
        keywords: ["onnx", "faq"],
      },
    },
    "troubleshooting",
  ],
  api: [
    {
      type: "category",
      label: "Python API 参考文档",
      items: ["python/pipe","python/compile","python/test"],
    },
    {
      type: "category",
      label: "后端API 参考文档",
      items: ["backend-reference/basic", "backend-reference/opencv", "backend-reference/torch", "backend-reference/log"],
    },
    
    "Intra-node/schedule",
    "cpp-python/basic",
    // {
    //   type: "category",
    //   label: "c++/python类型转换",
    //   items: ["cpp-python/basic"],
    // },
    // "installation",
    // "introduction",
  ],
  // showcase: [
  //   "showcase"
  // ],
};

module.exports = sidebars;
