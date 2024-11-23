import {
  Accordion,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { memo, useState } from "react";
import { IntroductionItem } from "./IntroductionItem.jsx";
import { useNavigate } from "react-router-dom";

const IntroductionList = ({ item, index, handleUpdate }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isModiTitle] = useState(!!item.isModified);
  console.log(isModiTitle);
  const navi = useNavigate();
  const handleTitleClick = (e) => {
    e.stopPropagation();
    navi(`/recruits-page/${item.id}`);
    handleUpdate();
  };

  const handleAccordionClick = (event) => {
    event.stopPropagation();
  };

  const CustomCardContent = styled(CardContent)`
    padding: 0 !important; /* 전체 패딩 제거 */
    &.MuiCardContent-root {
      padding-bottom: 0 !important; /* paddingBottom 제거 */
    }
  `;

  return (
    <>
      <Card
        sx={{
          borderRadius: "10px",
          boxShadow: "none",
          marginBottom: "20px",
          // backgroundColor: "#4d4d4d",
        }}
      >
        <CustomCardContent className="side">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{ flexDirection: "row-reverse" }}
              onClick={handleAccordionClick}
            >
              <Typography variant="body1" sx={{ mr: 1 }}>
                📁
              </Typography>
              <Typography variant="body1">{item.title}</Typography>
              <FlipToFrontIcon
                sx={{ ml: "auto", cursor: "pointer", fontSize: "20px" }} // 클릭 가능하도록 포인터 커서 추가
                onClick={handleTitleClick}
              />
            </AccordionSummary>
            <Divider />
            <IntroductionItem card={item.cards} handleUpdate={handleUpdate} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                mb: 2,
              }}
            ></Box>
          </Accordion>
        </CustomCardContent>
      </Card>
    </>
  );
};

// React.memo로 IntroductionList 컴포넌트를 최적화
export default memo(IntroductionList);
