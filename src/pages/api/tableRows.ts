import type { NextApiRequest, NextApiResponse } from "next";

type SetNameType = {
  title: string;
  subTitle: string;
  color: string;
};
type ResponseObjectType = {
  setName: SetNameType;
  category: string;
  address: string;
  nextAvailability: string;
};
type ResponseDataType = {
  data: ResponseObjectType[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  const type = req.query.type;

  switch (type) {
    case "1":
    case "5":
      res.status(200).json({
        data: [
          {
            setName: {
              title: "Clothes",
              subTitle: "Lorem Ipsum",
              color: "#EF9CDA",
            },
            category: "Clothes",
            address: "No. 608, Azadi Blvd., Mashhad",
            nextAvailability: "Wed, 11/10 - 10:40",
          },
          {
            setName: {
              title: "T-Shirt",
              subTitle: "Lorem Ipsum",
              color: "#00A5E0",
            },
            category: "T-Shirt",
            address: "No. 608, Azadi Blvd., Mashhad",
            nextAvailability: "Wed, 11/10 - 10:40",
          },
        ],
      });
      break;
    case "2":
    case "6":
      res.status(200).json({
        data: [
          {
            setName: {
              title: "Shoes",
              subTitle: "Lorem Ipsum",
              color: "#00A5E0",
            },
            category: "Shoes",
            address: "No. 608, Azadi Blvd., Tehran",
            nextAvailability: "Mon, 31/01 - 10:40",
          },
        ],
      });
      break;
    case "3":
    case "4":
      res.status(200).json({
        data: [
          {
            setName: {
              title: "Sunglasses",
              subTitle: "Lorem Ipsum",
              color: "#665687",
            },
            category: "Sunglasses",
            address: "No. 608, Azadi Blvd., Tabriz",
            nextAvailability: "Sat, 02/04 - 19:44",
          },
          {
            setName: {
              title: "Watch",
              subTitle: "Lorem Ipsum",
              color: "#B3DEE2",
            },
            category: "Watch",
            address: "No. 608, Azadi Blvd., Tabriz",
            nextAvailability: "Sat, 02/04 - 19:44",
          },
          {
            setName: {
              title: "Blouse",
              subTitle: "Lorem Ipsum",
              color: "#BAD4AA",
            },
            category: "Blouse",
            address: "No. 608, Azadi Blvd., Tabriz",
            nextAvailability: "Sat, 02/04 - 19:44",
          },
        ],
      });
      break;
    case "7":
      res.status(200).json({
        data: [
          {
            setName: {
              title: "Sunglasses",
              subTitle: "Lorem Ipsum",
              color: "#EDB458",
            },
            category: "Sunglasses",
            address: "No. 608, Azadi Blvd., Tabriz",
            nextAvailability: "Sat, 02/04 - 19:44",
          },
          {
            setName: {
              title: "Clothes",
              subTitle: "Lorem Ipsum",
              color: "#364652",
            },
            category: "Clothes",
            address: "No. 608, Azadi Blvd., Mashhad",
            nextAvailability: "Wed, 11/10 - 10:40",
          },
        ],
      });
      break;
    case "8":
      res.status(200).json({
        data: [
          {
            setName: {
              title: "Clothes",
              subTitle: "Lorem Ipsum",
              color: "#EDB6A3",
            },
            category: "Clothes",
            address: "No. 608, Azadi Blvd., Mashhad",
            nextAvailability: "Wed, 11/10 - 10:40",
          },
          {
            setName: {
              title: "Shoes",
              subTitle: "Lorem Ipsum",
              color: "#B3DEE2",
            },
            category: "Shoes",
            address: "No. 608, Azadi Blvd., Tehran",
            nextAvailability: "Mon, 31/01 - 10:40",
          },
          {
            setName: {
              title: "Sunglasses",
              subTitle: "Lorem Ipsum",
              color: "#623CEA",
            },
            category: "Sunglasses",
            address: "No. 608, Azadi Blvd., Tabriz",
            nextAvailability: "Sat, 02/04 - 19:44",
          },
          {
            setName: {
              title: "Blouse",
              subTitle: "Lorem Ipsum",
              color: "#BAD4AA",
            },
            category: "Blouse",
            address: "No. 608, Azadi Blvd., Tehran",
            nextAvailability: "Mon, 31/01 - 10:40",
          },
        ],
      });
      break;
    case "9":
      res.status(200).json({
        data: [
          {
            setName: {
              title: "Shoes",
              subTitle: "Lorem Ipsum",
              color: "#FF331F",
            },
            category: "Shoes",
            address: "No. 608, Azadi Blvd., Tehran",
            nextAvailability: "Mon, 31/01 - 10:40",
          },
          {
            setName: {
              title: "Watch",
              subTitle: "Lorem Ipsum",
              color: "#623CEA",
            },
            category: "Watch",
            address: "No. 608, Azadi Blvd., Tabriz",
            nextAvailability: "Sat, 02/04 - 19:44",
          },
          {
            setName: {
              title: "Clothes",
              subTitle: "Lorem Ipsum",
              color: "#3626A7",
            },
            category: "Clothes",
            address: "No. 608, Azadi Blvd., Mashhad",
            nextAvailability: "Wed, 11/10 - 10:40",
          },
          {
            setName: {
              title: "Sunglasses",
              subTitle: "Lorem Ipsum",
              color: "#AA767C",
            },
            category: "Sunglasses",
            address: "No. 608, Azadi Blvd., Tabriz",
            nextAvailability: "Sat, 02/04 - 19:44",
          },
        ],
      });
      break;
    default:
      res.status(200).json({
        data: [
          {
            setName: {
              title: "Shoes",
              subTitle: "Lorem Ipsum",
              color: "#72195A",
            },
            category: "Shoes",
            address: "No. 608, Azadi Blvd., Qazvin",
            nextAvailability: "Tue, 12/04 - 15:12",
          },
        ],
      });
      break;
  }
}
