import { createContext, useRef, useState } from "react";


export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [toastProduct, setToastProduct] = useState(null);
    const toastTimeout = useRef(null)

    const addToCart = (product) => {
        setCart((prevCart) =>{
            const havingProducts = prevCart.find((item) => item.id == product.id);

            if(havingProducts){
                return prevCart.map((item) => {
                    return item.id == product.id ? {...item, count:item.count + 1} : item;
                })
            }
            
            return [...prevCart, {...product, count: 1}]
        })
        setToastProduct(product);
        if (toastTimeout.current) {
            clearTimeout(toastTimeout.current);
        }
        toastTimeout.current = setTimeout(() => {
            setToastProduct(null);
        }, 3000);
    };
    const minusToCart = (product) => {
        setCart((prevCart) => {
            return prevCart.map((item) => 
                    item.id == product.id ? {...item, count: item.count - 1} : item
                ).filter((item) => item.count > 0);
        })
    };
    const deleteForCart = (product) => {
        setCart((prevCart) => {
            return prevCart.filter(item => item.id != product.id);
        })
    };


    return(
        <cartContext.Provider value={{cart, addToCart, minusToCart, deleteForCart, toastProduct, setToastProduct}}>
            {children}
        </cartContext.Provider>
    )
}
