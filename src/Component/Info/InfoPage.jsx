import React from "react";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { BasicInfo } from "./BasicInfo.jsx";
import { MilitaryService } from "./MilitaryService.jsx";

const InfoCard = ({ title, children }) => {
  return (
    <Card style={{ marginBottom: "16px" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ borderBottom: "2px solid black" }}
        >
          {title}
        </Typography>
        <div style={{ marginTop: "10px" }}>{children}</div>
      </CardContent>
    </Card>
  );
};

export const InfoPage = () => {
  return (
    <BaseComponent>
      <PageContent>
        <Box
          sx={{
            marginX: "auto", // 좌우 중앙 정렬
            maxWidth: "1000px", // 최대 너비
            minWidth: "1000px",
            width: "100%", // 너비는 100%로 시작
            paddingX: "16px", // 작은 화면일 때 좌우 여백 추가
          }}
        >
          <InfoCard title="기본 정보">
            <BasicInfo />
          </InfoCard>

          <InfoCard title="병역사항">
            <MilitaryService />
          </InfoCard>

          <InfoCard title="수상">
            <TextField fullWidth label="상훈명" margin="normal" />
            <TextField fullWidth label="수여 기관" margin="normal" />
            <TextField
              fullWidth
              label="수상 일자 (YYYY.MM.DD)"
              margin="normal"
            />
            <TextField fullWidth label="수상 내역" margin="normal" />
            <TextField fullWidth label="비고" margin="normal" />
          </InfoCard>

          <InfoCard title="동아리/대외활동">
            <TextField fullWidth label="기관명" margin="normal" />
            <TextField
              fullWidth
              label="활동 기간 (YYYY.MM.DD)"
              margin="normal"
            />
            <TextField fullWidth label="역할" margin="normal" />
            <TextField fullWidth label="비고" margin="normal" />
          </InfoCard>

          <InfoCard title="학적사항">
            <TextField fullWidth label="학교 이름" margin="normal" />
            <TextField fullWidth label="재학 기간" margin="normal" />
            <TextField
              fullWidth
              label="구분 (졸업, 졸예, 입학, 편입 등)"
              margin="normal"
            />
            <TextField fullWidth label="전체 학점" margin="normal" />
            <TextField fullWidth label="전공 학점" margin="normal" />
            <TextField fullWidth label="취득 학점" margin="normal" />
            <TextField fullWidth label="취득 전공 학점" margin="normal" />
            <TextField fullWidth label="비고" margin="normal" />
          </InfoCard>
        </Box>
      </PageContent>
    </BaseComponent>
  );
};
