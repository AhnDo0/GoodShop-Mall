import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  DropdownBtn,
  NotiCount,
  NotiUpdated,
  DropdownTitle,
  DropdownTitleWrapper,
  DropdownListWrapper,
  DropdownList,
  DropdownItem,
} from "./DropdownWrapperStyle";

function DropdownWrapper({ title, isOpen, toggleDropdown }) {
  return (
    <>
      <DropdownTitleWrapper>
        <DropdownTitle>{title}</DropdownTitle>
        <NotiUpdated>N</NotiUpdated>
        <DropdownBtn onClick={toggleDropdown}>&gt;</DropdownBtn>
      </DropdownTitleWrapper>
      <DropdownListWrapper open={isOpen}>
        {/* 리스트로 dropdown list title 가져올 것 */}
        <DropdownList>
          <DropdownItem>가입정보관리</DropdownItem>
          <NotiCount>11</NotiCount>
        </DropdownList>
        <DropdownList>
          <DropdownItem>담당자/권한관리</DropdownItem>
          <NotiCount>2</NotiCount>
        </DropdownList>
        <DropdownList>
          <DropdownItem>회원문자발송</DropdownItem>
          <NotiCount>3</NotiCount>
        </DropdownList>
        <DropdownList>
          <DropdownItem>회원이메일발송</DropdownItem>
          <NotiCount>21</NotiCount>
        </DropdownList>
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
