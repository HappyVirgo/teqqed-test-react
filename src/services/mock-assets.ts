import { Asset, AssetSortType } from "../types";

import image1 from "./../assets/img/image-1.png";

const mockAssets: Asset[] = [
  {
    title: "Luxe villa in Alicante",
    image: image1,
    bathroom: 3,
    bedroom: 2,
    location: "Murcia, Costa Cálida, Spanje",
    price: 5000,
    type: "appartment",
    date: "04/23/1982",
  },
  {
    title: "Luxe villa in Alicante",
    image: image1,
    bathroom: 3,
    bedroom: 2,
    location: "Murcia, Costa Cálida, Spanje",
    price: 3000,
    type: "appartment",
    date: "02/17/2000",
  },
  {
    title: "Luxe villa in Alicante",
    image: image1,
    bathroom: 3,
    bedroom: 2,
    location: "Murcia, Costa Cálida, Spanje",
    price: 5400,
    type: "villa",
    date: "08/07/2000",
  },
  {
    title: "Luxe villa in Alicante",
    image: image1,
    bathroom: 3,
    bedroom: 2,
    location: "Murcia, Costa Cálida, Spanje",
    price: 8000,
    type: "townhouse",
    date: "05/05/1998",
  },
  {
    title: "Luxe villa in Alicante",
    image: image1,
    bathroom: 3,
    bedroom: 2,
    location: "Murcia, Costa Cálida, Spanje",
    price: 6000,
    type: "appartment",
    date: "02/26/1997",
  },
  {
    title: "Luxe villa in Alicante",
    image: image1,
    bathroom: 3,
    bedroom: 2,
    location: "Murcia, Costa Cálida, Spanje",
    price: 5000,
    type: "villa",
    date: "09/02/1999",
  },
];

export const getAssets = (
  searchText: string,
  sortBy: string = "date",
  type: string = "appartment"
): Promise<Asset[]> => {
  return new Promise<Asset[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(
        mockAssets
          .filter(
            (asset) =>
              (asset.title
                .toLocaleLowerCase()
                .indexOf(searchText.toLocaleLowerCase()) > -1 ||
                asset.location
                  .toLocaleLowerCase()
                  .indexOf(searchText.toLocaleLowerCase()) > -1) &&
              asset.type === type
          )
          .sort((a: Asset, b: Asset) => {
            switch (sortBy) {
              case "date":
                return new Date(a.date).getTime() > new Date(b.date).getTime()
                  ? 1
                  : -1;
              case "highest":
                return a.price < b.price ? 1 : -1;
              case "lowest":
                return a.price > b.price ? 1 : -1;
              default:
                return 1;
            }
          })
      );
    }, 1000);
  });
};
