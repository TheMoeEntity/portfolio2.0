"use client";
import Image from "next/image";
import aman from "../../../public/images/craw.png";
import React, { CSSProperties, useState } from "react";
import styles from "../../../app/page.module.css";
import Link from "next/link";
import { Helpers, portfolioData } from "@/Helpers";

const heroStyles: CSSProperties = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(/images/home-bg.jpeg)",
  backgroundSize: "cover",
  color: "#272829",
  textAlign: "center",
  fontWeight: "200",
  // backgroundAttachment: "fixed",
  padding: "70px",
  position: "relative",
  backgroundPosition: "bottom",
};
const overlay: CSSProperties = {
  background: "rgba(0, 0, 0, 0.87)",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "1000",
};
const detail: CSSProperties = {
  width: "100%",
  background: "var(--main)",
  padding: "60px 0px",
};
const PortfolioPage = ({ data }: any) => {
  const [details] = useState(data as portfolioData);
  return (
    <>
      <div className={styles.port} style={heroStyles}>
        <div style={overlay}></div>
        <h1 style={{ fontSize: "40px", width: "100%" }}>Portfolio Details</h1>
        <h2>
          <span>
            <Link href={"/"}>home</Link>{" "}
          </span>
          / Portfolio Details / {details.name}
        </h2>
      </div>
      <div className={styles.details} style={detail}>
        <div style={{ position: "relative" }} className={styles.screen}>
          <div className={styles.monitor}>
            <Image
              src={`/images/${details.images[0]}`}
              alt="laptop screen"
              fill={true}
              quality={100}
              priority={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 3024px) 100vw, (max-width: 3024px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className={styles.portdetails}>
          <div>
            <p>
              {details.details[0]} <br /> <br />
              {details.details[1]}
              <br /> <br /> {details.details[2]}
            </p>
          </div>
          <div>
            <h2>Project Information</h2>
            <ul>
              <li>
                <b>Category:</b> Web development.
              </li>
              <li>
                <b>Tech stack:</b> {Helpers.getStack(details.stack)}
              </li>
              <li>
                <b>Project Date:</b> {details.date}
              </li>
              <li>
                <b>Project URL:</b>{" "}
                <span>
                  <a href={details.url}>{details.url}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
