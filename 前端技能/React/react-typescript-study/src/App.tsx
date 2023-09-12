import React from 'react';
// import logo from './logo.svg';
import style from './App.module.css';
//导入robots的假数据，用于项目的编写测试
import robots from './mockdata/robots.json';
import Robots from './components/Robots';

function App() {
  return (
    // 这种css的注入方法被称为css in js (JSS)
    <div className={style.app}>
      <div className={style.robotList}>
        {robots.map((r) => (
          <Robots id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
