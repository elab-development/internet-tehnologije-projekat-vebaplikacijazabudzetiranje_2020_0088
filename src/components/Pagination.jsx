import React from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CardEvent from "./CardEvent";
import { Col, Row } from "react-bootstrap";

import foodAndDrink from "../pages/food.jpeg";
import transport from "../pages/transport.jpeg";
import uncat from "../pages/uncategorized.jpeg";
import lugg from "../pages/lugg.jpeg";
import entertainment from "../pages/entertainment.jpeg";

function Pagination(props) {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 3;

  useEffect(() => {
    if (data) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  const returnImage = (value) => {
    switch (value) {
      case "Travel":
        return lugg;
      case "Transportation":
        return transport;
      case "Entertainment":
        return entertainment;
      case "Food and drink":
        return foodAndDrink;
      default:
        return uncat;
    }
  };
  return (
    <>
      <Row>
        {currentItems.map((event) => {
          return (
            <Col>
              <CardEvent
                type={event.type.name}
                name={event.name}
                email={event.user.email}
                amount={event.amount}
                date={event.eventDate}
                image={returnImage(event.type.name)}
              ></CardEvent>
            </Col>
          );
        })}
      </Row>
      <br />
      <br />
      <br />
      <div className="font">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </>
  );
}

export default Pagination;
