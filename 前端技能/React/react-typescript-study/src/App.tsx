import React, { useState, useEffect } from 'react';
 import logo from './assets/images/logo.svg';
import styles from './App.module.css';
//导入robots的假数据，用于项目的编写测试
// import robots from './mockdata/robots.json';
import Robots from './components/Robots';
import ShoppingCart from './components/ShoppingCart';


interface State {
  robotGallery: any[],
  count: number,
}

interface Props {
  
}
// 类组件的声明
// class App extends React.Component<Props, State > {
  // constructor(props: Props) {
  //   super(props);
  //   //初始化state
  //   this.state = {
  //     robotGallery: [],
  //     count: 0
  //   }
  // }

  // componentDidMount(): void {
  //   // fetch(参数是需要处理的props)
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //       .then( (response) => response.json())
  //       .then( (data) => this.setState({robotGallery: data}));
  // }

  // render(): React.ReactNode {
  //   return (
  //     // 这种css的注入方法被称为css in js (JSS)
  //     <div className={styles.app}>
  //       <div className={styles.appHeader}>
  //         <img src={logo} alt="logo" className={styles.appLogo} />
  //         <h1>罗伯特机器人炫光旋转滨周螺旋上升online购物平台的名字</h1>
  //       </div>
  //       <button 
  //         onClick={
  //           () => {
  //             this.setState({count: this.state.count + 1}, () => {
  //               console.log(this.state.count);
  //             });
  //           }
  //         }
  //       >
  //         count++
  //       </button>
  //       <span>count: { this.state.count }</span>
  //       <ShoppingCart />
  //       <div className={styles.robotList}>
  //         {this.state.robotGallery.map((r) => (
  //           <Robots id={r.id} email={r.email} name={r.name} />
  //         ))}</div>
  //     </div>
  //   );
  // }

// }
//函数式组件
const App: React.FC = (props) => {

  const [count, setCount] = useState< number >(0);
  const [robotGallery, setRobotGallery] = useState< any >([]);
  const [loading, setLoading] = useState< boolean >(false);
  const [error, setError] = useState< string >();

  useEffect(() => {
    document.title = ` 点击了${count}次 `;
  }, [count]);

  //在useEffect函数中中使用async和await
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setRobotGallery(data);
      } catch (e: any) {
        setError(e.message)
      }
      setLoading(false);
   } 
    fetchData();
  }, []);

  return (
    // 这种css的注入方法被称为css in js (JSS)
    <div className={styles.app}>
      <div className={styles.appHeader}>
         <img src={logo} alt="logo" className={styles.appLogo} />
         <h1>罗伯特机器人炫光旋转滨周螺旋上升online购物平台的名字</h1>
      </div>
      <button 
        onClick={
          () => {
            setCount(count + 1);
          }
        }
      >
        count++
      </button>
      <span>count: { count }</span>
      <ShoppingCart />
      { (!error || error !== "") && <div>网站出现{ error } 的错误啦！</div>}
      { !loading ?
        (
          <div className={styles.robotList}>
            {robotGallery.map((r: any) => (
              <Robots id={r.id} email={r.email} name={r.name} />
            ))}\
          </div>
        ) : 
        (
          <h2>loading 加载中.....</h2>
        )}
    </div>
  );
}

export default App;
