import styled from "styled-components";
import Aside from "../components/admin/aside/Aside";
import React from "react";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
import { AdminFooter, AdminHeader } from "../components";

function Test() {
  return (
    <>
      <PageContainer>
        <AdminHeader />
        <Aside />
        <h1>Test</h1>
        <AdminFooter />
      </PageContainer>
    </>
  );
}

export default Test;
