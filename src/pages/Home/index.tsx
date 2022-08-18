import { useEffect, useState } from "react";
// import { Card, Search } from "../../components"
import { Card, Search } from "@/components";

// import Card from "../../components/Card"
// import Search from "../../components/Search"
import { Quote } from "../../models/quote.model";
import { getQuoteService } from "../../services/quote.service";

import styles from "./styles.module.scss";
import usePresenter from "./hooks/use-presenter";
import { Section } from "./components";

const Home = () => {
  const { quotes } = usePresenter();

  return (
    <div className={styles.container}>
      {/* <Search/>
      {quotes.length ? <Card quote={quotes[0]} /> : ""} */}

      <Section>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>SIMPSONS</h1>
          </div>
          <Search />
        </header>

        <div className={styles.resultContainer}>
          {quotes.length ? <Card quote={quotes[0]} /> : ""}
        </div>
      </Section>
    </div>
  );
};

export default Home;
