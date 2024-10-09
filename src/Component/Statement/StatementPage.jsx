import { BaseComponent } from "../common/BaseComponent.jsx";
import { PageTitle } from "../common/PageTitle.jsx";
import { PageContent } from "../common/PageContent.jsx";
import { StatementFilterMenu } from "./StatementFilterMenu.jsx";
import { CardList } from "./CardList.jsx";

export const MyStatementPage = () => {
  return (
    <BaseComponent>
      <PageTitle title={"내 자소서"} />
      <PageContent>
        <StatementFilterMenu />
        <CardList />
      </PageContent>
    </BaseComponent>
  );
};
