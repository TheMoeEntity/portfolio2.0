"use client";
import { assets } from "@/Helpers";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../../app/page.module.css";
import me from "../../public/images/dove.png";

const Contact = () => {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };
  useEffect(resizeTextArea, [val]);
  return (
    <div id="contact" className={styles.contact}>
      <h3>GET IN TOUCH</h3>
      <h2>CONTACT</h2>
      <div className={styles.grid}>
        <div className={styles.contactLinks}>
          <div>
            <div className={styles.icons}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className={styles.linkDetails}>mosesnwigberi@gmail.com</div>
          </div>
          <div>
            <div className={styles.icons}>
              <i className="fa fa-map-marker"></i>
            </div>
            <div className={styles.linkDetails}>
              Cooperative villas estate, Badore, <br /> Ajah , Lagos.
            </div>
          </div>
          <div>
            <div className={styles.icons}>
              <i className="fa-solid fa-mobile"></i>
            </div>
            <div className={styles.linkDetails}>(+234) 807-548-9362</div>
          </div>
        </div>
        <div>
          <h3>Contact me</h3>
          <h2>Got an upcoming project?</h2>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="EMail" />
            <input type="text" placeholder="Subject" />
            <textarea
              className={styles.textArea}
              placeholder="Message"
              name=""
              id=""
              cols={10}
              ref={textAreaRef}
              value={val}
              onChange={(e) => setVal(e.target.value)}
              rows={6}
            ></textarea>
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
