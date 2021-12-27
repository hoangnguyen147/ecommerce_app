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
} from "react-native";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SafeArea from "../../components/utils/SafeArea";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Trường này là bắt buộc!"),
  password: Yup.string()
    .min(2, "Quá ngắn!")
    .required("Trường này là bắt buộc!"),
});

export default function Signup({ navigation }) {
  return (
    <SafeArea>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
      >
        <ImageBackground
          source={require("./background.jpg")}
          style={styles.background}
        >
          <View style={styles.container}>
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
            </View>
            <Image
              style={{
                height: 150,
                width: 150,
                marginTop: 20,
                alignSelf: "center",
              }}
              source={require("./logo.png")}
            />
            <Formik
              initialValues={{ email: "", password: "" }}
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
                      Email
                    </Text>
                    <TextInput
                      placeholder="email"
                      style={styles.text_input}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <Text style={{ color: "red" }}>{errors.email}</Text>
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
                      Password
                    </Text>
                    <TextInput
                      placeholder="password"
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

    </SafeArea>
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
    marginTop: 30,
    alignItems: "center",
    flex: 1,
    maxHeight: 200,
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
