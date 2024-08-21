import { Textarea } from "@mui/joy";
import {
  Button,
  CircularProgress,
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { client } from "../api";
import MinWorkerLoading from "../assets/MineWorkerLoading.gif"; // 로딩 중일 때 표시할 GIF 이미지
import MineWorker from "../assets/MineWorker.png"; // 기본 광부 이미지
import diamond from "../assets/diamond.png"; // 보석 이미지 추가
import Gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";

export default function Menu3() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState(null); // 초기 상태를 null로 설정
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const handleSubmit = async () => {
    try {
      setLoading(true); // 요청 시작 시 로딩 상태로 변경
      const res = await client.post(`/gem`, { content: value });
      console.log(res.data);
      setResponse(res.data); // 응답 데이터를 상태에 저장
      setLoading(false); // 요청 완료 후 로딩 상태 해제
    } catch (error) {
      console.log(error);
      alert("오류 발생");
      setLoading(false); // 에러 발생 시에도 로딩 상태 해제
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // 화면 전체 높이를 사용하여 중앙에 배치
        position: "relative", // 보석 애니메이션을 위한 상대 위치 설정
      }}
    >
      {loading && (
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none", // 로딩 중 다른 요소 클릭 방지
          }}
        >
          {[...Array(10)].map((_, index) => (
            <Box
              key={index}
              component="img"
              src={diamond}
              alt="Gemstone"
              sx={{
                position: "absolute",
                bottom: "0px",
                left: `${Math.random() * 100}%`,
                width: "100px",
                animation: `gemAnimation ${
                  2 + Math.random() * 3
                }s ease-out infinite`,
                transform: `translateX(-50%)`,
              }}
            />
          ))}
          {[...Array(10)].map((_, index) => (
            <Box
              key={index}
              component="img"
              src={Gold}
              alt="Gemstone"
              sx={{
                position: "absolute",
                bottom: "0px",
                left: `${Math.random() * 100}%`,
                width: "100px",
                animation: `gemAnimation ${
                  2 + Math.random() * 3
                }s ease-out infinite`,
                transform: `translateX(-50%)`,
              }}
            />
          ))}
          {[...Array(10)].map((_, index) => (
            <Box
              key={index}
              component="img"
              src={silver}
              alt="Gemstone"
              sx={{
                position: "absolute",
                bottom: "0px",
                left: `${Math.random() * 100}%`,
                width: "100px",
                animation: `gemAnimation ${
                  2 + Math.random() * 3
                }s ease-out infinite`,
                transform: `translateX(-50%)`,
              }}
            />
          ))}
          {[...Array(10)].map((_, index) => (
            <Box
              key={index}
              component="img"
              src={bronze}
              alt="Gemstone"
              sx={{
                position: "absolute",
                bottom: "0px",
                left: `${Math.random() * 100}%`,
                width: "100px",
                animation: `gemAnimation ${
                  2 + Math.random() * 3
                }s ease-out infinite`,
                transform: `translateX(-50%)`,
              }}
            />
          ))}
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Box sx={{ flexShrink: 0, position: "relative" }}>
          <img
            src={loading ? MinWorkerLoading : MineWorker}
            alt="광부"
            style={{ height: "500px" }}
          />
        </Box>

        {/* 텍스트 입력 및 결과 영역 */}
        <Box sx={{ position: "relative", maxWidth: "1000px", width: "100%" }}>
          {response && response.totalScore ? (
            <>
              <Typography variant="h4" gutterBottom>
                결과 총 {response.totalScore}점
              </Typography>
              {response.gemList.slice(0, 3).map((item, i) => (
                <Paper key={i} sx={{ padding: 2, marginBottom: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between", // 글자와 이미지 사이 간격 조정
                      marginBottom: 2,
                    }}
                  >
                    <Typography variant="h5" style={{ fontWeight: 700 }}>
                      {item.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {item.rate === 4 ? (
                        <img
                          src={diamond}
                          style={{ width: "100px", height: "100px" }}
                          alt="diamond"
                        />
                      ) : item.rate === 3 ? (
                        <img
                          src={Gold}
                          style={{ width: "100px", height: "100px" }}
                          alt="gold"
                        />
                      ) : item.rate === 2 ? (
                        <img
                          src={silver}
                          style={{ width: "100px", height: "100px" }}
                          alt="silver"
                        />
                      ) : (
                        <img
                          src={bronze}
                          style={{ width: "100px", height: "100px" }}
                          alt="bronze"
                        />
                      )}
                    </Box>
                  </Box>
                  <Typography variant="body1">{item.comment}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.answer}
                  </Typography>
                </Paper>
              ))}
            </>
          ) : (
            <>
              <Textarea
                minRows={15}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="그대의 자소서를 적어주게나....."
                sx={{
                  width: "1000px", // Textarea의 너비를 1000px로 설정
                  padding: 2,
                  fontSize: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  marginBottom: "16px",
                  backgroundColor: "#f0f0f0", // 말풍선 색상
                }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
              >
                평가받기
              </Button>
            </>
          )}

          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Box>

      <style>
        {`
          @keyframes gemAnimation {
            0% { 
              bottom: 0;
              opacity: 1;
            }
            50% { 
              bottom: 50%;
              opacity: 0.7;
            }
            100% { 
              bottom: 100%;
              opacity: 0;
            }
          }
        `}
      </style>
    </Container>
  );
}
