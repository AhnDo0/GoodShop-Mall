import Logo from "../../../assets/Logo.png"
import AdminTitle from "../../../assets/AdminTitle.png"

import "../header/AdminHeader.css"

function AdminHeader() {
    return(
        <>
        <header className="adminHeadWrapper">
            <div className="LogoWrapper">
                <img src={Logo} alt="Logo" id="adminLogo"/>
                <img src={AdminTitle} alt="AdminTitle" id="adminTitle"/>
            </div>
            <div className="ServiceWrapper">
                <p className="MemberName">월드비어마켓</p>
                <button className="AdminServiceBtn">
                    1:1문의
                </button>
                <button className="AdminServiceBtn">
                    공지사항
                </button>
                <button className="AdminServiceBtn">
                    로그아웃
                </button>
            </div>
        </header>
        </>
    )
}

export default AdminHeader;