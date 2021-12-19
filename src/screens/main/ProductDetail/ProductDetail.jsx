import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TouchableHighlight } from "react-native"
import { StartArea, PriceWrapper } from "./ProductDetail.styles"
import Header2 from "../../../components/Header/Header2"
import SafeArea from "../../../components/utils/SafeArea"
import Overview from "./components/overview/Overview"
import Features from "./components/features/Features"
import { formatterVnd } from "../../../utils/formatNumber"
import { CartFooter, MainCart } from "../Cart/Cart.styles"


const ProductDetail = ({ route, navigation }) => {
  const [detail, setDetail] = useState('Overview');

  const { data } = route.params

  const Line1 = ({ detail }) => {
    if (detail == 'Overview') {
      return (
        <View style={{ backgroundColor: '#2ecc71', width: 40, height: 5, marginTop: 10 }}>

        </View>
      )
    }
    else {
      return (
        <View style={{ marginTop: 10 }}>

        </View>
      )
    }
  }
  const Line2 = ({ detail }) => {
    if (detail == 'Features') {
      return (
        <View style={{ backgroundColor: '#2ecc71', width: 40, height: 5, marginTop: 10 }}>

        </View>
      )
    }
    else {
      return (
        <View style={{ marginTop: 10 }}>

        </View>
      )
    }
  }
  return (
    <SafeArea>
      <Header2 title="CHI TIẾT" navigation={navigation} />
      <View style={styles.container}>

        <View style={styles.content}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <StartArea>
              <PriceWrapper>
                {formatterVnd(data.price)}
              </PriceWrapper>
              <Text style={styles.name_wrapper}>
                {data.name}
              </Text>
            </StartArea>

            <View style={styles.navagate}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDetail('Overview')}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                  Tổng quát
                </Text>
                <Line1 detail={detail} />
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDetail('Features')}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                  Tính năng
                </Text>
                <Line2 detail={detail} />
              </TouchableOpacity>
            </View>

            {detail == "Overview" ? (
              <Overview images={data.image} />
            ) : (
              <Features feature={data.overview} name={data.name} />
            )}
          </ScrollView>

        </View>
        <View style={styles.add_to_cart_wrapper}>
          <TouchableHighlight>
            <Text style={{ color: 'white' }}>Add to card</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  content: {
    flex: 0.935
  },
  add_to_cart_wrapper: {
    flex: 0.065,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2ecc71',
    borderRadius: 10,
  },
  name_wrapper: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  navagate: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
})
export default ProductDetail