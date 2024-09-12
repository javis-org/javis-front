import {Box, Button, Card, Typography} from "@mui/material";

export const MidContainer = () => {
  return (
    <>
      {/* Main Content */}
      <Box
        sx={{
          width    : "100%",
          padding  : "10px",
          overflowY: "auto",
          mr       : "10px"
        }}
      >
        <Card
          sx={{
            borderRadius: "20px",
            border      : "1px solid #e0e0e0",
            p           : 2,
          }}
        >
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "inline-flex", alignItems: "center"}}>
              <div>
                <Typography variant="subtitle" gutterBottom sx={{color: "gray"}}>
                  24년 9월 12일 08시 07분 | 저장 완료
                </Typography>
              </div>
            </Box>
            <Box sx={{display: "inline-flex", alignItems: "center"}}>
              <Box>
                <Typography variant="subtitle" gutterBottom
                            sx={{marginRight: 2, color: "gray", verticalAlign: "middle"}}>
                  1000자/5000자(공백 포함)
                </Typography>
              </Box>
              <Button variant="contained" sx={{background: "purple", borderRadius: "20px"}}>
                임시 저장
              </Button>
            </Box>
          </Box>


          <Typography variant="h6" gutterBottom sx={{fontWeight: "700",}}>
            학교 수업이나 대외활동 등을 통해 경험한 프로젝트
          </Typography>
          <Typography variant="body1" gutterBottom>
            미완
          </Typography>
          <Box
            sx={{
              display       : "flex",
              justifyContent: "flex-end",
              mt            : 2,
            }}
          >
            <Button variant="contained" color="primary">
              저장
            </Button>
            <Button variant="outlined" color="secondary" sx={{ml: 2}}>
              취소
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  )
}