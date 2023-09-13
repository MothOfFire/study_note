import React, { useState } from "react";

interface AppStateValue {
    username: string,
    shoppingCart: {
        items: {
            id: number,
            name: string
        }[]
    }
}

const defaultContextValue: AppStateValue = {
    username: "hua",
    //购物车数据
    shoppingCart: {
        items: []
    }
  }
  
//通过createContext函数创建上下文，函数要求我们必须有一个默认初始值
export const appContext = React.createContext(defaultContextValue);
//让上下文可以共享setState方法
//<React.Dispatch<React.SetStateAction<AppStateValue>>>是setState的类型
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

  //创建上下文组件
export const AppStateProvider: React.FC<any> = (props: any) => {
    const [ state, setState ] = useState(defaultContextValue);
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )    
}