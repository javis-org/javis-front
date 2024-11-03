import React from "react";
import { Box, Button, Card, CardContent, styled } from "@mui/material";
import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { BasicInfo } from "./BasicInfo.jsx";
import { MilitaryInfo } from "./MilitaryInfo.jsx";
import { ClubInfo } from "./ClubInfo.jsx";
import { AcademicInformation } from "./AcademicInformation.jsx";
import { AwardsInfo } from "./AwardsInfo.jsx";
import { Add } from "@mui/icons-material";

const CustomButton = styled(Button)`
  background-color: black;
  color: white;
  margin-top: 30px;
  &:hover {
    background: gray;
    color: black;
  }
`;

const InfoCard = ({ title, children }) => (
  <Card style={{ marginBottom: "16px" }}>
    <CardContent>
      <div style={{ marginTop: "10px" }}>{children}</div>
    </CardContent>
  </Card>
);

export const InfoPage = () => {
  return (
    <BaseComponent>
      <PageContent>
        <Box
          sx={{
            marginX: "auto",
            maxWidth: "1000px",
            minWidth: "1000px",
            width: "100%",
            paddingX: "16px",
          }}
        >
          <InfoCard>
            <BasicInfo />
          </InfoCard>

          <InfoCard>
            <MilitaryInfo />
          </InfoCard>

          <InfoCard title="수상">
            <AwardsInfo />
            <CustomButton fullWidth>
              <Add sx={{ color: "green", fontWeight: "bold" }} /> 추가하기
            </CustomButton>
          </InfoCard>

          <InfoCard title="동아리/대외활동">
            <ClubInfo />
            <CustomButton fullWidth>
              <Add sx={{ color: "green", fontWeight: "bold" }} /> 추가하기
            </CustomButton>
          </InfoCard>

          <InfoCard title="학적사항">
            <AcademicInformation />
          </InfoCard>
        </Box>
      </PageContent>
    </BaseComponent>
  );
};
