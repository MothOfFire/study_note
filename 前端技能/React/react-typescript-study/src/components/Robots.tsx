import React from 'react';
import styles from './Robots.module.css';

interface RobotsProps {
    id: number,//机器人id
    name: string,//机器人名称
    email: string,//机器人邮箱地址
}

const Robots: React.FC<RobotsProps> = ({id, name, email}) => {
    
    return <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="robot"  />
        <h2>{ name }</h2>
        <p>{ email }</p>
    </div>
};

export default Robots;