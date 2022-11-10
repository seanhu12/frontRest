
import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import { getProductApi } from '../api/products';
import ProductList from '../component/ProductList';
import { TapGestureHandler } from 'react-native-gesture-handler';





export default function ClientScreen(props){

  const {navigation,route:{params}} = props;

  const [products,setProducts] = useState([]);

  console.log(params.number);

 
  useEffect(()=>{
    (async () => {
      await  loadProduct();    
      
    })()
  },[])

  const loadProduct = async () => {

    try {
      
      const response = await getProductApi();

      
      const productArray = []

      
      var x = new Boolean(TapGestureHandler)
      var a = new Number('0');

      while (x){

        const obj = response[a];
        if (obj){
          productArray.push({
            id: obj.id,
            name: obj.name,
            code: obj.code,
            price: obj.price,
            image: obj.image,
            description: obj.description
          })
            a++;
        }else{
            a = 0;
            x = false
        }

    }
      setProducts([...productArray]);
      
      } catch (error) {
      console.error(error);
    }

  }
 
  
  return (
    <SafeAreaView>
       <ProductList products = {products} />
    </SafeAreaView>
  );

}