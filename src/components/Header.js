import React from 'react'
import { Link } from 'react-router-dom' // Link 쓸 수 있게 해주는 컴포넌트

const Header = () => {
  return (
    <div id="header">
      <div class="center">
        <h1><Link to='/'>로고</Link></h1>
        <ul>
          <li><Link to='/sub1'>서브페이지1</Link></li>
          {/* Link 태그를 CSS 작업하려면 a태그/class/id명으로 작업하면 됨 */}
          <li><Link to='/sub2'>서브페이지2</Link></li>
          <li>메뉴3</li>
        </ul>
      </div>
    </div>
  )
}

export default Header