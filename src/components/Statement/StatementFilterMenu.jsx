import { Box, Button, styled } from "@mui/material";
import { AddCardComponent } from "../common/Card/AddCardComponent.jsx";
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

/**
 * StatementFilterMenu 컴포넌트
 * @param {Object} props - 컴포넌트에 전달되는 속성들 // 없을 경우 안보임
 * @param {Array} menus - 필터 메뉴 목록 (예: ['전체', '승인', '반려']) 없을 경우 안보임
 * @param {Function} props.select - 사용자가 필터를 선택했을 때 호출되는 함수, 선택된 메뉴 항목을 전달함
 */
export const StatementFilterMenu = ({
  menus = [],
  selectMenu,
  setSelectMenu,
  modalBody,
}) => {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ visibility: menus.length === 0 ? "hidden" : "visible" }}>
        {menus.length > 0 &&
          menus.map((menu, index) => (
            <CustomButton
              key={index}
              onClick={() => setSelectMenu(menu.type)}
              isSelected={selectMenu === menu.type}
            >
              {menu.type}
              <CountBox isSelected={selectMenu === menu.type}>
                {menu.count}
              </CountBox>
            </CustomButton>
          ))}
      </Box>
      <AddCardComponent
        modalBody={modalBody}
        show={show}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Box>
  );
};
