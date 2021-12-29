import { Formik } from "formik";
import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SafeArea from "../../components/utils/SafeArea";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Trường này là bắt buộc!"),
  password: Yup.string()
    .min(2, "Quá ngắn!")
    .required("Trường này là bắt buộc!"),
});

export default function Signup({ navigation }) {
  const { width, height } = useWindowDimensions();

  return (
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={require("./background.jpg")}
          style={styles.background}
        >
          <View style={{ ...styles.container, minHeight: height }}>
            <View style={styles.title}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  paddingBottom: 10,
                  color: "#27ae60",
                }}
              >
                Ecommerce App
              </Text>
              <Text style={{ fontSize: 16 }}>Gear is everything you need</Text>
              <Image
                style={{
                  height: 150,
                  width: 150,
                  marginTop: 20,
                  alignSelf: "center",
                }}
                source={require("./logo.png")}
              />
            </View>

            <Formik
              initialValues={{
                username: "",
                password: "",
                rePassword: "",
                fullname: "",
                phone: "",
                email: "",
                address: "",
                avatar: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.form}>
                  <View style={styles.form_input}>
                    <Text
                      style={{
                        paddingBottom: 10,
                        color: "#27ae60",
                        fontWeight: "bold",
                      }}
                    >
                      Tên đăng nhập
                    </Text>
                    <TextInput
                      placeholder="Tên đăng nhập"
                      style={styles.text_input}
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                      value={values.username}
                    />
                    {errors.username && touched.username ? (
                      <Text style={{ color: "red" }}>{errors.username}</Text>
                    ) : null}
                  </View>

                  <View style={styles.form_input}>
                    <Text
                      style={{
                        paddingBottom: 10,
                        color: "#27ae60",
                        fontWeight: "bold",
                      }}
                    >
                      Họ và Tên
                    </Text>
                    <TextInput
                      placeholder="Nguyễn Văn A ..."
                      style={styles.text_input}
                      onChangeText={handleChange("fullname")}
                      onBlur={handleBlur("fullname")}
                      value={values.fullname}
                    // secureTextEntry='true'
                    />
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    ) : null}
                  </View>

                  <View style={styles.form_input}>
                    <Text
                      style={{
                        paddingBottom: 10,
                        color: "#27ae60",
                        fontWeight: "bold",
                      }}
                    >
                      Số điện thoại
                    </Text>
                    <TextInput
                      placeholder="Phone"
                      style={styles.text_input}
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                    // secureTextEntry='true'
                    />
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    ) : null}
                  </View>

                  <View style={styles.form_input}>
                    <Text
                      style={{
                        paddingBottom: 10,
                        color: "#27ae60",
                        fontWeight: "bold",
                      }}
                    >
                      Địa chỉ
                    </Text>
                    <TextInput
                      placeholder="Địa chỉ"
                      style={styles.text_input}
                      onChangeText={handleChange("address")}
                      onBlur={handleBlur("address")}
                      value={values.address}
                    // secureTextEntry='true'
                    />
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    ) : null}
                  </View>
                  <View style={styles.form_input}>
                    <Text
                      style={{
                        paddingBottom: 10,
                        color: "#27ae60",
                        fontWeight: "bold",
                      }}
                    >
                      Mật khẩu
                    </Text>
                    <TextInput
                      placeholder="Mật khẩu"
                      style={styles.text_input}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    // secureTextEntry='true'
                    />
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    ) : null}
                  </View>
                  <View style={styles.form_input}>
                    <Text
                      style={{
                        paddingBottom: 10,
                        color: "#27ae60",
                        fontWeight: "bold",
                      }}
                    >
                      Nhập lại mật khẩu
                    </Text>
                    <TextInput
                      placeholder="Nhập lại mật khẩu"
                      style={styles.text_input}
                      onChangeText={handleChange("rePassword")}
                      onBlur={handleBlur("rePassword")}
                      value={values.rePassword}
                    // secureTextEntry='true'
                    />
                    {errors.password && touched.password ? (
                      <Text style={{ color: "red" }}>{errors.password}</Text>
                    ) : null}
                  </View>

                  <View>
                    <Button onPress={handleSubmit} title="Sign Up" />
                  </View>
                  <View style={styles.icon_action}>
                    <TouchableOpacity style={styles.icon}>
                      <Text style={{ color: "#27ae60" }}>Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                      <Text style={{ color: "#27ae60" }}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                      <Text style={{ color: "#27ae60" }}>Google</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.footer}>
                    <Text>If you have an account?</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SignIn")}
                      style={{ height: 20 }}
                    >
                      <Text style={{ color: "#27ae60" }}>Sign In here</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  title: {
    marginTop: 50,
    alignItems: "center",
    flex: 1,
    maxHeight: 200,
    marginBottom: 50
  },
  form: {},
  form_input: {
    marginBottom: 10,
  },
  text_input: {
    paddingLeft: 20,
    height: 50,
    borderColor: "#95a5a6",
    borderWidth: 1,
  },
  icon_action: {
    flexDirection: "row",

    justifyContent: "center",
  },
  icon: {
    // height:50,
    // width:50,
    margin: 10,
    // backgroundColor:'#27ae60',
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40
  },
});
