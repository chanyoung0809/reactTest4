import React from 'react'
import Header from "./Header"
// 메인페이지 중간 영역을 별도의 컴포넌트로 만들어서 불러올 수 있음
/* CSS 선택사항 (실무에서는 항상! 다름) */
// 1) 하나의 파일에 모든 페이지 디자인 작업 넣음 
// 2) 컴포넌트별 css파일 따로따로 만들어서 쓰는 방법 (파일 갯수가 늘어남)
// 3) 데스크탑scss, 태블릿scss, 모바일 scss (권장)
import Footer from './Footer'


const MainPage = () => {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div id='container'>
        메인중간영역입니당
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainPage