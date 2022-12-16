import React,{useState, useEffect,useContext} from 'react'
import {Text,TextInput,SafeAreaView,StyleSheet, Image,Platform,View,Button } from "react-native"
import {useNavigation} from "@react-navigation/native"
import RestaurantContext from '../../../RestaurantContext';
import {updateProductApi} from "../../../api/products"
import DropDownPicker from 'react-native-dropdown-picker';
import {useFormik} from "formik";
import * as Yup from "yup";


export default function FormEditProd() {

  //categoria y productos seleccionados previamente 
  const {product,setProduct} = useContext(RestaurantContext)
  const {category,setCategory} = useContext(RestaurantContext)
  
 


  //son necesarios para el correcto funcionamiento del drawer
  const [items,setItems] = useState([{label:'Ninguna',value:'ninguna'}]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  //Validaciones
  const formik = useFormik({
    
    initialValues: {name: product.name, description: product.description, price: product.price, amount: product.amount},
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {    
      //verificacion de precio y cantidad negativas
      if (formValue.amount > 0 && formValue.price > 0){
        var z = 0;
        var j=0;

        //Busca cuantas categorias hay
        for(var id in category){
                j++;
        }

        //recorre las categorias
        for (let index = 0; index < j; index++) {
          
          //verifica la categoria con el valor seleccionaro
          if(category[index].name ==  value){
            try {
              //se hace la peticion con el id de la categoria
              const Response = await updateProductApi(formValue.name,formValue.description,product.id,category[index].id,formValue.price,formValue.amount)
              z = 1
             
              navigation.navigate('product')
    
            } catch (error) {
            
              
            }
          }
  
        }
        // en caso de que no se seleccione ninguna categoria
        if (z == 0){
         
          alert("Seleccione Alguna Categoria ")
        }       

      }else{
        alert('Recuerde "solo numeros positivos"')
      }
    }
  })



  const navigation = useNavigation();

  //ejecuta el codigo categ 
  useEffect(()=>{
    categ()
  },[])

  //carga las categorias en el drawer desplegable
  const categ = () => {
    var j=0;
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
      <Text style= {styles.errors}>{formik.errors.name} </Text>
       <TextInput
         style={styles.input}
         
        placeholder="Nombre"
        autoCapitalize='none'
        value={formik.values.name}
        onChangeText={(text)=> formik.setFieldValue('name', text)}
      />
      <Text style= {styles.errors}>{formik.errors.description} </Text>
       
       <TextInput
        style={styles.input}
        placeholder="Descripcion"
        autoCapitalize='none'
        value={formik.values.description}
        onChangeText={(text)=> formik.setFieldValue('description', text)}
      />
          <Text style= {styles.errors}>{formik.errors.price} </Text>
       <TextInput
        style={styles.input}
        placeholder="Precio"
        autoCapitalize='none'
        value={formik.values.price}
        onChangeText={(text)=> formik.setFieldValue('price', text)}
      />
       <Text style= {styles.errors}>{formik.errors.amount} </Text>
    
         <TextInput
        style={styles.input}
        placeholder="Cantidad"
        autoCapitalize='none'
        value={formik.values.amount}
        onChangeText={(text)=> formik.setFieldValue('amount', text)}
      />
     
       
      
      <Button title="Editar Producto" onPress={formik.handleSubmit} />

     
      
      
      

    </SafeAreaView>
  )
}
//las restricciones de cada input 
function validationSchema () {
  return {
    name: Yup.string().required("Falta rellenar el nombre").matches("[A-Za-z]+","solo letras"),
    description: Yup.string().required("Falta rellenar la descripcion").matches("[A-Za-z]+","solo letras"),
    price: Yup.number().typeError("El precio tiene que ser un valor numerico").required("Falta rellenar el Precio"),
    amount: Yup.number().typeError("La cantidad tiene que ser un valor numerico").required("Falta rellenar la cantidad")

  }
}

// estilos correspontientes
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
    marginTop: 10,
  }
  });
  