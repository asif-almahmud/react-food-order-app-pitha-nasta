import React from "react";
import { Header, Snacks } from "z-index";
import classes from "./Home.module.scss";

const { header, snacks } = classes;

export const Home = () => {
  return (
    <>
      <div className={header}>
        <Header />
      </div>
      <div className={snacks}>
        <Snacks />
      </div>
    </>
  );
};
