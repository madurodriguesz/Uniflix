export type IContentListProps = {
  data: {
    name: string;
    id: string;
    path: string | null;
    list: ContentList[];
  };
};

type ContentList = {
  id: number;
  title: string;
  cover: string;
  normalize: string;
};
