import { CardItem } from "../common/Card/CardItem.jsx";
import { Box } from "@mui/material";

const tags = [
  { tag: "최적화", type: "competency" },
  { tag: "DB", type: "competency" },
  { tag: "웹 접근성 준수", type: "competency" },
  { tag: "API", type: "competency" },
  { tag: "코드 품질", type: "competency" },
  { tag: "설계", type: "competency" },
  { tag: "배포", type: "competency" },
  { tag: "생산성", type: "competency" },
  { tag: "보안", type: "competency" },
  { tag: "테스트", type: "competency" },
  { tag: "디자인시스템", type: "competency" },
  { tag: "UI/UX", type: "competency" },
  { tag: "도메인", type: "competency" },
  { tag: "이해도", type: "competency" },
  { tag: "자동화", type: "competency" },
  { tag: "기타", type: "competency" },
  { tag: "라이브러리", type: "competency" },
  { tag: "리더십", type: "personal" },
  { tag: "성장", type: "personal" },
  { tag: "일정", type: "personal" },
  { tag: "멘탈 관리", type: "personal" },
  { tag: "실패 경험", type: "personal" },
  { tag: "도전", type: "personal" },
  { tag: "갈등경험", type: "personal" },
  { tag: "문제해결", type: "personal" },
  { tag: "분석력", type: "personal" },
  { tag: "성공 경험", type: "personal" },
  { tag: "책임감", type: "personal" },
  { tag: "커리어 계획", type: "personal" },
  { tag: "창의성", type: "personal" },
  { tag: "소통", type: "personal" },
  { tag: "협업 능력", type: "personal" },
];
export const CardList = ({ mode }) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 4개의 열을 유지
        gap: "10px", // 카드 사이의 간격
        // "@media (max-width: 1200px)": {
        //   gridTemplateColumns: "repeat(3, 1fr)", // 화면이 줄어들면 3개로 조정
        // },
        "@media (max-width: 900px)": {
          gridTemplateColumns: "repeat(2, 1fr)", // 더 작아지면 2개로
        },
        "@media (max-width: 600px)": {
          gridTemplateColumns: "repeat(1, 1fr)", // 모바일 사이즈에서는 1개씩
        },
      }}
    >
      <CardItem PersonalTags={["리더십", "성장"]} mode={mode} />
      <CardItem
        tags={[
          { tag: "기타", type: "competency" },
          { tag: "라이브러리", type: "competency" },
          { tag: "리더십", type: "personal" },
          { tag: "성장", type: "personal" },
          { tag: "일정", type: "personal" },
        ]}
        mode={mode}
      />
      <CardItem mode={mode} />
      <CardItem mode={mode} />

      {/* CardItem을 여러 개 추가 */}
    </Box>
  );
};
