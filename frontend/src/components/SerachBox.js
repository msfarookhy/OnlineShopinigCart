import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SerachBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Serach Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="sumbit" varinat="outline-success" className="p-2">
        Serach
      </Button>
    </Form>
  );
};

export default SerachBox;
