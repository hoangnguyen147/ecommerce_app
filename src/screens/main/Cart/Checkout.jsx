import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, useWindowDimensions, TouchableOpacity, StyleSheet, Keyboard, ScrollView, TextInput, Button, ToastAndroid, Platform, AlertIOS } from 'react-native'
import { useSelector } from 'react-redux';
import { postAddOrder } from '../../../api/order.api';
import Header5 from '../../../components/Header/Header5';
import SafeArea from '../../../components/utils/SafeArea';
import { formatterVnd } from '../../../utils/formatNumber';
import { notifyMessage } from '../../../utils/notify';
import CheckoutItem from './components/CheckoutItem';


const Checkout = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const data = useSelector(state => state.cart.data);
  const [message, setMessage] = useState("");


  const sumPrice = (data) => {
    let sum = 0;
    const arr = Object.values(data);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].price * arr[i].order;
    }
    return sum;
  };

  

  const handleSubmit = async () => {
    try {
      const list = Object.values(data).map((item) => {
        return {
          product_id: item.id,
          quantity: item.order
        }
      })
      console.log(list)
      const res = await postAddOrder({
        message: message,
        items: list
      });
      console.log(res);
      notifyMessage("Đặt hàng thành công")
    } catch (err) {

    }
  }

  const sum = sumPrice(data);

  return (
    <SafeArea>
      <Header5 navigation={navigation} />
      <View style={styles.container}>
        <ScrollView
          style={styles.main}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {data && Object.keys(data).map((item, index) => {
            return (
              <CheckoutItem width={width * 0.9} key={index} data={data[item]} />
            )
          })}
          <View style={styles.detail_order_wrapper}>
            <View style={{ ...styles.detail_order, width: width * 0.8 }}>
              <TextInput
                multiline={true}
                numberOfLines={3}
                style={{ color: "#0ACF83", marginVertical: 5 }}
                placeholder='Nhập lời nhắn (địa chỉ, dặn dò, ...)'
                onChangeText={(text) => setMessage(text)}
                value={message}
              />
            </View>
            <View style={{ ...styles.detail_order, width: width * 0.8 }}>
              <Text>Tổng:</Text>
              <Text>{formatterVnd(sum)}</Text>
            </View>
            <View style={{ ...styles.detail_order, width: width * 0.8 }}>
              <Text>Thuế GTTT:</Text>
              <Text>{formatterVnd(sum * 0.1)}</Text>
            </View>
            <View style={{ ...styles.detail_order, width: width * 0.8 }}>
              <Text>Phí vận chuyển:</Text>
              <Text>30.000 VND</Text>
            </View>
            <View style={{ ...styles.detail_order, width: width * 0.8 }}>
              <Text style={{ fontWeight: "bold" }}>Thành tiền:</Text>
              <Text style={{ fontWeight: "bold" }}>{formatterVnd(sum * 1.1 + 30000)}</Text>
            </View>
            <View style={{ width: width * 0.9, marginVertical: 25 }}>
              <Button
                title="Đặt hàng"
                color="#0ACF83"
                onPress={() => handleSubmit()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 0.935
  },
  checkout: {
    flex: 0.065
  },
  detail_order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6
  },
  detail_order_wrapper: {
    alignItems: 'center'
  }
})

export default Checkout;
