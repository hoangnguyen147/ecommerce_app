import React from 'react'
import { View, Text, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import Header4 from '../../../components/Header/Header4';
import SafeArea from '../../../components/utils/SafeArea';
import { CartFooter, CartItemWrapper, CheckoutButton, MainCart, SumText } from './Cart.styles';
import CartItem from './components/CartItem';

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const Cart = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const data = useSelector(state => state.cart.data);
  console.log(data);

  return (
    <SafeArea>
      <Header4 navigation={navigation} />
      <MainCart>
        <View style={{ flex: 0.92 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {

              return (
                <CartItem width={width * 0.9} key={index} data={item} />
              )
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <CartFooter>
          <SumText>Tổng cộng: 3.000.000 VNĐ</SumText>

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
