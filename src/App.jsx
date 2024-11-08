import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import LoginPage from "./Component/Login/LoginPage";
import SignUp from "./Component/Login/SignUp";

import "./index.css";
import { InfoPage } from "./Component/Info/InfoPage.jsx";
import { RecruitsPage } from "./Component/Recruits/RecruitsPage.jsx";
import { MyStatementPage } from "./Component/Statement/StatementPage.jsx";
import { EditorPage } from "./Component/Editor/EditorPage.jsx";
import { RecruitItemPage } from "./Component/Recruits/RecruitItemPage/RecruitItemPage.jsx";
import { Box } from "@mui/material";

const user = localStorage.getItem("user");

export default function App() {
  console.log("user", user);
  console.log("test");
  return (
    <Box sx={{ height: "100vh" }}>
      <RecoilRoot>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/main" element={<InfoPage />} />

            {/*  /!* 내 정보 *!/*/}
            <Route path={"/info"} element={<InfoPage />} />

            {/*  /!*내 자기소개서*!/*/}
            <Route path={"/statement"} element={<MyStatementPage />} />
            <Route path={"/statement/editor/:id"} element={<EditorPage />} />
            {/*  /!*  내 공고*!/*/}
            <Route path={"/recruits-page"} element={<RecruitsPage />} />
            <Route path={"/recruits-page/:id"} element={<RecruitItemPage />} />
            <Route
              path={"/recruits-page/:id/editor/:item"}
              element={<EditorPage />}
            />
          </Routes>
        </Router>
      </RecoilRoot>
    </Box>
  );
}
