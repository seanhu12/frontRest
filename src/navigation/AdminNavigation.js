import react from "react";
import {createStackNavigator} from "@react-navigation/stack"


import AdmiScreen from "../screens/admin/AdmiScreen"

import AdminCategory from "../screens/admin/AdminCategory";


import AdminProducts from "../screens/admin/AdminProduct";
import AgCate from "../screens/admin/category/AgCate";
import EdCate from "../screens/admin/category/EdCate"
import formEdit from "../screens/admin/category/formEdit";
import ElCate from "../screens/admin/category/ElCate";
import AgProduct from "../screens/admin/product/AgProduct";
import listCate from "../screens/admin/product/listCate";
import EdProduct from "../screens/admin/product/EdProduct";
import FormEditProd from "../screens/admin/product/FormEditProd";
import ElProducto from "../screens/admin/product/ElProduct";

const Stack = createStackNavigator();

export default function AdminNavigation(){

    return(

        <Stack.Navigator>
            <Stack.Screen name="admin" component={AdmiScreen} options={{title: "Administrador"}} />
            
            <Stack.Screen name="category" component={AdminCategory} options={{title: "Categorias"}} />
            <Stack.Screen name="agregarCat" component={AgCate} options={{title: "Categorias"}} />
            <Stack.Screen name="editarCat" component={EdCate} options={{title: "Categorias"}} />
            <Stack.Screen name="elimCat" component={ElCate} options={{title: "Categorias"}} />
            <Stack.Screen name="formEdit" component={formEdit} options={{title: "Formulario"}} />



            <Stack.Screen name="product" component={AdminProducts} options={{title: "Productos"}} />
            <Stack.Screen name="listcate" component={listCate} options={{title: "Productos"}} />
            <Stack.Screen name="listProdEd" component={EdProduct} options={{title: "Productos"}} />
            <Stack.Screen name="formEditProd" component={FormEditProd} options={{title: "Productos"}} />



            <Stack.Screen name="agregarProd" component={AgProduct} options={{title: "Productos"}} />
            <Stack.Screen name="elimProd" component={ElProducto} options={{title: "Productos"}} />

            
        </Stack.Navigator>

    )
}
