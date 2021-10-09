import { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";
import { AppContext } from "zeeland";

const { backdrop, modal_overlay_container, modal_overlay_content } = classes;

const Backdrop = (props) => {
  const { setShowCart } = useContext(AppContext);
  return <div className={backdrop} onClick={() => setShowCart(false)} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={modal_overlay_container}>
      <div className={modal_overlay_content}>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};
