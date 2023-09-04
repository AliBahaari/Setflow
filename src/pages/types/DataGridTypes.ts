export type SetNameType = {
  title: string;
  subTitle: string;
  color: string;
};

export type SetType = {
  setName: SetNameType;
  category: string;
  address: string;
  nextAvailability: string;
};

export type DataGridRowsType = {
  data: SetType[];
};
