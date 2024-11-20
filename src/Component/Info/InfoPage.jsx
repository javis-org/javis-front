import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, styled } from "@mui/material";
import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { BasicInfo } from "./BasicInfo.jsx";
import { MilitaryInfo } from "./MilitaryInfo.jsx";
import { ClubInfo } from "./ClubInfo.jsx";
import { AcademicInformation } from "./AcademicInformation.jsx";
import { AwardsInfo } from "./AwardsInfo.jsx";
import { Add } from "@mui/icons-material";
import {v4 as uuidv4} from 'uuid'


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
  const [awards, setAwards] = useState(() => {
    //초기값 할당
    const savedAwards = JSON.parse(localStorage.getItem("awards"));
    return savedAwards ? savedAwards : [{ awardId: uuidv4() }];
  });  
  
  //추가하기 버튼 클릭시 고유 awardId값을 추가
  const handleAddAward = () => {
    setAwards((prevAwards) => [...prevAwards, { awardId: uuidv4() }]);
  }

  //제거하기 버튼 클릭시 awards 배열에 특정 awradId 값을 제거
  const handleRemoveAward = (awardId) => {
    setAwards((prevAwards) => prevAwards.filter((award) => award.awardId !== awardId));
  }

   // 상태 변경 시 localStorage에 동기화
   useEffect(() => {
     localStorage.setItem("awards", JSON.stringify(awards));
 }, [awards]); 




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
            {awards.map((award,index) => (
              //key= 고유값으로 컴포넌트 리렌더링 조절
              //awardId = 수상 컴포넌트 고유 Id
              //index = 번호를 주어 2번째 수상칸부터 제거하기 기능 활성화
                <AwardsInfo key={award.awardId} awardId={award.awardId} handleRemoveAward={handleRemoveAward} index={index}/>
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
