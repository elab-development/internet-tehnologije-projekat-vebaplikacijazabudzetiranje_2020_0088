import React from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CardEvent from "./CardEvent";
import { Col, Row } from "react-bootstrap";

function Pagination(props) {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0); //index of the first item in current page

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage; //index of the last item in the curr page
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]); //svaki put kad se promeni neki od ova tri elemenata onda se ovaj kod useEffect izvrsava

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}

      <Row>
        {currentItems.map((event) => {
          return (
            <Col>
              <CardEvent
                type={event.type}
                name={event.name}
                email={event.email}
                amount={event.amount}
                date={event.date}
                image={event.image}
              ></CardEvent>
            </Col>
          );
        })}
      </Row>
      <br />

      <br />
      <br />
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
    </>
  );
}

export default Pagination;
