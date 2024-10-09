import { CardItem } from "../common/CardItem.jsx";
import { Box } from "@mui/material";

export const CardList = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4개의 열을 유지
        gap: "10px", // 카드 사이의 간격
        "@media (max-width: 1200px)": {
          gridTemplateColumns: "repeat(3, 1fr)", // 화면이 줄어들면 3개로 조정
        },
        "@media (max-width: 900px)": {
          gridTemplateColumns: "repeat(2, 1fr)", // 더 작아지면 2개로
        },
        "@media (max-width: 600px)": {
          gridTemplateColumns: "repeat(1, 1fr)", // 모바일 사이즈에서는 1개씩
        },
      }}
    >
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      {/* CardItem을 여러 개 추가 */}
    </Box>
  );
};
