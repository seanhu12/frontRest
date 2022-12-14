import React ,{useContext,useEffect,useState} from 'react'
import { StyleSheet,Text,FlatList, TouchableWithoutFeedback,View,Image,ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from "@react-navigation/native"
import RestaurantContext from '../../../RestaurantContext'
import { capitalize } from "lodash"
import { Button, TextInput, Modal, Portal } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import {useFormik} from "formik";
import * as Yup from "yup";


export default function ProductList(props) {
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const {products, cat} = props

    const {carro,setCarro } = useContext(RestaurantContext)
   
    const {mesa} = useContext(RestaurantContext)
    const [newProduct,setNewProd] = useState([])
    
    const [viewCont,setViewCont] = useState(false)


    const [id,setid] = useState();
    const [cate,setCate] = useState();
    const [code,setCode] = useState();
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [amount,setAmount] = useState();

    //necesario para el dropPicker
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([{label: 'todos', value:'0'}]);
 

    const navigation = useNavigation();

    // validaciones necesarias para el pedido 
    const formik = useFormik({
        initialValues: {cant: "1"},
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            //verifica si hay stock necesario
            if(formValue.cant <= amount){
                //verifica el ingreso de solo numeros positivos
                if(formValue.cant > 0){
                    //crea un objeto orden
                    const order = {
                        id: id,
                        table: mesa.id,
                        category: cate,
                        code: code,
                        name: name,
                        status: "enProceso",
                        price: price,
                        cant: formValue.cant
                    }
                    var x = new Boolean(true)
                    
                    //valida si esta cambiando la cantidad del producto o es uno nuevo
                    if(carro.length == 0){
                        setCarro([...carro, order])
                       
                    }else{
                        // revisa si es que el producto se repite
                        for (let i = 0; i < carro.length; i++) {  

                            if(carro[i].id == id && carro[i].table == mesa.id){
                                x = false
                              carro.forEach(carro => {
                                 if(carro.id== id && carro.table == mesa.id){
                                    
                                   carro.cant = parseInt(carro.cant)  + parseInt(formValue.cant) ;
                                 }   
                              })
                            }
                             
                         }

                    }

                    if(x){
                        setCarro([...carro, order])
                    }

                    alert("Producto agregado con exito ")
                    setViewCont(false)

                    
                   
                }else{
                    alert('Igrese un numero positivo porfavor')
                }

            }else{
                alert('No hay suficientes suministros')
            }

        

        }
      })
    
   
   

    //ejecuta codigo necesario
    useEffect(()=>{

        //carga los datos necesario en el dropicker

        if(newProduct.length == 0){
            setNewProd(products)
        } 
        var j=0;
        for (var id in cat){
                j++;
        }
        for (let index = 0; index < j; index++) {
               items.push({label: cat[index].name,value: cat[index].id})
        }
        
    },[cat])

    //filtra segun la eleccion del drawPicker
    const filter = () => {     
        if (value == 0){
            setNewProd(products)  

        }else{
            setNewProd(products.filter((prod) => prod.category_id == value ))    
        }
    }

   // guarda los datoss necesarios del producto seleccionado
    const goToProduct = (item) => {
        console.log(item);
        setViewCont(true)
        setid(item.id)
        setCate(item.category_id)
        setCode(item.code)
        setName(item.name)
        setPrice(item.price)
        setAmount(item.amount)
    }

    // navegacion al carrito
    const createBolet = () => {

        navigation.navigate("carrito")
    }

    //item renderizado
    const Item = ({item}) => (
        <TouchableWithoutFeedback onPress={() => goToProduct(item)} >
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={styles.bgStyles}>

                    <Text style={styles.number}>${`${item.price}`.padStart(4, 0)} </Text>
                    <Text style={styles.name1}> {capitalize(item.name)} </Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.image} />

            </View>
        </View>

       </TouchableWithoutFeedback>

    )

    // Para renderizar
    const renderItem = ({item}) => (
        <Item item = {item} /> 
    )


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
                onChangeValue ={filter}
                />
                
              <FlatList 
                data ={newProduct}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(product) => String(product.id)}
                renderItem = {renderItem}
                contentContainerStyle={styles.FlatListContentContainer}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    newProduct.length == 0 && (
                      <ActivityIndicator
                        size="large"
                        style={styles.spinner}
                        color="#AEAEAE"
                      />
                    )
                  }
                />

                <Portal>

                    <Modal visible= {viewCont} contentContainerStyle={containerStyle}> 
                        <TextInput
                            label="Cantidad"
                            autoCapitalize='none'
                            value={formik.values.cant}
                            onChangeText={(text)=> formik.setFieldValue('cant', text)}   
                        />
                        <Text style= {styles.errors}>{formik.errors.cant} </Text>
                        <Button  mode="contained" onPress={formik.handleSubmit}>
                        Pedir
                        </Button>
                        <Button  mode="contained" onPress={() => setViewCont(false)}>
                        Atras
                        </Button>
                    </Modal>
                </Portal>

                
                     <Button onPress={createBolet} mode="contained" > Carrito</Button>
                
     

               


        </SafeAreaView>

        
       
    )
  
}

//validaciones Yup
function validationSchema () {
    return {
      cant: Yup.number().typeError("Tiene que ser numerico").required("Ingrese una cantidad ")
     
    }
}

//estilos necesarios
const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,

    },
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        backgroundColor: "grey",
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11,

    },
    name1: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 50,
        width: 90,
        height: 90,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 60,
      },
    
    errors: {
      textAlign: "center",
      color: "#f00",
      marginTop: 20,
    }
})
