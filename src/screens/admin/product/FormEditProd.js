import React,{useState, useEffect,useContext} from 'react'
import {Text,TextInput,SafeAreaView,StyleSheet, Image,Platform,View,Button } from "react-native"
import {useNavigation} from "@react-navigation/native"
import RestaurantContext from '../../../RestaurantContext';
import {updateProductApi} from "../../../api/products"
import DropDownPicker from 'react-native-dropdown-picker';
import {useFormik} from "formik";
import * as Yup from "yup";


export default function FormEditProd(props) {


  

 
  const {product,setProduct} = useContext(RestaurantContext)
  const {category,setCategory} = useContext(RestaurantContext)

 


  const [items,setItems] = useState([{label:'Ninguna',value:'ninguna'}]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const formik = useFormik({
    initialValues: {name: product.name, description: product.description,price: product.price,amount: product.amount},
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {     
      var z = 0;
      var j=0;
      for(var id in category){
              j++;
      }
      for (let index = 0; index < j; index++) {
        
        
        if(category[index].name ==  value){
          console.log(category[index].name);
          try {
            const Response = await updateProductApi(formValue.name,formValue.description,product.id,category[index].id,formValue.price,formValue.amount)
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
  })



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


  
    
   
  return (
    <SafeAreaView >
       
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
         
        placeholder="Nombre"
        autoCapitalize='none'
        value={formik.values.name}
        onChangeText={(text)=> formik.setFieldValue('name', text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Descripcion"
        autoCapitalize='none'
        value={formik.values.description}
        onChangeText={(text)=> formik.setFieldValue('description', text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Precio"
        autoCapitalize='none'
        value={formik.values.price}
        onChangeText={(text)=> formik.setFieldValue('price', text)}
      />
         <TextInput
        style={styles.input}
        placeholder="Cantidad"
        autoCapitalize='none'
        value={formik.values.amount}
        onChangeText={(text)=> formik.setFieldValue('amount', text)}
      />
       
      
      <Button title="Editar Producto" onPress={formik.handleSubmit} />

      <Text style= {styles.errors}>{formik.errors.name} </Text>
      <Text style= {styles.errors}>{formik.errors.description} </Text>
      <Text style= {styles.errors}>{formik.errors.price} </Text>
      <Text style= {styles.errors}>{formik.errors.amount} </Text>

    </SafeAreaView>
  )
}
function validationSchema () {
  return {
    name: Yup.string().required("Falta rellenar el nombre"),
    description: Yup.string().required("Falta rellenar la descripcion"),
    price: Yup.number().typeError("El precio tiene que ser un valor numerico").required("Falta rellenar el Precio"),
    amount: Yup.number().typeError("La cantidad tiene que ser un valor numerico").required("Falta rellenar la cantidad")
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  errors: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  }
  });
  