import React, { useState } from "react";
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

// 권한에 따라 itemTitles 다르게 가져올 것
const itemTitles = [
  "마이페이지",
  "포인트관리",
  "팝업및배너관리",
  "판매처발주관리",
  "판매처관리",
  "유통사상품관리",
  "유통사발주관리",
  "유통사관리",
  "공급사상품관리",
  "공급사관리",
  "고객센터",
  "공지/뉴스",
  "사이트관리",
  "통계",
];

function Aside() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (title) => {
    setOpenDropdown((prevTitle) => (prevTitle === title ? null : title));
  };

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
            {itemTitles.map((title) => (
              <DashboardListItem key={title}>
                <DropdownWrapper
                  key={title}
                  title={title}
                  isOpen={openDropdown === title}
                  toggleDropdown={() => toggleDropdown(title)}
                />
              </DashboardListItem>
            ))}
          </DashboardList>
        </DashboardWrapper>
      </AsideWrapper>
    </>
  );
}

export default Aside;
