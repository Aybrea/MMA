import { ReactFlow, Background, Controls } from '@xyflow/react';
import { useMindMap } from './hooks/useMindMap';
import treeJson from './mock/1.json';

export default function MindMapRenderer() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useMindMap(treeJson);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}