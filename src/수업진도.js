// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

function App() {
  let [testArray, testArraySet] = useState(["월", "화", "수","목"]);
  let [testObj, testObjSet] = useState({name:" 고길동", birth:"9999-12-31", age:5300});

  // let [testNumber, testNumberSet] = useState(10);
  /* 배열, 객체 값 변경 1) state 값의 복사본 만들기 2) 사본 수정하기 3) 덮어쓰기*/

  /* 객체로 이루어진 배열 */
  let [testData, testDataSet] = useState([
    {
      title:"조니워커 레드",
      count:1,
      price:15000
    },
    {
      title:"조니워커 블랙",
      count:1,
      price:30000
    }
  ]);
  return (
    <div className="App">
      <button className="btn1" onClick={()=>{
        // 1) 전개연산자로 원본 데이터의 복사본 만들기
        let testArrayClone = [...testArray];
        console.log(testArrayClone);
        // 2) 클론의 데이터 수정하기
        testArrayClone[0] = "안녕하세요 ";
        testArrayClone[1] = "저는 ";
        testArrayClone[2] = "김길동 ";
        testArrayClone[3] = "입니다 ";
        // 3) 원본 데이터 조작 함수 호출해서 데이터값을 데이터 수정본으로 교체
        testArraySet(testArrayClone);
      }}>배열값 수정</button>
      <button className="btn2" onClick={()=>{
        // 1) 전개연산자로 원본 데이터의 복사본 만들기
        let testObjClone = {...testObj};
        // 2) 클론의 데이터 수정하기
        testObjClone.name = "홍길동 ";
        testObjClone.birth = "1865-01-23 ";
        testObjClone.age += 30; 
        // 3) 원본 데이터 조작 함수 호출해서 데이터값을 데이터 수정본으로 교체
        testObjSet(testObjClone)
      }}>객체값 수정</button>
      {/* <span>{testArray[0]}</span>
      <span>{testArray[1]}</span>
      <span>{testArray[2]}</span>
      <span>{testArray[3]}</span>
      <span>{testObj.name}</span>
      <span>{testObj.birth}</span>
      <span>{testObj.age}</span> */}
      {/* <div className="product1">
        <div>상품명 : {testData[0].title}</div>
        <div>상품가 : {testData[0].price}</div>
        <div>수량 : {testData[0].count}</div>
        <div>총금액 : {testData[0].price * testData[0].count}</div>
    
        <button onClick={()=>{
          let testDataClone = [...testData];
          testDataClone[0].count -= 1;
          testDataSet(testDataClone);
        }}>-</button>
        <button onClick={()=>{
          let testDataClone = [...testData];
          testDataClone[0].count += 1;
          testDataSet(testDataClone);
        }}>+</button>
      </div> */}
      {/* <div className="product2">
        <div>상품명 : {testData[1].title}</div>
        <div>상품판매가 : {testData[1].price}</div>
        <div>수량 : {testData[1].count}</div>
        <div>총 결제금액 : {testData[1].price * testData[1].count}</div>
    
        <button onClick={()=>{
          let testDataClone = [...testData];
          testDataClone[1].count -= 1;
          testDataSet(testDataClone);
        }}>-</button>
        <button onClick={()=>{
          let testDataClone = [...testData];
          testDataClone[1].count += 1;
          testDataSet(testDataClone);
        }}>+</button>
      </div> */}
      {/* 반복문 처리하기 */}
      {
        testData.map((test, idx)=>{
          return(
            <div className='products' key={idx}>
              <div>{/*상품명*/ test.title}</div>
              <div>{/*상품판매가*/ test.price}</div>
              <div>{/*수량*/ test.count}</div>
              <div>{/*총 결제금액*/ test.price * test.count}</div>
              <button onClick={()=>{
                let testDataClone = [...testData];
                (test.count <= 1) ? test.count = 1 : test.count -= 1;                
                testDataSet(testDataClone);
              }}>-</button>
              <button onClick={()=>{
                let testDataClone = [...testData];
                (test.count >= 10) ? test.count = 10 : test.count += 1;
                testDataSet(testDataClone);
              }}>+</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
