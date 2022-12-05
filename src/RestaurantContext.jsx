import { createContext, useState, useEffect } from "react"

const RestaurantContext = createContext()

export function RestaurantProvider({children}){
    
    const [mesa,setMesa] = useState()
    const [product,setProduct] = useState()
   
    const [category,setCategory] = useState()
    const [cat,setCat] = useState()
    const [total,settotal] = useState(0)

    const [carro,setCarro] = useState([])
    const [carroAgregado,setCarroAgregado] = useState(false)

    const [image, setImage] = useState(null);

    

    return(
        <RestaurantContext.Provider value={{mesa, setMesa, carro, setCarro,carroAgregado,setCarroAgregado,image,setImage,
        category,setCategory,total,settotal,product,setProduct,cat,setCat}}>{children}</RestaurantContext.Provider>
    )
}

export default RestaurantContext