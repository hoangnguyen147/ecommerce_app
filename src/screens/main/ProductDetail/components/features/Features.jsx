import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import FeaturesText  from './component/FeaturesText'
import FeaturesProduct from './component/FeaturesProduct'
const Features=()=>{

    return(
        <View style={{marginHorizontal:20}}>
            <FeaturesText/>
            <FeaturesProduct/>
            <View style={{marginBottom:20}}>
                <TouchableHighlight>
                    <View style={styles.add_card}>
                        <Text style={{color:'white'}}>Add to card</Text>
                    </View>  
                </TouchableHighlight>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    add_card:{
        backgroundColor:'#2ecc71',
        borderRadius:10,
        padding:10,
        alignItems:'center'
    }
})
export default Features