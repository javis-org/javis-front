import { PageTitle } from "../common/PageTitle.jsx";
import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { PeriodFilter } from "./PeriodFilter.jsx";
import { Box } from "@mui/material";
import { RecruitCard } from "./RecruitCard.jsx"; // MUI의 Box 컴포넌트 사용

export const RecruitsPage = () => {
  return (
    <BaseComponent>
      {/* 이모지와 제목을 한 줄로 배치 */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // 수직 가운데 정렬
          gap: "10px", // 이모지와 텍스트 사이 간격 설정
        }}
      >
        {/* 이모지 크기 조정 및 수평 맞추기 */}
        <div
          style={{
            fontSize: "32px", // 이모지 크기
            verticalAlign: "middle", // 텍스트와 수평 맞추기
            alignItems: "center",
          }}
        >
          💼
        </div>
        <PageTitle title={"내 공고"} />
      </Box>
      <PageContent>
        <PeriodFilter />
        {/*  List*/}
        <RecruitCard />
        <RecruitCard />
        <RecruitCard />
      </PageContent>
    </BaseComponent>
  );
};
