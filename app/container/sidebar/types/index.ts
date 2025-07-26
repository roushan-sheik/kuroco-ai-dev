export type TSidebarItem = {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  status?: "completed" | "inProgress" | "pending";
  children?: TSidebarItem[];
  indent?: boolean;
};

export interface TeamItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface DropdownTeam {
  id: string;
  name: string;
  icon: React.ReactNode;
  items?: TeamItem[];
}
