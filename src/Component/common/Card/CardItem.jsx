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
  text = "금융결제원이 제공하는 서비스는 매우 다양하며, 저는 개인적으로 금융공동망과 인터넷지로 서비스를 이용해 본 경험이 있습니다.\n금융공동망은 금융기관 간의 자금 이체를 실시간으로 처리하는 시스템으로, 이를 이용하면 다른 은행 계좌로 송금을 하거나 대출금을 상환하는 등의 업무를 편리하게 처리할 수 있습니다. 또한, 금융공동망은 보안성이 매우 높아 안전하게 이용할 수 있습니다.\n인터넷지로 서비스는 지로 요금 납부 및 조회 서비스를 제공하는 것으로, 이를 이용하면 지로 요금을 간편하게 납부할 수 있습니다. 또한, 인터넷지로 서비스를 이용하면 납부 내역을 쉽게 조회할 수 있어 편리합니다.\n금융결제원이 제공하는 서비스를 이용하면서 느낀 점은, 이들이 매우 편리하고 안전하다는 것입니다. 또한, 금융결제원은 고객들의 편의를 위해 다양한 서비스를 제공하고 있으며, 고객들의 요구에 적극적으로 대응하고 있습니다.\n금융결제원이 제공하는 서비스는 금융산업의 발전에 큰 역할을 하고 있으며, 앞으로도 더욱 발전할 것으로 기대됩니다. 그렇기 때문에 이곳에서 개발자로 일하며 다양한 사람을 위한 서비스를 만들 때에 저의 경험과 지식이 도움이 될 수 있을 것이라 생각합니다.",
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
    "팀워크",
    "혁신",
    "문제 해결",
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
            {tags.join(", ")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const truncatedTitle =
    title.length > 20 ? title.substring(0, 20) + "..." : title;

  const truncatedText =
    text.length > 200 ? text.substring(0, 50) + "..." : text;

  const displayedTags =
    tags.length > 10 ? tags.slice(0, 10).concat("...") : tags;

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
            flexWrap: "wrap",
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
            whiteSpace: "wrap",
          }}
        >
          {truncatedText}
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            flexWrap: "wrap", // 태그를 두 줄 이상으로 배치
          }}
        >
          {displayedTags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                backgroundColor: "#e3f2ff",
                color: "#57788c",
                marginRight: "10px",
                marginBottom: "10px", // 아래쪽 여백 추가
              }}
            />
          ))}
        </Box>
      </CustomCard>
    </Tooltip>
  );
};
