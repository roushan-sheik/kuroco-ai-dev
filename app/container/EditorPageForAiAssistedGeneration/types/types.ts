export interface SubItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface Section {
  id: string;
  title: string;
  progress: number;
  subItems: SubItem[];
}

export interface DocumentStructureProps {
  sections?: Section[];
  className?: string;
}
