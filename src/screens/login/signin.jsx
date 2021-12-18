import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { fontSizes } from '../../theme/fonts'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { login } from '../../redux/actions/user';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import SafeArea from '../../components/utils/SafeArea';
import { useEffect } from 'react';


const SignupSchema = Yup.object().shape({
  // username: Yup.string()
  //   .required('Trường này là bắt buộc!'),
  // password: Yup.string()
  //   .min(5, 'Quá ngắn!')
  //   .required('Trường này là bắt buộc!'),
});


function Signin({ navigation, ...props }) {

  const dispatch = useDispatch();
  const submit = (values) => {

    // values = {}
    dispatch(login({
      username: 'hoangnguyen147',
      password: 'adminPass123'
    }))
    console.log(props)
  }
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Audio</Text>
          <Text style={{ fontSize: 16 }}>It's modular and designed to last</Text>
        </View>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={values => submit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={styles.form}>
                <View style={styles.form_input}>
                  <Text>username</Text>
                  <TextInput
                    placeholder='Ten dang nhap'
                    style={styles.text_input}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}

                  />
                  {errors.username && touched.username ? (
                    <Text style={{ color: 'red' }}>{errors.username}</Text>
                  ) : null}
                </View>
                <View style={styles.form_input}>
                  <Text>Password</Text>
                  <TextInput
                    placeholder='password'
                    style={styles.text_input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}

                  />
                  {errors.password && touched.password ? (
                    <Text style={{ color: 'red' }}>{errors.password}</Text>
                  ) : null}
                </View>
                <View style={styles.forgotpassword}>
                  <TouchableOpacity>
                    <Text style={styles.forgotpassword_text}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  {/* <Button onPress={handleSubmit} title="Sign In" /> */}
                  <Button onPress={() => handleSubmit()} title="Sign In" />


                </View>
                <View style={styles.footer}>
                  <Text>
                    Didn't have any account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                  >
                    <Text style={{ color: '#27ae60' }}>Dang</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1
  },
  title: {
    marginTop: 50,
    alignItems: 'center',
    flex: 1,
    maxHeight: 200,
  },
  form: {

  },
  form_input: {
    marginBottom: 10,
  },
  text_input: {
    paddingLeft: 20,
    height: 50,
    borderColor: '#95a5a6',
    borderWidth: 1,
  },
  forgotpassword: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  forgotpassword_text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  footer: {
    // flexDirection:'row',
    alignItems: 'center',
    marginTop: 50,
  }
})

export default Signin;

