import {
  Box,
  Card,
  Chip,
  Grid,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";

export const CardItem = ({
  title = "ㅁ자신의 가치관 또는 인생관에 영향을 미친 경험을 소개하고, 이를 통해 배우거나 느낀 점을 구체적으로 기술하시오.",
  text = "금융결제원이 제공하는 서비스는 매우 다양하며, 저는 개인적으로 금융공동망과 인터넷지로 서비스를 이용해 본 경험이 있습니다.",
  date = "24.10.03",
  tags = [
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
  ],
}) => {
  const CustomCard = styled(Card)`
    min-height: 80px;
    padding: 20px;
    cursor: pointer;
    border-radius: 20px;

    &:hover {
      outline: 2px solid black;
    }
  `;

  const TooltipText = () => (
    <Box>
      <Typography variant="body2">시간: {date}</Typography>
      <Grid container>
        <Grid item xs={1.5}>
          <Typography variant="body2">제목:</Typography>
        </Grid>
        <Grid item xs={10.5}>
          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography variant="body2">태그:</Typography>
        </Grid>
        <Grid item xs={10.5}>
          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
            {tags.map((tagObj) => tagObj.tag).join(", ")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const truncatedTitle =
    title.length > 20 ? title.substring(0, 20) + "..." : title;

  const truncatedText =
    text.length > 200 ? text.substring(0, 50) + "..." : text;

  return (
    <Tooltip title={<TooltipText />}>
      <CustomCard
        sx={{
          minHeight: "80px",
          padding: "20px",
          cursor: "pointer",
          borderRadius: "17px",
        }}
      >
        <Box sx={{ fontSize: "12px", color: "gray" }}>{date}</Box>
        <Box
          sx={{
            marginTop: "10px",
            fontWeight: "700",
            fontSize: "18px",
            flexWrap: "nowrap",
            display: "flex",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {truncatedTitle}
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            fontWeight: "400",
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {truncatedText}
        </Box>
        {/* 태그 한 줄로 */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginTop: "10px",
          }}
        >
          {tags.map((tagObj, index) => (
            <Chip
              key={index}
              label={tagObj.tag}
              sx={{
                backgroundColor:
                  tagObj.type === "competency" ? "#e3f2ff" : "#f6e2ff",
                color: tagObj.type === "competency" ? "#57788c" : "#b659b9",
                marginRight: "5px",
                marginBottom: "10px",
              }}
            />
          ))}
        </Box>
      </CustomCard>
    </Tooltip>
  );
};
