import { RecoilRoot } from "recoil";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Component/common/Header";
import LoginPage from "./Component/Login/LoginPage";
import SignUp from "./Component/Login/SignUp";
import CompanyAddForm from "./Component/CompanyAddForm/CompanyAddForm";
import ItemList from "./Component/Item/ItemList";

import Base from "./Component/Base";

const user = localStorage.getItem("user");



export default function App() {
  console.log("user", user);

  return (
    <RecoilRoot>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/main" element={<Base />} />
          {/* 메뉴 1 */}
          <Route path="/menu1" element={<Base />} />
          <Route path="/menu1/companyAddForm" element={<CompanyAddForm />} />
          <Route path="/menu1/item/:id" element={<ItemList />} />

        </Routes>
      </Router>
    </RecoilRoot>
  );
}
