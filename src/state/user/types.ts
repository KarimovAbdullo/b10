import { ItalianItem } from '../../api/data/FoodData';

export type UserState = {
  loading: boolean;
  token: string | null;
  products: ItalianItem[];
};
