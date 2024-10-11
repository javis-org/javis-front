import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import ModalComponent from "../ModalComponent.jsx";
import { useState } from "react";

import StatementAddCardBody from "../../Statement/StatementAddModalComponent/StatementAddCardBody.jsx";

export const AddCardComponent = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  return (
    <>
      <Button
        sx={{ marginLeft: "auto", fontSize: "16px" }}
        onClick={handleOpen}
      >
        <Add /> 카드추가
      </Button>
      <ModalComponent
        show={show}
        backdroup={"true"}
        body={<StatementAddCardBody />}
      />
    </>
  );
};
