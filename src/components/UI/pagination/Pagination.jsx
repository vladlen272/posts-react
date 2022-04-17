import Button from "../button/Button";
import classes from "./pagination.module.css"
const Pagination = (props) => {

  const changeItem = (item) => {
    props.changeItem(item);
  };

  return (
    <div className={classes.pagination}>
      {props.list.map((item, index) => (
        <Button margin={7.5} onClick={() => changeItem(item)} key={index}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
