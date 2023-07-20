import React from 'react'
import { Route, Routes } from 'react-router-dom'
// 라우터 사용 방법
// import 구문으로 Routes, Route 불러들여야 함
import MainPage from './components/MainPage'
// 사용할 라우터 불러들이기
import SubPage1 from './components/SubPage1'
import SubPage2 from './components/SubPage2'
const App = () => {
  return (
    <div>
      <Routes> {/* 그루핑해주는 영역. 묶는 영역 */}
        <Route path='/' element={<MainPage></MainPage>}></Route> {/* 실제로 바뀌는 영역 / <- 메인페이지 */}
        <Route path='/sub1' element={<SubPage1></SubPage1>}></Route> {/* 실제로 바뀌는 영역 /작명 <- 작명페이지*/}
        <Route path='/sub2' element={<SubPage2></SubPage2>}></Route> {/* 실제로 바뀌는 영역 /작명 <- 작명페이지*/}
      </Routes>
    </div>
  )
}

export default App