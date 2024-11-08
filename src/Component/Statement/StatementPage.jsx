import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageTitle } from "../common/PageTitle.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { StatementFilterMenu } from "./StatementFilterMenu.jsx";
import { CardList } from "./CardList.jsx";
import StatementAddCardBody from "./StatementAddModalComponent/StatementAddCardBody.jsx";

export const MyStatementPage = () => {
  return (
    <BaseComponent>
      <PageTitle title={"내 자소서"} />
      <PageContent>
        <StatementFilterMenu
          menus={["경험정리", "자기소개서", "면접 질문"]}
          select={"경험정리"}
          modalBody={<StatementAddCardBody />}
        />
        <CardList />
      </PageContent>
    </BaseComponent>
  );
};
