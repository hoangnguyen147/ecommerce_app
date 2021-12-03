import React from 'react'
import { StyleSheet, Text, View,Button,TouchableHighlight} from 'react-native'
import OverviewImage from './component/OverviewImage'
import ReviewProduct from './component/ReviewProduct'
import AnotherProduct from './component/AnotherProduct'
const Overview=()=>{

    return(
        <View style={styles.overview_wrapper}>
            <OverviewImage/>
            <ReviewProduct/>
            <AnotherProduct/>
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
    overview_wrapper:{
        marginHorizontal:20,
    },
    add_card:{
        backgroundColor:'#2ecc71',
        borderRadius:10,
        padding:10,
        alignItems:'center'
    }
})
export default Overview