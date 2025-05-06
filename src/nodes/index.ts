import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';
import { MindMapNode } from './MindMapNode';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'wire' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'with React Flow' },
  },
];

export const mindMapNodes: AppNode[] = [
  {
    id: 'root',
    type: 'mind-map',
    position: { x: 400, y: 0 },
    data: {
      description: '个人成长与自我提升的整体规划',
      name: '个人成长与自我提升',
      notes: '核心主题，涵盖个人成长的各个方面',
    },
  },
  {
    id: 'self_awareness',
    type: 'mind-map',
    position: { x: 0, y: 200 },
    data: {
      description: '了解自身的优势、劣势、价值观和兴趣爱好',
      name: '自我认知',
      notes: '自我认知是个人成长的基础',
    },
  },
  {
    id: 'goal_setting',
    type: 'mind-map',
    position: { x: 800, y: 200 },
    data: {
      description: '制定清晰的短期和长期目标',
      name: '目标设定',
      notes: '目标设定是实现个人成长的关键',
    },
  },
  {
    id: 'strengths_weaknesses',
    type: 'mind-map',
    position: { x: -100, y: 400 },
    data: {
      description: '评估自身的强项和需要改进的地方',
      name: '优势与不足分析',
      notes: '帮助明确个人发展方向',
    },
  },
  {
    id: 'values_interests',
    type: 'mind-map',
    position: { x: 100, y: 400 },
    data: {
      description: '识别自己重视的价值观和感兴趣的领域',
      name: '个人价值观与兴趣爱好',
      notes: '有助于选择适合的职业和生活方式',
    },
  },
  {
    id: 'short_term_goals',
    type: 'mind-map',
    position: { x: 500, y: 400 },
    data: {
      description: '如每日或每周的具体任务',
      name: '短期目标',
      notes: '确保日常行动与长期目标一致',
    },
  },
  {
    id: 'medium_term_goals',
    type: 'mind-map',
    position: { x: 700, y: 400 },
    data: {
      description: '如季度或半年内希望达成的成就',
      name: '中期目标',
      notes: '有助于评估进展并进行调整',
    },
  },
  {
    id: 'long_term_goals',
    type: 'mind-map',
    position: { x: 900, y: 400 },
    data: {
      description: '如年度规划或人生目标',
      name: '长期目标',
      notes: '提供长期方向和动力',
    },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'mind-map': MindMapNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
