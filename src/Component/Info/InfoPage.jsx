import React, { useState } from "react";
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
margin-bottom: -10px;
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
  const [awards,setAwards] = useState([{awardId:0}]);  //수상칸을 배열을 생성해 저장
  
  //추가하기 버튼 클릭시 awards 배열에 <AwardsInfo /> 컨포넌트 push
  const handleAddAward = () => {
    const newId = awards.length > 0 ? awards[awards.length - 1].awardId + 1 : 0;
    setAwards([...awards, { awardId: newId }]);
  }
  //제거하기 버튼 클릭시 awards 배열에 특정 awradId 값을 제거
  const handleRemoveAward = (awardId) => {
    setAwards((prevAwards) => prevAwards.filter(award => award.awardId !== awardId));
  }


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
            {awards.map((award) => (
                <AwardsInfo awardId={award.awardId} handleRemoveAward={handleRemoveAward}/>
            ))}
            <CustomButton fullWidth onClick={handleAddAward}>
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
