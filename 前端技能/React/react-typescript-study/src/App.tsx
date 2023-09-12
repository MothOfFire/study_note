import React from 'react';
 import logo from './assets/images/logo.svg';
import styles from './App.module.css';
//导入robots的假数据，用于项目的编写测试
import robots from './mockdata/robots.json';
import Robots from './components/Robots';
import ShoppingCart from './components/ShoppingCart';


interface State {
  robotGallery: any[],
  count: number,
}

interface Props {
  
}

class App extends React.Component<Props, State > {

  constructor(props: Props) {
    super(props);
    //初始化state
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  componentDidMount(): void {
    // fetch(参数是需要处理的props)
    fetch("https://jsonplaceholder.typicode.com/users")
        .then( (response) => response.json())
        .then( (data) => this.setState({robotGallery: data}));
  }

  render(): React.ReactNode {
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
              this.setState({count: this.state.count + 1}, () => {
                console.log(this.state.count);
              });
            }
          }
        >
          count++
        </button>
        <span>count: { this.state.count }</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robots id={r.id} email={r.email} name={r.name} />
          ))}</div>
      </div>
    );
  }
}

export default App;
