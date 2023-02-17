import React from 'react';
import logo from './logo.svg';
import './App.css';

const name ="hello";

let username ="hello";

let dummyNum =2;

let bool :boolean =true;

let array1 =[true,false,true];
let arrayName =["たけし","みか"];

// 配列 string型 | 数字
let array2 =["hello",2];

// オブジェクトの型定義
interface NAME{
  first:string,
  last:string | null,
}

let nameobj :NAME ={first:"tamada",last:null}
console.log(nameobj);

// 関数の定義
const func1 =(x:number , y:number)=>{
  return x + y;
}

// interseption 複数の型 つなぐ
type PROFILE ={
  age:number,
  city:string,
}
type LOGIN ={
  username:string;
  password:string;
}
type USER =PROFILE & LOGIN; 

const userA : USER={
  // PROFILEへの代入
  age:30,
  city:"tokyo",
// LOGINへの代入
  username:"ごみ",
  password:"うんこ"
}
console.log(userA);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>テスト</h1>
      </header>
    </div>
  );
}

export default App;
