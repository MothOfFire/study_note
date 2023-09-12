import React from 'react';
// import logo from './logo.svg';
import './App.css';
//导入robots的假数据，用于项目的编写测试
import robots from './mockdata/robots.json';
import Robots from './components/Robots';

function App() {
  return (
    <ul>
      {robots.map((r) => (
        <Robots id={r.id} email={r.email} name={r.name} />
      ))}
    </ul>
  );
}

export default App;
