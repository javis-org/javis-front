import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IntroductionList } from "./LeftContainer/IntroductionList.jsx";
import { useRecoilValue } from "recoil";
import { memberIdValue } from "../Recoil.jsx";
import { Add } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const data2 = [
  {
    title: "2024-3 디프만",
    items: [
      {
        title: "새로운 기술을 배운 경험",
        text: "최근에 새로운 기술을 배워 프로젝트에 적용했습니다. 이 과정에서 많은 어려움을 겪었지만, 최종적으로는 성공적으로 적용할 수 있었습니다.",
      },
      {
        title: "팀 프로젝트의 성과",
        text: "팀 프로젝트에서 맡은 역할을 통해 팀워크의 중요성을 다시 한 번 느꼈습니다. 프로젝트가 성공적으로 완료되어 매우 보람 있었습니다.",
      },
    ],
  },
  {
    title: "2023-2 디프만",
    items: [
      {
        title: "학교 수업이나 대외 활동을...",
        text: "저는 프로젝트를 진행하며.... 했습니다. 이를 통해 ... 느꼈습니다.",
      },
      {
        title: "동료와의 갈등 경험을 ....",
        text: "저는 1000번 이상의 갈등 경험을... 겪었습니다",
      },
    ],
  },
  {
    title: "2024-4 디프만",
    items: [
      {
        title: "업무 개선 프로젝트",
        text: "업무 개선을 위한 프로젝트를 주도하며 팀원들과 함께 새로운 프로세스를 도입했습니다. 이로 인해 효율성이 크게 향상되었습니다.",
      },
      {
        title: "고객 피드백을 통한 개선",
        text: "고객 피드백을 분석하여 제품의 기능을 개선하였습니다. 고객 만족도가 증가하였고, 프로젝트의 성공적인 완료를 경험했습니다.",
      },
    ],
  },
];

// 수정: 구조 분해 할당으로 `isExpanded`를 받아옴
export const LeftContainer = ({ isExpanded, handleToggleMenu }) => {
  const [data, setData] = useState(data2);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await client.get(`jobPostings?memberId=${memberId}`);
      // setData(response.data);
      setData(data2);
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        transition: "width 0.3s ease", // 애니메이션 효과 추가
        minWidth: isExpanded ? "350px" : "50px", // 접혔을 때와 펼쳤을 때의 너비 설정
        width: isExpanded ? "20%" : "50px",
        padding: "10px",
        overflow: "hidden", // 접혔을 때 내용을 숨기기 위해
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "25px",
        }}
      >
        {isExpanded && ( // 접혔을 때는 텍스트를 숨기기
          <Typography variant="h5" sx={{ marginRight: "10px" }}>
            ✏️ 내 자기소개서
          </Typography>
        )}
        <Button sx={{ marginLeft: "auto" }} onClick={handleToggleMenu}>
          {isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
        </Button>
      </Box>
      {isExpanded && ( // 접혔을 때는 목록도 숨기기z\
        <>
          <Box
            sx={{
              height: "80vh",
              overflowY: "auto",
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
            <Button>
              <Add fontSize="small" /> {isExpanded && "추가"}
            </Button>
            {data.map((item, index) => (
              <IntroductionList item={[item]} key={index} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};
