import React, { useContext } from "react";
import { appSetStateContext } from '../AppState';
import { RobotsProps } from './Robots';

export const withAddToCart = (ChildComponent: React.ComponentType< RobotsProps >) => {
    // return class extends React.Component {}
    return (props: any) => {
        const setState = useContext(appSetStateContext);
        const addToCart = (id: any, name: any) => {
            if(setState) {
                setState((state) => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, {id, name}]
                        },
                    };
                });
            }
        }
        return <ChildComponent {...props} addToCart={addToCart} />
    };
}

//自定义hooks组件
export const useAddToCart = () => {
    const setState = useContext(appSetStateContext);
    const addToCart = (id: any, name: any) => {
        if(setState) {
            setState((state) => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, {id, name}]
                    },
                };
            });
        }
    }
    return addToCart;
}