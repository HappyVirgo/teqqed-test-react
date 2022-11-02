export type Asset = {
  image: string;
  title: string;
  location: string;
  bathroom: number;
  bedroom: number;
  price: number;
  type: string;
  date: string;
};

export type AssetType = "appartment" | "villa" | "townhouse";
export type AssetSortType = "date" | "highest" | "lowest";
export type DropDownItem = {
  label: string;
  value: string;
};
