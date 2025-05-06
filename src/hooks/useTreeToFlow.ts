import { Node, Edge } from '@xyflow/react';
import { useMemo } from 'react';

interface TreeNode {
  id: string;
  name: string;
  description: string;
  level: number;
  notes: string;
  children?: TreeNode[];
}

const nodeWidth = 172;
const nodeHeight = 36;
const horizontalSpacing = nodeWidth * 1.5;
const verticalSpacing = nodeHeight + 50;

export const useTreeToFlow = (treeData: TreeNode) => {
  return useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    let yPosition = 0;

    const processNode = (node: TreeNode, parentId?: string, level: number = 0) => {
      nodes.push({
        id: node.id,
        type: 'default',
        data: {
          label: node.name,
          description: node.description,
          notes: node.notes,
          level: node.level,
        },
        position: {
          x: level * horizontalSpacing,
          y: yPosition * verticalSpacing,
        },
      });
      yPosition++;

      if (parentId) {
        edges.push({
          id: `${parentId}-${node.id}`,
          source: parentId,
          target: node.id,
          type: 'smoothstep',
        });
      }

      node.children?.forEach(child => processNode(child, node.id, level + 1));
    };

    processNode(treeData);

    return { nodes, edges };
  }, [treeData]);
};