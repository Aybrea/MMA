import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'a->c', source: 'a', target: 'c', animated: true },
  { id: 'b->d', source: 'b', target: 'd' },
  { id: 'c->d', source: 'c', target: 'd', animated: true },
];

export const mindMapEdges: Edge[] = [
  {
    id: 'root->self_awareness',
    source: 'root',
    target: 'self_awareness',
  },
  {
    id: 'root->goal_setting',
    source: 'root',
    target: 'goal_setting',
  },
  {
    id: 'self_awareness->strengths_weaknesses',
    source: 'self_awareness',
    target: 'strengths_weaknesses',
  },
  {
    id: 'self_awareness->values_interests',
    source: 'self_awareness',
    target: 'values_interests',
  },
  {
    id: 'goal_setting->short_term_goals',
    source: 'goal_setting',
    target: 'short_term_goals',
  },
  {
    id: 'goal_setting->medium_term_goals',
    source: 'goal_setting',
    target: 'medium_term_goals',
  },
  {
    id: 'goal_setting->long_term_goals',
    source: 'goal_setting',
    target: 'long_term_goals',
  },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
