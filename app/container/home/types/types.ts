export type TItem = {
  id: string;
  title: string;
  team: string;
  type: string;
  date: string;
};

export type TRecentItems = TItem[];

export type SearchResult = {
  id: string;
  title: string;
  description: string;
  path: string;
};
