"use client";
import styles from "../../app/page.module.css";

const Services = () => {
  return (
    <div id="services" className={styles.proj}>
      <h2>WHAT I DO?</h2>
      <div className={styles.projects}>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Services;
