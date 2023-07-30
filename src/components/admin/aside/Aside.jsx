import React from "react";
import {
  AsideWrapper,
  Authority,
  CompanyName,
  DashboardWrapper,
  DashboardTitle,
  ProfileImage,
  ProfileWrapper,
  Setting,
  DashboardList,
  DashboardListItem,
} from "./AsideStyle";
import DropdownWrapper from "./DropdownWrapper";

function Aside() {
  return (
    <>
      <AsideWrapper>
        <ProfileWrapper>
          <ProfileImage src="https://picsum.photos/200/300" alt="profile" />
          <CompanyName>월드비어마켓</CompanyName>
          <Authority>최고관리자(홍길동)</Authority>
          <Setting>아이콘</Setting>
        </ProfileWrapper>
        <DashboardWrapper>
          <DashboardTitle>종합현황</DashboardTitle>
          <DashboardList>
            <DashboardListItem>
              {/* 리스트로 dashboard list title 가져올 것 */}
              <DropdownWrapper title={"마이페이지"} />
            </DashboardListItem>
          </DashboardList>
        </DashboardWrapper>
      </AsideWrapper>
    </>
  );
}

export default Aside;
