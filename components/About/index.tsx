"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import me from "../../public/images/moe6.jpg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { skills } from "@/Helpers";
import { useEffect, useRef } from "react";
import { useAnimations } from "@/Helpers/useAnimation";

const About = () => {
  const grid = useRef<null | HTMLDivElement>(null);
  useAnimations(130, grid, styles.animateIn, false);
  const addAnimation = () => {
    alert("Hello world");
  };
  // useEffect(() => {
  //   addAnimation();
  // }, []);

  return (
    <div id="about" className={styles.about}>
      <ParallaxProvider>
        <Parallax speed={-5}>
          <div ref={grid} className={styles.card}>
            <div>
              <div className={styles.meProfile}>
                <div>
                  <Image
                    src={me}
                    alt="hero-image"
                    fill={true}
                    quality={100}
                    priority={true}
                    sizes="(max-width: 3024px) 100vw, (max-width: 3024px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <div>
                    <span className={styles.deets}>
                      <span>Name:</span> Moses Nwigberi C.
                    </span>

                    <span className={styles.deets}>
                      <span>Profile:</span> Frontend developer
                    </span>
                    <span className={styles.deets}>
                      <span>Email: </span> mosesnwigberi@gmail.com
                    </span>
                    <span className={styles.deets}>
                      <span>Phone: </span> (234) 807 548-9362
                    </span>
                  </div>
                </div>
              </div>
              <h3>SKILLS</h3>
              {skills.map((x, i) => (
                <div key={i} className={styles.skillGroup}>
                  <span>{x.skill}</span> <br />
                  <div className={styles.bar}>
                    <div style={{ width: x.width }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2>About Me</h2>
              <p>
                Hey there! Welcome to my world of pixels and code!{` I'm`}{" "}
                Moses, or Moe as my friends call me, a frontend web developer
                with a burning passion for all things iOS and Swift. 🚀 <br />{" "}
                <br />
                Picture this: a cup of steaming hot coffee, a keyboard covered
                in code snippets, and a wild imagination ready to transform
                ideas into digital reality. {`That's`} me in a nutshell! With a
                magical blend of creativity and technical wizardry,{` I've`}{" "}
                mastered the art of crafting beautiful and intuitive user
                interfaces. My fingertips dance across the keys, weaving lines
                of HTML, CSS, and JavaScript into mesmerizing web experiences.
                But my journey {`doesn't`} stop at the web. Oh no! I am like a
                superhero with a dual identity. When the sun sets and the moon
                rises, I transform into an iOS enthusiast, delving deep into the
                world of app development and wielding the mighty Swift language.{" "}
                <br /> <br />I believe that a great website or app is like a
                work of art that leaves a lasting impression. {`It's`}a
                masterpiece that combines functionality and aesthetics, leaving
                users in awe and craving for more. So, grab your virtual sword
                and join me on this epic journey. {`Let's`} push the boundaries
                of {`what's`}
                possible and create digital wonders that will captivate hearts
                and minds. Welcome to my portfolio. Welcome to the world of
                limitless possibilities.{` Let's`} make some magic together! ✨
              </p>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default About;
