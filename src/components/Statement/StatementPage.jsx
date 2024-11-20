import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageTitle } from "../common/PageTitle.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { StatementFilterMenu } from "./StatementFilterMenu.jsx";
import { CardList } from "./CardList.jsx";
import StatementAddCardBody from "./StatementAddModalComponent/StatementAddCardBody.jsx";
import { useEffect, useState } from "react";
import { client } from "../../api.js";

export const MyStatementPage = () => {
  const [menus, setMenus] = useState([]);
  const [selectMenu, setSelectMenu] = useState("경험정리");
  const [update, setUpdate] = useState(true);
  const handleUpdate = () => {
    setUpdate(!update);
  };
  const mode = "statement";
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(`/Card/count?mode=${mode}`);
      setMenus(response.data);
      console.log("갯수", response.data);
    };
    fetchData();
  }, [update]);

  return (
    <BaseComponent>
      <PageTitle title={"내 자소서"} />
      <PageContent>
        <StatementFilterMenu
          menus={menus}
          selectMenu={selectMenu}
          setSelectMenu={setSelectMenu}
          modalBody={<StatementAddCardBody mode={mode} />}
        />
        <CardList
          mode={mode}
          selectMenu={selectMenu}
          update={update}
          handleUpdate={handleUpdate}
        />
      </PageContent>
    </BaseComponent>
  );
};
