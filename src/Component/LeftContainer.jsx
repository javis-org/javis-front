import { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Accordion, AccordionSummary, Divider, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore.js";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";

export const LeftContainer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMoreVertClick = (event) => {
        event.stopPropagation(); // 이벤트 전파를 막아 아코디언이 열리거나 닫히지 않게 함
        setAnchorEl(event.currentTarget); // MoreVertIcon을 클릭한 위치에 메뉴가 열리도록 설정
    };

    const handleClose = (event) => {
        event.stopPropagation(); // 이벤트 전파를 막아 아코디언이 열리거나 닫히지 않게 함

        setAnchorEl(null); // 메뉴를 닫기 위한 함수
    };

    const handleDelete = () => {
        console.log("삭제 버튼 클릭됨");
        handleClose(); // 삭제 처리 후 메뉴 닫기
    };

    const handleAccordionClick = (event) => {
        event.stopPropagation(); // 메뉴가 열려도 아코디언의 기본 동작이 발생하지 않도록 함
    };

    return (
        <>
            {/* Left Sidebar */}
            <Box
                sx={{
                    minWidth:"350px",
                    width: "20%",
                    padding: "10px",

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
                        // padding: "10px",
                        boxShadow: "none",
                        mb: 2,
                        backgroundColor: "#f7f6fa",

                    }}
                >
                    <CardContent sx={{ padding: "0px" }}>
                        <Accordion defaultExpanded sx={{ mb: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ flexDirection: "row-reverse" }}
                                onClick={handleAccordionClick} // 아코디언 클릭 이벤트 추가
                            >
                                <Typography variant="body1" sx={{ mr: 1 }}>
                                    📁
                                </Typography>
                                <Typography variant="body1">2023-2 디프만</Typography>
                                {/* MoreVertIcon과 Menu 연결 */}
                                <MoreVertIcon
                                    sx={{ ml: "auto" }}
                                    onClick={handleMoreVertClick}
                                />
                                {/* Menu (드롭다운 메뉴) */}
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <MenuItem onClick={handleDelete}>삭제</MenuItem>
                                </Menu>
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
        </>
    );
}
