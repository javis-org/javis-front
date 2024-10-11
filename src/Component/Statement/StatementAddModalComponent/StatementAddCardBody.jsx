import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TagSelector } from "./TagSelector.jsx";
import { TextTypeSelector } from "./TextTypeSelector.jsx";
import { useNavigate } from "react-router-dom";

const StatementAddCardBody = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const handleTypeChange = (event, newTags) => {
    setSelectedType(newTags);
  };
  const handleTagChange = (event, newTags) => {
    setSelectedTags(newTags);
  };

  return (
    <Box>
      <Typography
        color="textPrimary"
        component="div"
        sx={{ fontWeight: "600", fontSize: "16px" }}
      >
        작성할 글에 대한 태그를 선택해 주세요.
      </Typography>
      <Typography
        color="textSecondary"
        component="div"
        sx={{ fontSize: "12px" }}
      >
        태그 설정 후 쉽게 검색할 수 있습니다.
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Box sx={{ marginTop: "10px" }}>
          <TagSelector
            handleTagChange={handleTagChange}
            selectedTags={selectedTags}
          />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Typography color="textSecondary">종류</Typography>
          <TextTypeSelector
            handleTagChange={handleTypeChange}
            selectedTags={selectedType}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{ marginTop: "10px", width: "100%" }}
        onClick={() => navigate("/statement/editor")}
      >
        선택 완료
      </Button>
    </Box>
  );
};

export default StatementAddCardBody;
