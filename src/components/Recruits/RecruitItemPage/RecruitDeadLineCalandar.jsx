import { useState } from "react";
import { Box, IconButton, Menu, TextField } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // dayjs 어댑터 사용
import dayjs from "dayjs";

export const RecruitDeadLineCalandar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Control menu visibility
  const [selectedDate, setSelectedDate] = useState(dayjs("2024-10-20")); // Default selected date using dayjs

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu anchored to the button
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date
    handleClose();
  };

  return (
    <>
      {/* Display selected date */}
      <span style={{ marginRight: "8px" }}>
        <span style={{ marginRight: "10px", fontWeight: "600" }}>마감일:</span>
        {selectedDate ? selectedDate.format("YYYY/MM/DD") : "없음"}
      </span>

      {/* Icon button for opening the menu */}
      <IconButton onClick={handleClickOpen}>
        <CalendarMonthIcon />
      </IconButton>

      {/* Menu that appears below the button */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "250px",
            marginX: "10px",
          }}
        >
          {/* DatePicker */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="YYYY/MM/DD" // 연도/월/일 포맷
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Box>
      </Menu>
    </>
  );
};
