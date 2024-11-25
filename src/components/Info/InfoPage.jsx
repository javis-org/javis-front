import React, { createContext, useState, useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { BasicInfo } from "./BasicInfo.jsx";
import { MilitaryInfo } from "./MilitaryInfo.jsx";
import { ClubInfo } from "./ClubInfo.jsx";
import { AcademicInformation } from "./AcademicInformation.jsx";
import { AwardsInfo } from "./AwardsInfo.jsx";

// Alert Context 생성
export const AlertContext = createContext();

// Alert Hook
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

const InfoCard = ({ title, children }) => (
  <Card style={{ marginBottom: "16px" }}>
    <CardContent>
      <div style={{ marginTop: "10px" }}>{children}</div>
    </CardContent>
  </Card>
);

export const InfoPage = () => {
  // Alert 상태 관리
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showAlert = (message, severity = "success") => {
    setAlert({
      open: true,
      message,
      severity,
    });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <BaseComponent>
        <PageContent>
          <Box
            sx={{
              marginX: "auto",
              maxWidth: "1000px",
              minWidth: "1000px",
              width: "100%",
              paddingX: "16px",
            }}
          >
            <InfoCard>
              <BasicInfo />
            </InfoCard>

            <InfoCard>
              <MilitaryInfo />
            </InfoCard>

            <InfoCard title="수상">
              <AwardsInfo />
            </InfoCard>

            <InfoCard title="동아리/대외활동">
              <ClubInfo />
            </InfoCard>

            <InfoCard title="학적사항">
              <AcademicInformation />
            </InfoCard>
          </Box>
        </PageContent>
      </BaseComponent>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={alert.severity} sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
