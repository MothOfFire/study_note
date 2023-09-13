import React, { useContext } from 'react';
import styles from './Robots.module.css';
import { appContext, appSetStateContext } from '../AppState';

interface RobotsProps {
    id: number,//机器人id
    name: string,//机器人名称
    email: string,//机器人邮箱地址
}

const Robots: React.FC<RobotsProps> = ({id, name, email}) => {
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext);
    const addToCart = () => {
        if(setState) {
            setState((state) => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, {id, name}]
                    }
                }
            });
        }
    }
    return (
            <div className={styles.cardContainer}>
                <img src={`https://robohash.org/${id}`} alt="robot"  />
                <h2>{ name }</h2>
                <p>{ email }</p>
                <p>作者：{value.username}</p>
                <button 
                    onClick={ addToCart }
                >
                    加入购物车
                </button>
            </div>
    )
};

export default Robots;