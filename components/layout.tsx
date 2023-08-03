"use client";
import Header from "./Header/";
import Script from "next/script";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { JsxElement } from "typescript";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Layout = ({ children }: { children: ReactNode }) => {
  // const isBrowser = () => typeof window !== "undefined";
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
    <section>
      <Header />
      <Cursor />
      {children}
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      />
    </section>
  );
};

export default Layout;
