import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
import IntroductionList from "./IntroductionList.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import { isExpandValue, memberIdValue } from "../../Recoil.jsx";
import { Add } from "@mui/icons-material";
import { client } from "../../api.js";
import SearchIcon from "@mui/icons-material/Search.js";
import MenuIcon from "@mui/icons-material/Menu.js";
import ModalComponent from "../common/ModalComponent.jsx";
import { SearchComponent } from "./SearchComponent.jsx";
import { CardList } from "../Statement/CardList.jsx";

export const LeftContainer = () => {
  const [data, setData] = useState([]);
  const memberId = useRecoilValue(memberIdValue);
  const [isExpanded, setIsExpanded] = useRecoilState(isExpandValue);
  const [openSearch, setOpenSearch] = useState(false);
  const [selected, setSelected] = useState("statement");

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
    <Box
      sx={{
        position: "relative",
        width: isExpanded ? "300px" : "60px",
        height: "100%", // 전체 뷰포트 높이에 맞춤
        boxSizing: "border-box", // 패딩과의 충돌 방지
        display: "flex", // 추가
        flexDirection: "column", // 추가
      }}
    >
      {/* Menu Icon을 사이드바 바깥 오른쪽에 위치 */}
      <IconButton
        onClick={handleExpandToggle}
        sx={{
          position: "absolute",
          top: "10px",
          right: isExpanded ? "-50px" : "10px",
          zIndex: 1000,
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "right 0.3s ease",
          ":hover": {
            backgroundColor: "#f1f2f3",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* 접혀 있을 때 아이콘들 고정 */}
      {!isExpanded && (
        <>
          <IconButton
            sx={{
              position: "absolute",
              top: "60px",
              left: "10px",
            }}
            onClick={() => setOpenSearch(true)}
          >
            <SearchIcon
              sx={{ color: "white", fontSize: "30px", fontWeight: "700" }}
            />
          </IconButton>

          <IconButton
            sx={{
              position: "absolute",

              top: "110px",
              left: "10px",
              color: "black",
            }}
            onClick={() => {
              setIsExpanded(true);
              setSelected("statement");
            }}
          >
            ✏️
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              top: "170px",
              left: "10px",
              color: "black",
            }}
            onClick={() => {
              setIsExpanded(true);
              setSelected("recruits");
            }}
          >
            💼
          </IconButton>
        </>
      )}

      {/* 사이드바 내용 */}
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: isExpanded ? "20px" : "80px",
          paddingLeft: "10px",
          paddingRight: "10px",
          backgroundColor: "#4d4d4d",
          borderRight: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          overflowX: "hidden", // 가로 스크롤 제거
          height: "calc(100vh - 64px)", // 전체 높이 설정
          boxSizing: "border-box", // 패딩 포함하여 크기 조정
          transition: "width 0.3s ease",
        }}
      >
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
            <Button
              startIcon={<SearchIcon />}
              sx={{ width: "100%", color: "white" }}
              onClick={() => setOpenSearch(true)}
            >
              검색
            </Button>
          </Box>
        )}

        {isExpanded && (
          <ButtonGroup fullWidth>
            <Button
              variant="contained"
              sx={{ color: "#00ff87", background: "black" }}
              onClick={() => {
                setSelected("statement");
              }}
            >
              <Box sx={{ marginRight: "5px" }}>✏️</Box>내 자소서
            </Button>
            <Button
              variant="contained"
              sx={{ color: "#00ff87", background: "black" }}
              onClick={() => setSelected("recruits")}
            >
              <Box sx={{ marginRight: "5px" }}>💼</Box>내 공고
            </Button>
          </ButtonGroup>
        )}

        {isExpanded &&
          (selected === "statement" ? (
            <>
              <Typography
                variant="h6"
                sx={{
                  marginTop: "30px",
                  marginBottom: "10px",
                  width: "100%",
                  textAlign: "center",
                  color: "white",
                }}
              >
                💼 내 자소서
              </Typography>
              <Box
                className="side"
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
                <CardList side={true} />
              </Box>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{
                  marginTop: "30px",
                  marginBottom: "10px",
                  width: "100%",
                  textAlign: "center",
                  color: "white",
                }}
              >
                💼 내 공고
              </Typography>
              <Box
                className="side"
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  overflowX: "hidden",
                  overflowY: "auto",
                  padding: "0 10px",
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
                  sx={{ width: "100%", marginBottom: "10px", color: "white" }}
                >
                  <Add fontSize="small" /> 추가
                </Button>
                {data.map((item, index) => (
                  <IntroductionList item={item} key={item.id} index={index} />
                ))}
              </Box>
            </>
          ))}
      </Box>
      <ModalComponent
        show={openSearch}
        headerCloseBtn={() => setOpenSearch(false)}
        body={<SearchComponent />}
      />
    </Box>
  );
};
