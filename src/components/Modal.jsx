import React, { useState } from "react";
import "../Modal.css";
import Dropdown from "./Dropdown";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function Modal({ setOpenModal }) {
  const [date, setDate] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [amount, setAmount] = useState(0);
  const [participantEmail, setParticipantEmail] = useState("");
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">ADD EVENT</div>
        <div className={"inputContainer"}>
          <input
            value={eventName}
            placeholder="Enter event name here"
            onChange={(ev) => setEventName(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <div className={"inputContainer"}>
          <input
            value={participantEmail}
            placeholder="Enter participan email here"
            onChange={(ev) => setParticipantEmail(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <div className={"inputContainer"}>
          <input
            value={amount}
            placeholder="Enter amount here"
            onChange={(ev) => setAmount(ev.target.value)}
            className={"inputBox"}
          />
        </div>

        <div className="body">
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div>
            <Dropdown setIsOpen="false" />
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
