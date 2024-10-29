import { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import IntroductionList from "./IntroductionList.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import { isExpandValue, memberIdValue } from "../../Recoil.jsx";
import { Add } from "@mui/icons-material";
import { client } from "../../api.js";
import SearchIcon from "@mui/icons-material/Search.js";
import MenuIcon from "@mui/icons-material/Menu.js";

export const LeftContainer = () => {
  const [data, setData] = useState([]);
  const memberId = useRecoilValue(memberIdValue);
  const [isExpanded, setIsExpanded] = useRecoilState(isExpandValue);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(`jobPostings?memberId=${memberId}`);
      setData(response.data);
    };
    fetchData();
  }, [memberId]);

  const handleAddCompany = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        title: "이름없음",
        description: null,
        isModified: true,
      },
    ]);
  };

  return (
    <Box sx={{ position: "relative", width: isExpanded ? "300px" : "60px" }}>
      {/* Menu Icon을 사이드바 바깥 오른쪽에 위치 */}
      <IconButton
        onClick={handleExpandToggle}
        sx={{
          position: "absolute",
          top: "10px",
          right: isExpanded ? "-50px" : "10px", // 펼쳐졌을 때는 오른쪽 바깥에 위치
          zIndex: 1000,
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "right 0.3s ease",
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* 사이드바 내용 */}
      <Box
        sx={{
          paddingTop: "20px", // MenuIcon 아래부터 시작
          paddingLeft: "10px",
          paddingRight: "10px",
          overflow: "hidden",
          backgroundColor: "#f7f6fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          transition: "width 0.3s ease",
        }}
      >
        {/* 검색 버튼과 제목 */}
        {isExpanded && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <Button startIcon={<SearchIcon />} sx={{ width: "100%" }}>
              검색
            </Button>
          </Box>
        )}

        {/* 제목 */}
        {isExpanded && (
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", width: "100%", textAlign: "center" }}
          >
            ✏️ 내 자기소개서
          </Typography>
        )}

        {/* 목록 */}
        {isExpanded && (
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              overflowY: "auto",
              padding: "0 20px",
              paddingRight: "10px",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
              },
            }}
          >
            <Button
              onClick={handleAddCompany}
              sx={{ width: "100%", marginBottom: "10px" }}
            >
              <Add fontSize="small" /> 추가
            </Button>
            {data.map((item, index) => (
              <IntroductionList item={item} key={item.id} index={index} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
