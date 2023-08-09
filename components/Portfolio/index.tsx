"use client";
import { assets, portfolioData } from "@/Helpers";
import { useAnimation } from "@/Helpers/useAnimation";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "../../app/page.module.css";

const Portfolio = () => {
  const grid = useRef<HTMLDivElement | null>(null);
  useAnimation(grid, styles.animateIn, false, 300);
  return (
    <div id="portfolio" className={styles.portfolio}>
      <h2>PORTFOLIO</h2>
      <h3>Some of the projects are from work and some are on my own time.</h3>
      <div ref={grid} className={styles.grid}>
        {assets.map((x, i: number) => (
          <div key={i}>
            <div className={styles.img}>
              <Image
                src={x.image}
                alt="hero-image"
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 3024px) 100vw, (max-width: 3024px) 50vw, 33vw"
              />
            </div>
            <div className={styles.projectDetails}>
              <div>
                <h3>{x.title} </h3>
                <b>Web /</b> {x.date}
              </div>
              <Link href={`/portfolio/${x.title}`}>
                <div className={styles.link}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
