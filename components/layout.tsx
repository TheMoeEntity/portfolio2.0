"use client";
import styles from "../app/page.module.css";
import Script from "next/script";
import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { JsxElement } from "typescript";
import { sideassets, sideAssets } from "@/Helpers";
import Link from "next/link";
import Contact from "./Contact";
import { SnackbarProvider } from "notistack";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Layout = ({ children }: { children: ReactNode }) => {
  const [sideIcons, setSideIcons] = useState<sideAssets[]>(sideassets);
  const [currSect, setCurrSect] = useState(0);
  useEffect(() => {
    setCurrSect(0);
    // window.addEventListener("scroll", scrollAction);

    // return () => {
    //   window.removeEventListener("scroll", scrollAction);
    // };
  }, []);

  useEffect(() => {
    setSideIcons((icons) => {
      const newIcons = icons.map((item) =>
        item.id === currSect
          ? {
              ...item,
              active: true,
            }
          : {
              ...item,
              active: false,
            }
      );
      return newIcons;
    });
  }, [currSect]);
  const scrollAction = () => {
    if (window.scrollY > 0 && window.scrollY < 450) {
      setCurrSect(1);
    } else if (window.scrollY > 450 && window.scrollY < 900) {
      setCurrSect(2);
    } else if (window.scrollY > 900 && window.scrollY < 1400) {
      setCurrSect(3);
    } else if (window.scrollY > 1400 && window.scrollY < 2000) {
      setCurrSect(4);
    } else if (window.scrollY > 2000 && window.scrollY < 2600) {
      setCurrSect(5);
    }
  };

  const Cursor = () => {
    return (
      <div>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "#E9271E",
            zIndex: 10,
          }}
          outerStyle={{
            border: "3px solid #E9271E",
            zIndex: 10,
          }}
        />
      </div>
    );
  };
  return (
    <SnackbarProvider
      classes={{ containerRoot: "z-alert" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <section>
        {/* <Header /> */}
        <div className={`${styles.sidebar}`}>
          {sideIcons.map((x) => (
            <div
              key={x.id}
              onClick={() => x.link}
              className={x.active ? styles.active : ""}
            >
              <Link href={x.link}>
                <i className={x.title}></i>
              </Link>
            </div>
          ))}
        </div>
        <Cursor />
        {children}
        <Contact />
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossOrigin="anonymous"
        />
      </section>
    </SnackbarProvider>
  );
};

export default Layout;
