import Button from "../button/Button";
import classes from "./modal.module.css";

function Modal({ children, visible, setVisible }) {
  let rootClasses = [classes.modal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      
    </div>
  );
}

export default Modal;
