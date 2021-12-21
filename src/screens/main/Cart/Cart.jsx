import React from 'react'
import { View, Text, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import Header4 from '../../../components/Header/Header4';
import SafeArea from '../../../components/utils/SafeArea';
import { formatterVnd } from '../../../utils/formatNumber';
import { CartFooter, CartItemWrapper, CheckoutButton, MainCart, SumText } from './Cart.styles';
import CartItem from './components/CartItem';

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const Cart = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const data = useSelector(state => state.cart.data);
  console.log(data);



  const sum = Object.values(data).length > 0 ? formatterVnd(Object.values(data).reduce((prev, cur) => {
    if(cur == null) return prev.price + prev.order;
    return prev.price * prev.order + cur.price * cur.order;
  }, {order: 0, price: 0})) : "0 VND";

  const sumPrice = (data) => {
    let sum = 0;
    const arr = Object.values(data);
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i].price * arr[i].order;
    }
    return formatterVnd(sum);
  }

  return (
    <SafeArea>
      <Header4 navigation={navigation} />
      <MainCart>
        <View style={{ flex: 0.92 }}>
          <FlatList
            data={Object.keys(data)}
            renderItem={({ item, index }) => {
              return (
                <CartItem width={width * 0.9} key={index} data={data[item]} />
              )
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <CartFooter>
          <SumText>Tổng cộng: {sumPrice(data)}</SumText>

          <TouchableOpacity>
            <CheckoutButton>
              Thanh toán
            </CheckoutButton>
          </TouchableOpacity>
        </CartFooter>
      </MainCart>
    </SafeArea>
  )
}

export default Cart;
