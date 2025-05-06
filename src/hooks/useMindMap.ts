import { useEffect } from 'react';
import {
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from '@xyflow/react';

interface MindMapNode {
  id: string;
  name: string;
  description?: string;
  notes?: string;
  level: number;
  children?: MindMapNode[];
}

interface UseMindMapOptions {
  horizontalSpacing?: number;
  verticalSpacing?: number;
}

export function useMindMap(
  treeData: MindMapNode,
  options: UseMindMapOptions = {}
) {
  const { horizontalSpacing = 200, verticalSpacing = 100 } = options;

  // React Flow 提供的节点状态 Hook  [oai_citation:1‡React Flow](https://reactflow.dev/)
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  // React Flow 提供的连线状态 Hook  [oai_citation:2‡React Flow](https://reactflow.dev/)
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const _nodes: Node[] = [];
    const _edges: Edge[] = [];
    const levelIndexMap: Record<number, number> = {};

    // 递归遍历，生成节点与连线
    function traverse(node: MindMapNode, level = 0) {
      // 计算当前层级的 Y 坐标
      const idx = levelIndexMap[level] ?? 0;
      levelIndexMap[level] = idx + 1;

      const position = {
        x: level * horizontalSpacing,
        y: idx * verticalSpacing,
      };

      _nodes.push({
        id: node.id,
        position,
        data: {
          label: node.name,
          description: node.description,
          notes: node.notes,
        },
      });

      if (node.children) {
        node.children.forEach((child) => {
          // 父节点到子节点的连线
          _edges.push({
            id: `${node.id}->${child.id}`,
            source: node.id,
            target: child.id,
            animated: false,
          });
          traverse(child, level + 1);
        });
      }
    }

    traverse(treeData);

    setNodes(_nodes);
    setEdges(_edges);
  }, [treeData, horizontalSpacing, verticalSpacing, setNodes, setEdges]);

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect: (connection: { source: string; target: string }) =>
      setEdges((eds) => addEdge(connection, eds)), // 支持拖拽新连线
  };
}