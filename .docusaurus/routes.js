import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh/markdown-page',
    component: ComponentCreator('/zh/markdown-page', 'a1d'),
    exact: true
  },
  {
    path: '/zh/members',
    component: ComponentCreator('/zh/members', '674'),
    exact: true
  },
  {
    path: '/zh/search',
    component: ComponentCreator('/zh/search', 'ed9'),
    exact: true
  },
  {
    path: '/zh/docs',
    component: ComponentCreator('/zh/docs', '80f'),
    routes: [
      {
        path: '/zh/docs',
        component: ComponentCreator('/zh/docs', '988'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/backend-reference/basic',
        component: ComponentCreator('/zh/docs/backend-reference/basic', 'e7b'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/backend-reference/log',
        component: ComponentCreator('/zh/docs/backend-reference/log', '4a9'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/backend-reference/opencv',
        component: ComponentCreator('/zh/docs/backend-reference/opencv', '77d'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/backend-reference/torch',
        component: ComponentCreator('/zh/docs/backend-reference/torch', '3e7'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/benchmark',
        component: ComponentCreator('/zh/docs/benchmark', '4fa'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/contribution',
        component: ComponentCreator('/zh/docs/contribution', '880'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/contribution_guide/communicate',
        component: ComponentCreator('/zh/docs/contribution_guide/communicate', '37c'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/contribution_guide/modify_the_code',
        component: ComponentCreator('/zh/docs/contribution_guide/modify_the_code', '921'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/contribution_guide/modify_the_doc',
        component: ComponentCreator('/zh/docs/contribution_guide/modify_the_doc', '074'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/contribution_guide/statement',
        component: ComponentCreator('/zh/docs/contribution_guide/statement', 'a42'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/cpp-python/basic',
        component: ComponentCreator('/zh/docs/cpp-python/basic', 'dfc'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/current_state',
        component: ComponentCreator('/zh/docs/current_state', '450'),
        exact: true
      },
      {
        path: '/zh/docs/faq',
        component: ComponentCreator('/zh/docs/faq', '688'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/faq/consistency',
        component: ComponentCreator('/zh/docs/faq/consistency', '602'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/faq/onnx',
        component: ComponentCreator('/zh/docs/faq/onnx', '992'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/faq/quantization',
        component: ComponentCreator('/zh/docs/faq/quantization', '5a4'),
        exact: true
      },
      {
        path: '/zh/docs/faq/remote-gdb',
        component: ComponentCreator('/zh/docs/faq/remote-gdb', '63d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/getting-started',
        component: ComponentCreator('/zh/docs/getting-started', '2cc'),
        exact: true
      },
      {
        path: '/zh/docs/installation',
        component: ComponentCreator('/zh/docs/installation', '24d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Inter-node',
        component: ComponentCreator('/zh/docs/Inter-node', 'f3b'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Inter-node/context',
        component: ComponentCreator('/zh/docs/Inter-node/context', '931'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Inter-node/filter',
        component: ComponentCreator('/zh/docs/Inter-node/filter', '2d5'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Inter-node/graphtraversal',
        component: ComponentCreator('/zh/docs/Inter-node/graphtraversal', 'aae'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Inter-node/logical_nodes',
        component: ComponentCreator('/zh/docs/Inter-node/logical_nodes', '4b3'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Inter-node/next',
        component: ComponentCreator('/zh/docs/Inter-node/next', 'b11'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Intra-node',
        component: ComponentCreator('/zh/docs/Intra-node', '370'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Intra-node/batching',
        component: ComponentCreator('/zh/docs/Intra-node/batching', '968'),
        exact: true
      },
      {
        path: '/zh/docs/Intra-node/computational_backend',
        component: ComponentCreator('/zh/docs/Intra-node/computational_backend', '1dd'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Intra-node/extensible_backend',
        component: ComponentCreator('/zh/docs/Intra-node/extensible_backend', 'd8a'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Intra-node/model_parallel',
        component: ComponentCreator('/zh/docs/Intra-node/model_parallel', '4e7'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Intra-node/schedule',
        component: ComponentCreator('/zh/docs/Intra-node/schedule', '9af'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/Intra-node/Sequential',
        component: ComponentCreator('/zh/docs/Intra-node/Sequential', '0e8'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/introduction',
        component: ComponentCreator('/zh/docs/introduction', 'f49'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/knowledge/debug_pytorch',
        component: ComponentCreator('/zh/docs/knowledge/debug_pytorch', '0cb'),
        exact: true
      },
      {
        path: '/zh/docs/preface',
        component: ComponentCreator('/zh/docs/preface', 'bb8'),
        exact: true
      },
      {
        path: '/zh/docs/preliminaries',
        component: ComponentCreator('/zh/docs/preliminaries', 'b08'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/preliminaries/cuda_stream',
        component: ComponentCreator('/zh/docs/preliminaries/cuda_stream', 'c81'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/preliminaries/pytorch_libtorch',
        component: ComponentCreator('/zh/docs/preliminaries/pytorch_libtorch', '0e0'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/preliminaries/rpc',
        component: ComponentCreator('/zh/docs/preliminaries/rpc', 'df1'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/preliminaries/thread_process_gil',
        component: ComponentCreator('/zh/docs/preliminaries/thread_process_gil', 'e27'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/python/compile',
        component: ComponentCreator('/zh/docs/python/compile', 'aa6'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/python/pipe',
        component: ComponentCreator('/zh/docs/python/pipe', '539'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/python/test',
        component: ComponentCreator('/zh/docs/python/test', '95e'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/zh/docs/quick_start_new_user',
        component: ComponentCreator('/zh/docs/quick_start_new_user', '143'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/quick_start_professional',
        component: ComponentCreator('/zh/docs/quick_start_professional', 'd2c'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/showcase',
        component: ComponentCreator('/zh/docs/showcase', 'a33'),
        exact: true
      },
      {
        path: '/zh/docs/similar',
        component: ComponentCreator('/zh/docs/similar', '65f'),
        exact: true
      },
      {
        path: '/zh/docs/similar/high_service',
        component: ComponentCreator('/zh/docs/similar/high_service', 'd51'),
        exact: true
      },
      {
        path: '/zh/docs/tools',
        component: ComponentCreator('/zh/docs/tools', '7ec'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/tools/debug',
        component: ComponentCreator('/zh/docs/tools/debug', '6d1'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/tools/encrypt',
        component: ComponentCreator('/zh/docs/tools/encrypt', 'e95'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/tools/quantization',
        component: ComponentCreator('/zh/docs/tools/quantization', '371'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/tools/training',
        component: ComponentCreator('/zh/docs/tools/training', '008'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/tools/vis',
        component: ComponentCreator('/zh/docs/tools/vis', 'f6d'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/troubleshooting',
        component: ComponentCreator('/zh/docs/troubleshooting', '5e9'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/zh/docs/welcome',
        component: ComponentCreator('/zh/docs/welcome', '7ef'),
        exact: true,
        sidebar: "main"
      }
    ]
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', '042'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
