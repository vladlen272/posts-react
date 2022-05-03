import { useState } from "react";
import Button from "../button/Button";
import classes from "./pagination.module.css"
const Pagination = (props) => {
  const [isClicked, setIsClicked]= useState(false)
  const changeItem = (item) => {
    props.changeItem(item);
    setIsClicked(true)
  };

  return (
    <div className={classes.pagination}>
      {props.list.map((item, index) => (
        <div className={isClicked ? classes.active : ''} key={index}>
        <Button  margin={7.5} onClick={() => changeItem(item)} >
          {item}
        </Button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
