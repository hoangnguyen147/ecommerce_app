import { Platform, ToastAndroid, AlertIOS, Alert } from "react-native";


export function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    Alert.prompt('Đã thêm sản phẩm vào giỏ hàng');
  }
}