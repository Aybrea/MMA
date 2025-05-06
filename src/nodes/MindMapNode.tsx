import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type MindMapNode } from './types';

export function MindMapNode({ data }: NodeProps<MindMapNode>) {
  const { description, name, notes } = data;
  return (
    <div className="react-flow__node-default">
      {/* 目标 Handle：接收连线 */}
      <Handle type="target" position={Position.Top} />

      <div>description: {description}</div>
      <div>name: {name}</div>
      <div>notes: {notes}</div>

      {/* 源 Handle：发出连线 */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
