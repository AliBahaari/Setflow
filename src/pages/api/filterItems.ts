import type { NextApiRequest, NextApiResponse } from "next";

type ResponseObjectType = {
  title: string;
  value: number;
};
type ResponseDataType = {
  categoryItems: ResponseObjectType[];
  clientBrandItems: ResponseObjectType[];
  sortByItems: ResponseObjectType[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  res.status(200).json({
    categoryItems: [
      {
        title: "Clothes",
        value: 1,
      },
      {
        title: "Shoes",
        value: 2,
      },
      {
        title: "Sunglasses",
        value: 3,
      },
    ],
    clientBrandItems: [
      {
        title: "Gucci",
        value: 4,
      },
      {
        title: "Puma",
        value: 5,
      },
      {
        title: "Calvin Klein",
        value: 6,
      },
    ],
    sortByItems: [
      {
        title: "Recently active",
        value: 7,
      },
      {
        title: "Newest",
        value: 8,
      },
      {
        title: "Most viewed",
        value: 9,
      },
    ],
  });
}
