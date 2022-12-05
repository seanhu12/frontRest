import React ,{useContext,useEffect,useState} from 'react'
import { StyleSheet,Text,FlatList, TouchableWithoutFeedback,View,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from "@react-navigation/native"
import RestaurantContext from '../../../RestaurantContext'
import { capitalize } from "lodash"
import { Button, TextInput, Modal, Portal } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


export default function ProductList(props) {
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const {products, cat} = props
 

    const navigation = useNavigation();
    
   
    const {carro,setCarro } = useContext(RestaurantContext)
    const {mesa} = useContext(RestaurantContext)
    const [newProduct,setNewProd] = useState([products])
    
 



    
    
    const [viewCont,setViewCont] = useState(false)
    const [cant,setCant] = useState('1');

    const [id,setid] = useState();
    const [cate,setCate] = useState();
    const [code,setCode] = useState();
    const [name,setName] = useState();
    const [price,setPrice] = useState();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([{label: 'todos', value:'0'}]);

    useEffect(()=>{

        var j=0;
    
        for (var id in cat){
                j++;
        }
            
        for (let index = 0; index < j; index++) {
               items.push({label: cat[index].name,value: cat[index].id})
        }
        
    },[cat])




    


    const filter = () => {     
        if (value == 0){
            setNewProd(products)  

        }else{
            setNewProd(products.filter((prod) => prod.category_id == value ))    
        }
    }

   
   
       

    const goToProduct = (item) => {
        setViewCont(true)
        setid(item.id)
        setCate(item.category_id)
        setCode(item.code)
        setName(item.name)
        setPrice(item.price)
    }
    const Order = () => {
        const order = {
            id: id,
            table: mesa.id,
            category: cate,
            code: code,
            name: name,
            status: "enProceso",
            price: price,
            cant: cant
        }
        setCarro([...carro, order])
        alert("Producto agregado con exito ")
        setViewCont(false)
        setCant('1')

    }  
    const createBolet = () => {
        navigation.navigate("carrito")
    }
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
                />

                <Portal>

                    <Modal visible= {viewCont} contentContainerStyle={containerStyle}> 
                        <TextInput
                            label="Cantidad"
                            value={cant}
                            onChangeText={cant => setCant(cant)}
                        />
                        <Button  mode="contained" onPress={() => Order()}>
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
    }
})
