import React from "react";
import Button from "react-bootstrap/Button";
import "../index.css";

const InputButton = ({ text }) => {
  return (
    <div>
      <Button className="button" type="submit">
        {text}
      </Button>
    </div>
  );
};

export default InputButton;
