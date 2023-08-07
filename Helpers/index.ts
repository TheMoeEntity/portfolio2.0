import { StaticImageData } from "next/image";
import pepnops from "../public/images/pepnops.png";
import dove from "../public/images/dove.png";
import mlaw from "../public/images/mlaw.png";
import aman from "../public/images/aman.png";
import craw from "../public/images/craw.png";
import store from "../public/images/store.png";

export type assets = {
  image: StaticImageData;
  title: string;
  date: string;
};
export type portfolioData = {
  name: string;
  url: string;
  stack: string[];
  date: string;
  id: number;
  images: StaticImageData[];
  details: string[];
};
export type sideAssets = {
  title: string;
  active: boolean;
  id: number;
  link: string;
};
export const sideassets: sideAssets[] = [
  {
    title: "fa-solid fa-house",
    active: true,
    id: 1,
    link: "/",
  },
  {
    title: "fa-solid fa-user",
    active: false,
    id: 2,
    link: "/#about",
  },
  {
    title: "fa-solid fa-gear",
    active: false,
    id: 3,
    link: "/#services",
  },
  {
    title: "fa-solid fa-briefcase",
    active: false,
    id: 4,
    link: "/#portfolio",
  },
  {
    title: "fa-solid fa-envelope",
    active: false,
    id: 5,
    link: "/#contact",
  },
];
export const assets: assets[] = [
  {
    image: pepnops,
    title: "PEPNOPS Inc.",
    date: "01 Aug. 2023",
  },
  {
    image: dove,
    title: "Dovehospital",
    date: "01 Aug. 2020",
  },
  {
    image: mlaw,
    title: "Nosrati Group",
    date: "03 Jun. 2023",
  },
  {
    image: aman,
    title: "AMAN AWARDS",
    date: "03 Jun. 2023",
  },
  {
    image: craw,
    title: "Crawford Complaints",
    date: "03 Jun. 2023",
  },
  {
    image: store,
    title: "Apple E-commerce store",
    date: "03 Jun. 2023",
  },
];
export class Helpers {
  static filterText = (text: string): string => {
    const index = text.indexOf("%");
    const endStr = text.substring(index + 3, text.length);
    return text
      .split("")
      .filter((x) => x !== "%" && x !== "2" && x !== "0")
      .join("")
      .substring(0, index)
      .concat(" " + endStr);
  };
  static fetcher = async () =>
    await fetch("https://mportfolio-seven.vercel.app/api/staticData").then(
      (res) => res.json()
    );
}
