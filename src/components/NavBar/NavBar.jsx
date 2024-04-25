import React from "react";
import { Navbar } from "react-bootstrap";
import { Calendar4Event } from "react-bootstrap-icons";

export const NavBar = () => {
  return (
    <Navbar
      bg="#4A6C6F"
      data-bs-theme="light"
      // expand="lg"
    >
      <div className="d-flex flex-row gap-2">
        <Navbar.Brand href="/">
          <Calendar4Event size={30} />
          FIND MY EVENTS
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};
