import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;
import { AdminFooter, AdminHeader, Aside } from "../components";
import ContentsContainer from "./ContentsContainer";

function Test() {
  return (
    <>
      <PageContainer>
        <AdminHeader />
        <MainContainer>
          <Aside />
          <ContentsContainer />
        </MainContainer>
        <AdminFooter />
      </PageContainer>
    </>
  );
}

export default Test;
