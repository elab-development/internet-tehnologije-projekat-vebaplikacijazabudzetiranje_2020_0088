import React from "react";
import "./AboutMe.css";
import { Col, Row } from "react-bootstrap";
import CardEmployee from "../components/CardEmployee";

const About = () => {
  return (
    <div className="font">
      <Row>
        <br></br>
        <br></br>
        <h1>
          {" "}
          <b>About us</b>
        </h1>
        <br></br>
        <br />
        <b>
          What is BudgetApp? BudgetApp is a Providence, RI-based company that
          makes it easy to split bills with friends and family. We organize all
          your shared expenses and IOUs in one place, so that everyone can see
          who they owe. Whether you are sharing a ski vacation, splitting rent
          with roommates, or paying someone back for lunch, BudgetApp makes life
          easier. We store your data in the cloud so that you can access it
          anywhere: on iPhone, Android, or on your computer. We focus on
          fairness Most people want to be fair to each other, but sometimes they
          forget, or can’t decide on what fair is. In addition to helping people
          honor their debts, we provide mediation advice about fairness issues
          through our “fairness calculators.” These calculators turn our
          crowdsourced data into a neutral fairness opinion about your personal
          situation.
        </b>
      </Row>

      <br></br>
      <br></br>
      <span className="font">
        <h2>
          <b>MEET THE TEAM</b>
        </h2>
      </span>
      <br></br>
      <Row>
        <Col>
          <CardEmployee
            name="Sanja Petrovic"
            description="Among her many childhood goals were meteorologist and judge, but Leanne found her way designing things that are useful, usable, and delightful. She enjoys experimenting in the kitchen and being outside."
            image="https://assets-global.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"
          />
        </Col>
        <Col>
          <CardEmployee
            name="Mara Marinkovic"
            description="Meg joined the BudgetApp team in 2021, but has been sending in feature feedback since 2012. She perfected her focaccia recipe in 2020, and recently had a short stint playing semiprofessional trivia."
            image="https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_06.jpg"
          />
        </Col>
        <Col>
          <CardEmployee
            name="Marta Milosevic"
            description="Before joining BudgetApp, Sarah founded and fostered small teams, including the innovation center at George Washington University and ignite, a purpose-driven digital marketing agency. When not working, she loves vintage shops, parks, and live music."
            image="https://etimg.etb2bimg.com/photo/93893896.cms"
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
