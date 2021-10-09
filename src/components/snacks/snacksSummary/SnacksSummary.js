import React from "react";
import classes from "./SnacksSummary.module.scss";

const { summary_container, summary_heading, summary_paragraph } = classes;

export const SnacksSummary = () => {
  return (
    <div className={summary_container}>
      <h2 className={summary_heading}>Delicious food delivered to you</h2>
      <p className={summary_paragraph}>
        Choose your favorite snacks from our available snacks today. And enjoy a
        quality time.
      </p>
      <p className={summary_paragraph}>
        All our snacks are cooked with high quality ingredients and of course by
        a passionate cook.
      </p>
    </div>
  );
};
