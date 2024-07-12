import { StyleSheet, Text, View, FlatList, Image, Dimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';


const ProductDetailScreen = () => {
    const [products, setproducts] =useState([]);
    useEffect(() => {
      getproducts();

    }, []);
    const getproducts = () =>{
        const URL = "https://fakestoreapi.com/products";
        

        fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setproducts(data);
            console.log(data)
        });
    };
  return (
    <View style={styles.con}>
      
      <FlatList
      data={products}
      numColumns={2}
      renderItem={({item}) => (
        <View style={styles.content}>
            <TouchableHighlight onPress={() => alert("Add this item to the cart")}>
                <View style={styles.tex}>
                    <Image source={{uri: item.image}} style={styles.image} />
                </View>

            </TouchableHighlight>

            
            
            
            
            <Text style={styles.col}>

                {item.title}

            </Text>
            <Text>{item.rate}</Text>
           
            
            <Text style={{fontSize: 18, textAlign: 'center', color: 'red'}}>
                ${item.price}
                

            </Text>
        </View>
      )}/>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tex: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    col: {

        justifyContent: 'center',
        alignItems: 'center',
        
        
        textAlign: 'center',

    },
    content: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    }
    

})