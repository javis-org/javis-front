import React, { useState } from "react";
import { BaseComponent } from "../../common/BaseComponent.jsx";
import { PageContent } from "../../common/PageContent.jsx";
import RecruitAddCardBody from "../RecruitAddCardBody.jsx";
import { StatementFilterMenu } from "../../Statement/StatementFilterMenu.jsx";
import { CardList } from "../../Statement/CardList.jsx";
import { PeriodSelector } from "./PeriodSelector.jsx";
import { SupportStatusSelector } from "./SupportStatusSelector.jsx";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { RecruitDeadLineCalandar } from "./RecruitDeadLineCalandar.jsx"; // MoreVertIcon 추가
export function RecruitItemPage() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // 메뉴를 열 때 기준점 설정
  };

  const handleClose = () => {
    setAnchorEl(null); // 메뉴를 닫음
  };

  const handleDelete = () => {
    console.log("삭제됨");
    handleClose(); // 메뉴 닫기
  };

  return (
    <BaseComponent>
      {/* 연도 및 분기 */}
      <Box
        sx={{
          borderBottom: "1px solid #eaebec",
          height: "50px",
          display: "flex", // flexbox 레이아웃 설정
          alignItems: "center", // 수직 중앙 정렬
          justifyContent: "space-between", // 양쪽 끝으로 배치
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PeriodSelector />
          {/* 지원 상태 */}
          <SupportStatusSelector />
          {/* 제목 */}
          <Box
            sx={{
              display: "flex", // flexbox로 제목과 아이콘을 한 줄에 배치
              alignItems: "center", // 제목과 아이콘을 수직 중앙 정렬
              fontSize: "20px",
              fontWeight: "700",
              marginLeft: "50px",
            }}
          >
            공고 제목
            <LinkIcon sx={{ marginLeft: "8px", cursor: "pointer" }} />
            {/* 아이콘과 텍스트 간격 설정 */}
          </Box>
        </Box>

        {/* RecruitDeadLineCalandar와 IconButton을 함께 배치 */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RecruitDeadLineCalandar />
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleDelete}>🗑️ 삭제</MenuItem>
        </Menu>
      </Box>

      <PageContent>
        <StatementFilterMenu
          modalBody={<RecruitAddCardBody />}
          menus={["경험", "자기소개서", "면접 질문"]}
          select={"경험"}
        />
        <CardList />
      </PageContent>
    </BaseComponent>
  );
}
