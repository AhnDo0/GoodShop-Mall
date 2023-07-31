import { Button } from "react-bootstrap";

import "../footer/AdminFooter.css"

function AdminFooter() {
    return(
        <>
        <div className="adminFooterContainer">
        <footer className="adminFooterWrapper">
            <div className="adminLinkWrapper">
                <a className="adminLink">이용약관</a>
                <a className="adminLink">개인정보처리방침</a>
                <a className="adminLink">이메일무단수집거부</a>
                <a className="adminLink">고객센터</a>
            </div>
            <div className="sitedesc">
                <p>
                    월드비어마켓은 B2B 주류 유통 플랫폼의 거래/정보 중개자로서, 거래당사자 및 주류 통신판매가 아닙니다.
                </p>
                <p>
                    상품에 대한 배송/환불 등의 의무와 책임은 각 사업자에게 있습니다.
                </p>
            </div>
            <div className="siteInfoWrapper">
                <p>사업자등록번호: 478-81-00921</p>{' '}
                <p>통신판매업신고번호 : 2020-인천부평-1376</p>{' '}
                <b>대표이사 : 정용희</b>{' '}
                <Button variant="Light" size="sm">사업자정보확인</Button>
                <p>주소 : 인천광역시 길주로 623 대덕리치아노 101-607</p>
            </div>
            <p className="copyrightText">
                Copyright 월드비어마켓. All Rights Reserved.
            </p>
        </footer>
        </div>
        </>
    )
}

export default AdminFooter;