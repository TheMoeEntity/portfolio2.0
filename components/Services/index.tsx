"use client";
import styles from "../../app/page.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const Services = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1,
          type: "spring",
          bounce: 0.4,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "100vw",
      });
    }
  }, [animation, inView]);
  return (
    <div id="services" className={styles.proj}>
      <h2 ref={ref}>WHAT I DO?</h2>
      <div className={styles.projects}>
        <motion.div animate={animation}>
          <div>
            <div className={styles.icons}>
              <i className="fa-solid fa-laptop"></i>
            </div>
            <div className={styles.count}>
              <span>Responsive Design</span>
              &nbsp;
            </div>
          </div>
          <div>
            <div className={styles.icons}>
              <i className="fa-solid fa-code"></i>
            </div>
            <div className={styles.count}>
              <span>Web Development</span>
              &nbsp;
            </div>
          </div>

          <div>
            <div className={styles.icons}>
              <i className="fa-brands fa-apple"></i>
            </div>
            <div className={styles.count}>
              <span>iOS Applications</span>
              &nbsp;
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
