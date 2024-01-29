import Modal from "../components/Modal";
import "../App.css";
import React, { useState } from "react";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <h1>Hey</h1>
      <br />
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add event
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Home;
