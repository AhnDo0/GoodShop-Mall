import styled from "styled-components";
import downIcon from "../../../asset/icon/dropdown.png";
import upIcon from "../../../asset/icon/dropup.png";

export const DropdownTitleWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
  padding: 10px 7px 2px 7px;
`;

export const DropdownTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ open }) => (open ? "#FDDC26" : "white")};
  margin: 0.5rem;
`;

export const NotiUpdated = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff4545;
  color: white;
  border-radius: 20%;
  margin: 6px;
  width: 1.4rem;
  height: 1.4rem;
`;

export const DropdownBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  background: ${({ open }) => (open ? `url(${upIcon})` : `url(${downIcon})`)}
    no-repeat center;
`;

export const DropdownListWrapper = styled.ul`
  left: 10px;
  width: 90%;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  /* justify-content: center; */
  align-items: end;
  margin-left: 15px;
  padding: 5px;
`;

export const DropdownList = styled.li`
  display: flex;
  margin-left: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin: 5px;
  padding: 5px;
  &:hover {
    background-color: #fddd263e;
  }
`;

export const DropdownItem = styled.div`
  color: white;
  font-size: 1.2rem;
`;

export const UpdateCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.3rem;
  height: 1.3rem;
  background-color: #ff4545;
  color: white;
  border-radius: 20%;
  margin: 3px;
`;
