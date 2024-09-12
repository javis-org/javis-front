import { Box, Button, Typography } from "@mui/material";

import { IntroductionList } from "./LeftContainer/IntroductionList.jsx";

const data = [
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

export const LeftContainer = () => {
  return (
    <>
      {/* Left Sidebar */}
      <Box
        sx={{
          minWidth: "350px",
          width: "20%",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "25px",
          }}
        >
          <Typography variant="h5">✏️ 내 자기소개서</Typography>
          <Button
            sx={{
              borderRadius: "20px",
              textTransform: "none",
            }}
            variant="contained"
          >
            자기소개서 추가
          </Button>
        </Box>

        {data.map((item, index) => (
          <IntroductionList item={[item]} key={index} />
        ))}
      </Box>
    </>
  );
};
