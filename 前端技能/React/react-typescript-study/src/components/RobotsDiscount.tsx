import React, { useContext } from 'react';
import styles from './Robots.module.css';
import { appContext } from '../AppState';
import { useAddToCart } from './AddToCart';

export interface RobotsProps {
    id: number,//机器人id
    name: string,//机器人名称
    email: string,//机器人邮箱地址
}

const RobotsDiscount: React.FC<RobotsProps> = ({id, name, email }) => {
    const value = useContext(appContext);
    const addToCart = useAddToCart();
    return (
            <div className={styles.cardContainer}>
                <img src={`https://robohash.org/${id}`} alt="robot"  />
                <h2>打折商品</h2>
                <h2>{ name }</h2>
                <p>{ email }</p>
                <p>作者：{value.username}</p>
                <button 
                    onClick={ 
                        () => addToCart(id, name) 
                    }
                >
                    加入购物车
                </button>
            </div>
    )
};

export default RobotsDiscount;