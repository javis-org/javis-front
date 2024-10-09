import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import IntroductionList from "./IntroductionList.jsx";
import { useRecoilValue } from "recoil";
import { memberIdValue } from "../../Recoil.jsx";
import { Add } from "@mui/icons-material";
import { client } from "../../api.js";

// 수정: 구조 분해 할당으로 `isExpanded`를 받아옴
export const LeftContainer = ({ isExpanded }) => {
  const [data, setData] = useState([]);
  const memberId = useRecoilValue(memberIdValue);
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(`jobPostings?memberId=${memberId}`);
      setData(response.data);
      // setData(data2);
    };
    fetchData();
  }, [memberId]);

  console.log(data);
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
        transition: "width 0.3s ease", // 애니메이션 효과 추가
        minWidth: isExpanded ? "300px" : "50px", // 접혔을 때와 펼쳤을 때의 너비 설정
        width: isExpanded ? "20%" : "50px",
        padding: "10px 0px 10px 10px",

        // background: "#f7f6fa",
        display: isExpanded ? "block" : "none",
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
            <Button>검색</Button>
          </Typography>
        )}
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
            <Button onClick={handleAddCompany}>
              <Add fontSize="small" /> {isExpanded && "추가"}
            </Button>
            {data.map((item, index) => (
              <IntroductionList item={item} key={item.id} index={index} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};
