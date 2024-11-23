import { Box, Button, styled } from "@mui/material";

const CountBox = styled(Box)(({ isSide, isSelected }) => ({
  width: isSide ? "24px" : "24px", // 정사각형 너비
  height: isSide ? "24px" : "24px", // 정사각형 높이
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: isSide ? "5px" : "5px",
  borderRadius: "30%", // 원형 모양
  backgroundColor: isSelected ? "black" : "gray",
  color: "white",
}));

const CustomButton = styled(Button)(({ isSelected, isSide }) => ({
  color: isSelected ? "black" : "gray",
  fontWeight: "bold",
  fontSize: isSide ? "16px" : "18px",
  marginRight: isSide ? "10px" : "10px",
  "&:hover": {
    background: "none",
  },
}));
const sideMenu = ["경험", "자소서", "면접"];
export const TypeMenu = ({ menus, selectMenu, setSelectMenu, isSide }) => {
  return (
    <Box
      sx={{
        visibility: menus.length === 0 ? "hidden" : "visible",
        display: "flex-box",
      }}
    >
      {menus.length > 0 &&
        menus.map((menu, index) => (
          <CustomButton
            side={isSide}
            key={index}
            onClick={() => setSelectMenu(menu.type)}
            isSelected={selectMenu === menu.type}
          >
            {isSide ? sideMenu[index] : menu.type}
            <CountBox isSelected={selectMenu === menu.type} isSide={isSide}>
              {menu.count}
            </CountBox>
          </CustomButton>
        ))}
    </Box>
  );
};
