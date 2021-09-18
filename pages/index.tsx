import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Display from "./components/Display";
import Input from "./components/Input";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Input />
        <Display />
      </main>
    </div>
  );
};

export default Home;
