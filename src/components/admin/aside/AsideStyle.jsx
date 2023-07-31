import styled from "styled-components";
import settingIcon from "../../../asset/icon/setting.png";

export const AsideWrapper = styled.section`
  width: 300px;
  height: 80em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  margin: 0px;
  background-color: #2d2d2d;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383838;
  position: relative;
  padding: 20px;
`;

export const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 10px 0px;
`;

export const CompanyName = styled.h1`
  font-size: 1.2rem;
  color: #fff;
  margin: 10px 0px;
`;

export const Authority = styled.h2`
  font-size: 1rem;
  color: #c2c2c2;
  margin: 5px 0px;
`;

export const Setting = styled.button`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background: url(${settingIcon}) no-repeat center;
`;

export const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const DashboardTitle = styled.h1`
  width: 100%;
  position: relative;
  margin-left: 60px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

export const DashboardList = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  margin: 10px;
`;

export const DashboardListItem = styled.li`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
