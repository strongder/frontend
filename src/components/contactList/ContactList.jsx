import React from "react";
import { Tab, Tabs } from "react-bootstrap";

function ContactList() {
  return (
    <Tabs
    defaultActiveKey="profile"
    id="justify-tab-example"
    className="mb-3"
    justify
  >
    <Tab eventKey="home" title="Students">
      
    </Tab>
    <Tab eventKey="profile" title="Teachers">
      Teacher message
    </Tab>
   
  </Tabs>
  );
}

export default ContactList;
