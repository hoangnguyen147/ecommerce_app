import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, useWindowDimensions, TouchableOpacity, StyleSheet, Keyboard, ScrollView, TextInput, Button } from 'react-native'
import { useSelector } from 'react-redux';
import Header5 from '../../../components/Header/Header5';
import SafeArea from '../../../components/utils/SafeArea';
import { formatterVnd } from '../../../utils/formatNumber';
import { CartFooter, CartItemWrapper, CheckoutButton, HorizontalLine, MainCart, SumText } from './Cart.styles';
import CartItem from './components/CartItem';
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

  const sum = sumPrice(data);

  return (
    <SafeArea>
      <Header5 navigation={navigation} />
      
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
