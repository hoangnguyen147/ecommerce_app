import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from "react-native"
import {StartArea,PriceWrapper} from "./ProductDetail.styles"
import Header2 from "../../../components/Header/Header2"
import SafeArea from "../../../components/utils/SafeArea"
import Overview from "./components/overview/Overview"
import Features from "./components/features/Features"


const ProductDetail=({navigation})=>{
    const [detail,setDetail]=useState('Overview')
    const Item=({detail})=>{
        if(detail=='Overview'){
            return(
                <Overview/>
            )
        }
        else {
            return (
                <Features/>
            )
        }
    }
    const Line1=({detail})=>{
        if(detail=='Overview'){
            return(
                <View style={{backgroundColor:'#2ecc71',width:40,height:5,marginTop:10}}>

                </View>
            )
        }
        else{
            return(
                <View style={{marginTop:10}}>

                </View>
            )
        }
    }
    const Line2=({detail})=>{
        if(detail=='Features'){
            return(
                <View style={{backgroundColor:'#2ecc71',width:40,height:5,marginTop:10}}>

                </View>
            )
        }
        else{
            return(
                <View style={{marginTop:10}}>

                </View>
            )
        }
    }
    return(
        <SafeArea>
            <Header2 title="CHI TIẾT" navigation={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <StartArea>
                    <PriceWrapper>
                        USD 35
                    </PriceWrapper>
                    <Text style={styles.name_wrapper}>
                        TMA-2 HD WIRELESS
                    </Text>
                </StartArea>

                <View style={styles.navagate}>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setDetail('Overview')}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>
                            Overview
                        </Text>
                        <Line1 detail={detail}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setDetail('Features')}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>
                            Features
                        </Text>
                        <Line2 detail={detail}/>
                    </TouchableOpacity>
                </View>

                <Item detail={detail}/>
            </ScrollView>
        </SafeArea>
    )
}

const styles=StyleSheet.create({
    name_wrapper:{
        fontSize:20,
        fontWeight:'bold'
    },
    navagate:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:20,
        paddingVertical:20,
    }
})
export default ProductDetail