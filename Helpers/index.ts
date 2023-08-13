import { StaticImageData } from "next/image";
import pepnops from "../public/images/pepnops.png";
import dove from "../public/images/dove.png";
import mlaw from "../public/images/mlaw.png";
import aman from "../public/images/aman.png";
import craw from "../public/images/craw.png";
import store from "../public/images/store.png";
import { FormEvent } from "react";
import axios from "axios";
import { getDocuments } from "./firebase";

export type replacements = {
  name: string;
  message: string;
  subject: string;
  email: string;
  greeting?: string;
};
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
export const skills: { skill: string; width: string }[] = [
  {
    skill: "NextJs",
    width: "95%",
  },
  {
    skill: "ReactJs",
    width: "90%",
  },
  {
    skill: "Svelte",
    width: "70%",
  },
  {
    skill: "TypeScript",
    width: "95%",
  },
  {
    skill: "NodeJs",
    width: "80%",
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
  static getStack = (stack: string[]): string => {
    const data = stack.join(", ");
    return data;
  };
  // static getInView = (triggerPositionY:number, container:)=> {
  //   let checker = container.current;
  //   let revealpoint = triggerPositionY;
  //   let revealTop = checker.getBoundingClientRect().top;
  //   if (revealTop < height - revealpoint) {
  //     width.classList.add(animation);
  //   }
  // }
  static getSingle = async (id: number) => {
    const data = await this.getData2();
    if (!data) return;
    const single = data.find((x) => {
      return x.id == id;
    });
    return single;
  };
  static getData2 = async () => {
    try {
      return await getDocuments();
    } catch (error) {
      return null;
    }
  };
  static setGreeting = (): string => {
    const hour = new Date().getHours();

    let timeCheck =
      hour < 12
        ? "Good Morning"
        : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

    return timeCheck;
  };
  static getClass = (className: string) => {
    return document.getElementsByClassName(className);
  };
  static sendMail = async (
    setStatus: any,
    setVal: any,
    val: string,
    e: FormEvent<HTMLFormElement>,
    enqueueSnackbar: any
  ) => {
    e.preventDefault();
    const data = {
      fullName: (
        e.target[
          0 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      email: (
        e.target[
          1 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      subject: (
        e.target[
          2 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      message: val,
    };

    if (data.fullName.trim() === "") {
      enqueueSnackbar("Full name cannot be empty", {
        variant: "error",
      });
      return;
    } else if (data.subject === "") {
      enqueueSnackbar("Subject cannot be empty", {
        variant: "error",
      });
      return;
    } else if (
      val === "" ||
      data.message.trim() === "" ||
      data.message.length < 10
    ) {
      enqueueSnackbar("Message cannot be empty or short", {
        variant: "error",
      });
      return;
    }

    setStatus("SENDING....");
    try {
      const url = "/api/contact";
      const res = await axios.post(url, data);

      res.status === 200 &&
        enqueueSnackbar("Message successfully sent", {
          variant: "success",
        });

      setStatus("Sent successfully");
      setTimeout(() => {
        const resetForm = e.target as HTMLFormElement;
        resetForm.reset();
        setVal("");
      }, 3000);
    } catch (error) {
      setStatus("...Error sending message");
      enqueueSnackbar(
        "There was an error sending message, try again: " + error,
        {
          variant: "error",
        }
      );
    }
    setStatus("SEND MESSAGE");
  };
}
