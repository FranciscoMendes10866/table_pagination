import React, { useState } from "react";

import countriesData from "./data/countries";
import styles from "./App.module.css";
import Table from "./components/Table";

const App = () => {
  const [countries] = useState([...countriesData]);
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Table data={countries} rowsPerPage={4} />
      </div>
    </main>
  );
};

export default App;
