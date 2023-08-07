import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { Helpers } from "@/Helpers";
import styles from "./page.module.css";

export default async function Home() {
  // const data = await Helpers.fetcher();
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </main>
  );
}
