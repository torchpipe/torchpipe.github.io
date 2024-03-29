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
    "introduction",
    "installation",
    {
      type: "category",
      label: "Quick Start",
      items: [
        
        "quick_start_new_user",
        //"quick_start_professional",
        {
          type: "category",
          label: "Contribution Guidelines",
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
        title: "Quick Start",
        description: "This section provides a comprehensive Quick Start guide for users who are new to the torchpipe project. By following this tutorial, users will be able to quickly and efficiently learn how to use torchpipe to optimize and accelerate their model deployment process, ultimately streamlining their workflow and enhancing their productivity.",
        slug: "/",
      },
    },
    
    
    {
      type: "category",
      label: "1. Preliminary",
      items: [
        "preliminaries/cuda_stream",
        "preliminaries/pytorch_libtorch",
        "preliminaries/thread_process_gil",
        "preliminaries/rpc",
      ],
      link: {
        type: "generated-index",
        title: "Preliminary",
        description: "Feel free to skim or skip over this section and refer back to it as needed.",
        slug: "/preliminaries",
      },
    },
    {
      type: "category",
      label: "2. Single Node Scheduling",
      items: [
        "Intra-node/model_parallel",
        "Intra-node/computational_backend",
        "Intra-node/Sequential",
        "Intra-node/extensible_backend",
        {
          type: "category",
          label: "Backend API Reference",
          // items: ["backend-reference/basic", "backend-reference/opencv", "backend-reference/torch"],
          items: [{type:"ref", id:"backend-reference/basic"}, {type:"ref", id:"backend-reference/opencv"},{type:"ref", id:"backend-reference/torch"},],
        },
        // {
        //   type: "category",
        //   label: "Backend API Reference",
        //   items: ["backend-reference/basic", "backend-reference/opencv", "backend-reference/torch"],
        //   link: {
        //     type: "generated-index",
        //     title: "Backend API Reference",
        //     description: "here is backend-reference",
        //     slug: "/backend-reference",
        //   },
        // },
        "Intra-node/schedule",
      ],
      link: {
        type: "generated-index",
        title: "Single Node Scheduling",
        description: "In this section we utilizes intra-node parallelism to improve processing speed",
        slug: "/Intra-node",
      },
    },
    {
      type: "category",
      label: "3. Multi-node Pipeline",
      items: ["Inter-node/next","Inter-node/filter","Inter-node/context","Inter-node/graphtraversal", "Inter-node/logical_nodes" ],
      link: {
        type: "generated-index",
        title: "Multi-node Pipeline",
        description: "This chapter utilizes inter-node scheduling and parallel computing to effectively parallelize task scheduling and logical control flow, thereby improving processing speed.",
        slug: "/Inter-node",
      },

      
    },
    {
      type: "category",
      label: "4. Tools",
      items: [
        "tools/encrypt",
        "tools/quantization",
        "tools/training",
        "tools/vis",
      ],
      link: {
        type: "generated-index",
        title: "工具",
        description: "extension tools related to torchpipe",
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
        description: "Frequently asked questions about torchpipe",
        slug: "/faq",
        keywords: ["onnx", "faq"],
      },
    },
    "troubleshooting",
  ],
  api: [
    {
      type: "category",
      label: "Python API Reference",
      items: ["python/pipe","python/compile","python/test"],
    },
    {
      type: "category",
      label: "Backend API Reference",
      items: ["backend-reference/basic", 
            "backend-reference/opencv", 
            "backend-reference/torch",
            "backend-reference/Ppl.cv", 
            "backend-reference/CVCUDA", 
            "backend-reference/log"],
    },
    
    "Intra-node/schedule",
    "cpp-python/basic",
    // {
    //   type: "category",
    //   label: "c++/pythonType Conversion",
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
