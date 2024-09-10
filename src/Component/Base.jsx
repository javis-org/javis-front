import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    AccordionSummary,
    Accordion,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// MUI Styles using `sx` prop
const Base = () => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                width: "100%",
                padding: "10px",
            }}
        >
            {/* Left Sidebar */}
            <Box
                sx={{
                    width: "20%",
                    padding: "10px",
                    backgroundColor: "#f7f6fa",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "20px",
                        marginBottom: "25px",
                    }}
                >
                    <Typography variant="h5">✏️ 내 자기소개서</Typography>
                    <Button
                        sx={{
                            borderRadius: "20px",
                            textTransform: "none",
                        }}
                        variant="contained"
                    >
                        자기소개서 추가
                    </Button>
                </Box>

                <Card
                    sx={{
                        borderRadius: "10px",
                        padding: "10px",
                        boxShadow: "none",
                        background: "#f8f5fa",

                        mb: 2,
                    }}
                >
                    <CardContent sx={{ padding: "0px" }}>
                        <Accordion defaultExpanded sx={{ mb: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ flexDirection: "row-reverse" }}
                            >
                                <Typography variant="body1" sx={{ mr: 1 }}>
                                    📁
                                </Typography>
                                <Typography variant="body1">2023-2 디프만</Typography>
                                <MoreVertIcon sx={{ ml: "auto" }} />
                            </AccordionSummary>
                            <Divider />
                            <Box
                                sx={{
                                    padding: "10px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    mt: 1,
                                }}
                            >
                                학교 수업이나 대외 활동을 통해 경험한...
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 2,
                                    mb: 2,
                                }}
                            >
                                <Button
                                    variant="text"
                                    sx={{
                                        border: "1px dashed #c0c0c0",
                                        borderRadius: "8px",
                                        width: "96%",
                                        background: "#f6f6f9",
                                        textTransform: "none",
                                    }}
                                >
                                    + 문항 추가
                                </Button>
                            </Box>
                        </Accordion>
                    </CardContent>
                </Card>
            </Box>

            {/* Main Content */}
            <Box
                sx={{
                    width: "60%",
                    padding: "10px",
                    height: "100vh",
                    backgroundColor: "#f7f6fa",
                    overflowY: "auto",
                }}
            >
                <Card
                    sx={{
                        borderRadius: "20px",
                        border: "1px solid #e0e0e0",
                        p: 2,
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        중간
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        미완
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 2,
                        }}
                    >
                        <Button variant="contained" color="primary">
                            저장
                        </Button>
                        <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
                            취소
                        </Button>
                    </Box>
                </Card>
            </Box>

            {/* Right Sidebar */}
            <Box
                sx={{
                    width: "20%",
                    padding: "20px",
                    backgroundColor: "#f7f6fa",
                }}
            >
                <Card variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6">title</Typography>
                        <Typography variant="body2" color="textSecondary">
                            글
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Base;
