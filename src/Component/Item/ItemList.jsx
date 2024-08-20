import React, { useState } from "react";
import { Box, Button, Container, Divider, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

export default function ItemList() {
  const [fields, setFields] = useState([{ q: "", a: "", isEditing: true }]);
  console.log(fields);
  const handleAddField = () => {
    setFields([...fields, { q: "", a: "", isEditing: true }]);
  };

  const handleInputChange = (index, type, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, [type]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  const handleToggleEdit = (index) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, isEditing: !field.isEditing };
      }
      return field;
    });
    setFields(newFields);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {fields.map((field, index) => (
          <Box key={index} sx={{ width: "100%", mb: 2 }}>
            <div style={{ display: "flex" }}>
              <h3 style={{ display: "flex", margin: "5px 0" }}>Q{index + 1}</h3>
              <Button
                variant="contained"
                size="sm"
                style={{ display: "flex", marginLeft: "auto" }}
                onClick={() => handleToggleEdit(index)}
              >
                {field.isEditing ? "완료" : "수정"}
              </Button>
            </div>
            <TextField
              fullWidth
              variant="outlined"
              value={field.q}
              onChange={(e) => handleInputChange(index, "q", e)}
              sx={{ mb: 1 }}
              disabled={!field.isEditing}
            />
            <StyledLabel>{`A${index + 1}`}</StyledLabel>
            <Textarea
              fullWidth
              minRows={4}
              variant="outlined"
              value={field.a}
              onChange={(e) => handleInputChange(index, "a", e)}
              disabled={!field.isEditing}
            />
            <Divider sx={{ marginTop: "20px" }} />
          </Box>
        ))}
        <Button fullWidth variant="contained" onClick={handleAddField}>
          <span style={{ fontWeight: "700" }}>+</span>
        </Button>
      </Box>
    </Container>
  );
}
