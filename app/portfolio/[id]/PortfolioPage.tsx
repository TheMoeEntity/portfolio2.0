"use client";
import Image from "next/image";
import aman from "../../../public/images/craw.png";
import React, { CSSProperties } from "react";
import styles from "../../../app/page.module.css";
import Link from "next/link";
import { Helpers } from "@/Helpers";
const heroStyles: CSSProperties = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(/images/home-bg.jpeg)",
  backgroundSize: "cover",
  color: "#272829",
  textAlign: "center",
  fontWeight: "200",
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
  background: "#060e16",
  padding: "60px 0px",
};
const PortfolioPage = ({ title }: { title: string }) => {
  return (
    <>
      <div className={styles.port} style={heroStyles}>
        <div style={overlay}></div>
        <h1 style={{ fontSize: "40px", width: "100%" }}>Portfolio Details</h1>
        <h2>
          <span>
            <Link href={"/"}>home</Link>{" "}
          </span>
          / Portfolio Details / {Helpers.filterText(title)}
        </h2>
      </div>
      <div className={styles.details} style={detail}>
        <div style={{ position: "relative" }} className={styles.screen}>
          <div className={styles.monitor}>
            <Image
              src={aman}
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
              Crawford Hostel Complaints Management system is a CRUD platform
              that provides solutions to student complaints in various hostels.
              The backend is powered by Django REST framework and a PostgreSQL
              database. <br /> <br />
              tenetur asperiores eaque magnam distinctio culpa itaque fugit,
              suscipit quisquam eveniet placeat dolore fugiat labore amet quia
              numquam voluptate, doloremque consequuntur laudantium dolorem? A
              <br /> <br /> porro sed nulla explicabo fugit vel minus provident
              reprehenderit, consequatur voluptas quaerat officiis. Ad,
              exercitationem nihil. Delectus earum soluta voluptates
              necessitatibus, consequatur eaque animi sit distinctio temporibus,
              architecto magni consectetur iste natus pariatur qui quam optio.
              porro sed nulla explicabo fugit vel minus provident reprehenderit,
              consequatur voluptas quaerat officiis. Ad, exercitationem nihil.
              Delectus earum soluta voluptates necessitatibus, consequatur eaque
              animi sit distinctio temporibus, architecto magni consectetur iste
              natus pariatur qui quam optio.
            </p>
          </div>
          <div>
            <h2>Project Information</h2>
            <ul>
              <li>
                <b>Category:</b> Web development.
              </li>
              <li>
                <b>Tech stack:</b> NextJs, Django, TypeScript, Next-auth,
                OpenAI, postgreSQL
              </li>
              <li>
                <b>Project Date:</b> 27th August, 2023.
              </li>
              <li>
                <b>Project URL:</b>{" "}
                <span>
                  <a href="https://crawfordcomplaints.vercel.app">
                    https://crawfordcomplaints.vercel.app
                  </a>
                </span>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
