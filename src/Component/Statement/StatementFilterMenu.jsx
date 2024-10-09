import { Box, Button, styled } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
const CustomButton = styled(Button)`
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
  &:hover {
    background: none;
  }
`;

const CountBox = styled(Box)`
  width: 24px; /* 정사각형을 만들기 위한 너비 */
  height: 24px; /* 정사각형을 만들기 위한 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  border-radius: 30%; /* 원형 모양을 만들려면 사용, 정사각형은 제거 */
  background-color: ${(props) => (props.isSelected ? "black" : "gray")};
  color: white;
`;
export const StatementFilterMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("경험정리");
  const menus = ["경험정리", "자기소개서", "면접 질문"];
  return (
    <Box sx={{ display: "flex" }}>
      {menus.map((menu, index) => (
        <CustomButton
          onClick={() => setSelectedMenu(menu)}
          isSelected={selectedMenu === menu}
        >
          {menu}
          <CountBox isSelected={selectedMenu === menu}>12</CountBox>
        </CustomButton>
      ))}
      <Button sx={{ marginLeft: "auto", fontSize: "16px" }}>
        <Add /> 카드추가
      </Button>
    </Box>
  );
};
