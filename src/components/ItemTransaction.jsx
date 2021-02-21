import React, { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";

export const ItemTransaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { amount, fullName, id, leaseDate, type } = transaction;

  return (
    <div className="">
      <i
        onClick={toggle}
        className={`cursor-pointer accordion-button ${
          isOpen ? "collapsed" : ""
        } ${type === "debit" ? "debit" : "credit"}`}
      >
        <small>
          Type: {type} - Amount: {amount}
        </small>
      </i>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <>
              <h3>Fullname: {fullName}</h3>
              <h5>ID: {id}</h5>
              <h5>Type: {type}</h5>
              <h5>Lease date {JSON.stringify(leaseDate)}</h5>
            </>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};
