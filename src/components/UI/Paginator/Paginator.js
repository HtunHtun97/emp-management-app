import React from "react";
import Pagination from "react-bootstrap/Pagination";
import classes from "./Paginator.module.css";

const paginator = (props) => {
  let items = [];

  for (let num = 1; num <= props.items; num++) {
    items.push(
      <Pagination.Item
        key={num}
        className={classes.PaginatorItem}
        active={num === props.activeItem}
        onClick={() => props.clicked(num)}
      >
        {num}
      </Pagination.Item>
    );
  }

  return <Pagination className="mt-3">{items}</Pagination>;
};

export default paginator;
