import React, { useEffect, useState } from "react";
import { BaseComponent } from "../../common/BaseComponent.jsx";
import { PageContent } from "../../common/PageContent.jsx";
import { StatementFilterMenu } from "../../Statement/StatementFilterMenu.jsx";
import { CardList } from "../../Statement/CardList.jsx";
import StatementAddCardBody from "../../Statement/StatementAddModalComponent/StatementAddCardBody.jsx";
import { useRecoilState } from "recoil";
import { updateAtom } from "../../../Recoil.jsx";
import { RecruitItemFilterMenu } from "./RecruitItemFilterMenu.jsx";
import { client } from "../../../api.js";
import { useParams } from "react-router-dom";

export function RecruitItemPage() {
  const [menus, setMenus] = useState([]);
  const [update, setUpdate] = useRecoilState(updateAtom);
  const handleUpdate = () => {
    setUpdate(!update);
  };
  const { id } = useParams();
  const mode = "recruit";
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(
        `/Card/recruit/count/${id}?mode=${mode}`,
      );
      setMenus(response.data);
      console.log("갯수", response.data);
    };
    fetchData();
  }, [update]);
  //cardList 부분
  const [selectMenu, setSelectMenu] = useState("경험정리");
  return (
    <BaseComponent>
      <RecruitItemFilterMenu />

      <PageContent>
        <StatementFilterMenu
          modalBody={<StatementAddCardBody mode={mode} />}
          menus={menus}
          selectMenu={selectMenu}
          setSelectMenu={setSelectMenu}
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
}
