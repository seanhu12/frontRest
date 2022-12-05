import React,{useState, useEffect,useContext} from 'react'
import {Text,TextInput,SafeAreaView,StyleSheet, Image,Platform,View,Button } from "react-native"
import {useNavigation} from "@react-navigation/native"
import RestaurantContext from '../../../RestaurantContext';
import {updateProductApi} from "../../../api/products"
import DropDownPicker from 'react-native-dropdown-picker';


export default function FormEditProd(props) {


  

 
  const {product,setProduct} = useContext(RestaurantContext)
  const {category,setCategory} = useContext(RestaurantContext)

  const Array = [category]

  const [description, setDescripcion]= useState();
  const [cant,setCant] = useState();
  const [price,setPrice] = useState();
  const [nombre,setNombre] = useState();
  const [cat, setcat]= useState();

  const [items,setItems] = useState([{label:'Ninguna',value:'ninguna'}]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);



  const navigation = useNavigation();

  useEffect(()=>{
    categ()
  },[])

  const categ = () => {
    var j=0;
    console.log(category);
    for(var id in category){
            j++;
    }
    
    for (let index = 0; index < j; index++) {
      
       items.push({label: category[index].name,value: category[index].name})
    }

  }


  const  editar  = async () =>{
    
      var z = 0;
      var j=0;
      for(var id in category){
              j++;
      }

      if(!nombre || !description  || !price || !cant ){
        alert("Rellene todos los espacion porfavor")
      }else{
        for (let index = 0; index < j; index++) {
          console.log(value);
          
          if(category[index].name ==  value){
            try {
              const Response = await updateProductApi(nombre,description,product.id,category[index].id,price,cant)
              z = 1
              alert("Actualizado Con exito")
              navigation.navigate('product')
    
            } catch (error) {
              alert("Error de conexion")
              
            }
          }
          
        }
        
          if (z == 0){
            
       
            alert("Seleccione Alguna Categoria ")
          }       
      }
      
    


  }
    
   
  return (
    <SafeAreaView >
         <TextInput
         style={styles.input}
         
        placeholder={product.name}
        keyboardType="default"
        onChangeText={setNombre}
        value={nombre}
        
      />
        <TextInput
         style={styles.input}
         
        placeholder={product.description}
        keyboardType="default"
        onChangeText={setDescripcion}
        value={description}
      
      />
      <DropDownPicker
      placeholder="Seleccion Categoria"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
     />
      <TextInput
         style={styles.input}
         
        placeholder={product.price}
        keyboardType="numeric"
        onChangeText={setPrice}
        value={price}
      
      />
      <TextInput
         style={styles.input}
         
        placeholder={"Cantidad"}
        keyboardType="numeric"
        onChangeText={setCant}
        value={cant}
      
      />
       
      
      <Button title="Editar Producto" onPress={editar} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  