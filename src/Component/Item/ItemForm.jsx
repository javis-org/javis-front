import React, { useState } from "react";
import { Box, Button, Divider, TextField } from "@mui/material";
import PropTypes from "prop-types";
import styled from "styled-components";
import TinyMCEEditor from "./TinyMCEEditor";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

function ItemForm({ data, index, onEdit, onDelete }) {
  const [isEdit, setIsEdit] = useState(true);
  const [text, setText] = useState(data.text);

  const handleToggleEdit = () => {
    if (isEdit) {
      onEdit(text); // 데이터 수정
    }
    setIsEdit(!isEdit);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ margin: "5px 0" }}>Q{index + 1}</h3>
        <Button
          variant="contained"
          size="sm"
          style={{ marginLeft: "auto", marginRight: "8px" }}
          onClick={handleToggleEdit}
        >
          {isEdit ? "완료" : "수정"}
        </Button>
        <Button variant="contained" color="error" size="sm" onClick={onDelete}>
          삭제
        </Button>
      </div>
      <TextField
        fullWidth
        variant="outlined"
        value={text}
        onChange={handleTextChange}
        disabled={!isEdit}
        sx={{ mb: 1 }}
      />
      <StyledLabel>{`A${index + 1}`}</StyledLabel>
      <TinyMCEEditor />
      <Divider sx={{ marginTop: "20px" }} />
    </Box>
  );
}

ItemForm.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ItemForm;
