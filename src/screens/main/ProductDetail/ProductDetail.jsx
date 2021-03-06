import React, { useRef, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TouchableHighlight, Keyboard, TextInput, Alert } from "react-native"
import { StartArea, PriceWrapper } from "./ProductDetail.styles"
import Header2 from "../../../components/Header/Header2"
import SafeArea from "../../../components/utils/SafeArea"
import Overview from "./components/overview/Overview"
import Features from "./components/features/Features"
import { formatterVnd } from "../../../utils/formatNumber"
import { CartFooter, MainCart } from "../Cart/Cart.styles"
import { useEffect } from "react"
import { getComments } from "../../../api/comment.api"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/actions/cart"
import { notifyMessage } from "../../../utils/notify"


const ProductDetail = ({ route, navigation }) => {
  const [detail, setDetail] = useState('Overview');

  const commentRef = useRef();


  const { data } = route.params;

  const dispatch = useDispatch();


  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
  };

  const handleAddToCart = () => {
    dispatch(addToCart(data));
    notifyMessage("???? th??m s???n ph???m v??o gi??? h??ng");
  }

  return (
    <SafeArea>
      <Header2 title="CHI TI???T" navigation={navigation} />
      <View style={styles.container}>

        <View style={{ flex: isKeyboardVisible ? 1 : 0.935 }}>
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
                  T???ng qu??t
                </Text>
                <Line1 detail={detail} />
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setDetail('Features')}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                  T??nh n??ng
                </Text>
                <Line2 detail={detail} />
              </TouchableOpacity>
            </View>

            {detail == "Overview" ? (
              <Overview images={data.image} name={data.name} productId={data.id} />
            ) : (
              <Features feature={data.overview} name={data.name} />
            )}
          </ScrollView>

        </View>

        {isKeyboardVisible ? (
          null
        ) : (
          <TouchableHighlight style={styles.add_to_cart_wrapper} onPress={() => handleAddToCart()}>
              <Text style={{ color: 'white' }}>TH??M V??O GI??? H??NG</Text>
          </TouchableHighlight>
        )}
      </View>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  comment_input: {
    padding: 5,
    marginVertical: 10
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