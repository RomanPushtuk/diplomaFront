import { ITheme } from "./ITheme";

export interface ISection {
  id: number;
  title: string;
  description: string;
  themes: Array<ITheme>;
}
