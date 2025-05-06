import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type MindMapNode = Node<
  { description: string; name: string; notes: string },
  'mind-map'
>;
export type AppNode = BuiltInNode | PositionLoggerNode | MindMapNode;
