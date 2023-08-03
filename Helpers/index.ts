import { StaticImageData } from "next/image";
import pepnops from "../public/images/pepnops.png";
import dove from "../public/images/dove.png";
import mlaw from "../public/images/mlaw.png";

export type assets = {
  image: StaticImageData;
  title: string;
  date: string;
};

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
    title: "Nosrati Law Group",
    date: "03 Jun. 2023",
  },
];
