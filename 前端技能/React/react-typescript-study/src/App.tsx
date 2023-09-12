import React from 'react';
 import logo from './assets/images/logo.svg';
import styles from './App.module.css';
//导入robots的假数据，用于项目的编写测试
import robots from './mockdata/robots.json';
import Robots from './components/Robots';

function App() {
  return (
    // 这种css的注入方法被称为css in js (JSS)
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人炫光旋转滨周螺旋上升online购物平台的名字</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robots id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
