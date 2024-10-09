import { Box, Card, Tooltip, Typography, Grid } from "@mui/material";
export const CardItem = ({
  title = "제목",
  date = "24.10.03",
  tags = [
    "갈등 경험",
    "커리어 계획",
    "최적화",
    "UI",
    "DB",
    "리더쉽",
    "성장",
    "열정",
  ],
}) => {
  const TooltipText = () => (
    <Box>
      <Typography variant="body2">시간: {date}</Typography>
      <Typography variant="body2">제목: {title}</Typography>
      <Grid container>
        <Grid item xs={1.5}>
          <Typography variant="body2">태그:</Typography>
        </Grid>
        <Grid item xs={10.5}>
          {/* 나머지 태그는 들여쓰기된 상태로 표시 */}
          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
            {tags.join(", ")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Tooltip title={<TooltipText />}>
      <Card sx={{ height: "80px", padding: "20px", cursor: "pointer" }}>
        <Box sx={{ fontSize: "12px", color: "gray" }}>{date}</Box>
        <Box sx={{ marginTop: "10px", fontWeight: "700", fontSize: "18px" }}>
          {title}
        </Box>

        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            overflow: "hidden", // 넘치는 부분을 숨김
            flexWrap: "nowrap", // 자식 요소가 한 줄로만 배치되도록 설정
          }}
        >
          {/*4개만*/}
          {tags.slice(0, 4).map((tag, index) => (
            <Box
              key={index}
              sx={{
                whiteSpace: "nowrap",
                borderRadius: "7px",
                padding: "5px",
                fontSize: "14px",
                marginRight: "10px",
                backgroundColor: "#e3f2ff",
                color: "#57788c",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Card>
    </Tooltip>
  );
};
