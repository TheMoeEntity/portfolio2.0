import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { Helpers } from "@/Helpers";
import { getDocuments } from "@/Helpers/firebase";

import styles from "./page.module.css";

export default async function Home() {
  const data = await Helpers.getData2();
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio data={data} />
    </main>
  );
}
