import PropTypes from "prop-types";
import {
  DropdownBtn,
  UpdateCount,
  NotiUpdated,
  DropdownTitle,
  DropdownTitleWrapper,
  DropdownListWrapper,
  DropdownList,
  DropdownItem,
} from "./DropdownWrapperStyle";

// dropdown에 따라 pageTitles 다르게 가져올 것
const pageTitles = [
  { title: "가입정보관리", count: 11 },
  { title: "담당자/권한관리", count: 3 },
  { title: "회원문자발송", count: 1 },
  { title: "회원이메일발송", count: 3 },
];
function DropdownWrapper({ title, isOpen, toggleDropdown }) {
  // 해당 title에 업데이트된 내용이 있다면 NotiUpdated에 N을 표시하는 기능 추가

  return (
    <>
      <DropdownTitleWrapper>
        <DropdownTitle open={isOpen}>{title}</DropdownTitle>
        <NotiUpdated>N</NotiUpdated>
        <DropdownBtn onClick={toggleDropdown} open={isOpen} />
      </DropdownTitleWrapper>
      <DropdownListWrapper open={isOpen}>
        {pageTitles.map((t, idx) => (
          <DropdownList key={idx}>
            <DropdownItem key={t.title}>{t.title}</DropdownItem>
            <UpdateCount key={t.count}>{t.count}</UpdateCount>
          </DropdownList>
        ))}
      </DropdownListWrapper>
    </>
  );
}

DropdownWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default DropdownWrapper;
