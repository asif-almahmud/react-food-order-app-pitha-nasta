import React, { useContext } from "react";
import mealsImage from "assets/images/meals.jpg";
import classes from "./Header.module.scss";
import { HeaderCartButton } from "./headerCartButton";

const {
  header_container,
  header_text_container,
  header_text,
  cart,
  header_image_container,
} = classes;

export const Header = () => {
  return (
    <>
      <header className={header_text_container}>
        <h1 className={header_text}>Pitha Nasta</h1>
        <HeaderCartButton />
      </header>
      <div className={header_image_container}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};
