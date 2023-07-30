import styled from "styled-components";
import Aside from "../components/admin/aside/Aside";
import React from "react";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

function Test() {
  return (
    <>
      <PageContainer>
        <Aside />
        <h1>Test</h1>
      </PageContainer>
    </>
  );
}

export default Test;
