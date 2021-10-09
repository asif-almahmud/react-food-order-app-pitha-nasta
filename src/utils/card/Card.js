import React from "react";
import classes from "./Card.module.scss";

const { card_container } = classes;

export const Card = ({ children }) => {
  return <div className={card_container}>{children}</div>;
};
