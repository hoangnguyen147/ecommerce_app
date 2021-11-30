import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { fontSizes } from '../../theme/fonts'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { login } from '../../redux/actions/user';
import { connect } from 'react-redux';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Trường này là bắt buộc!'),
  password: Yup.string()
    .min(2, 'Quá ngắn!')
    .required('Trường này là bắt buộc!'),
});


function Signin({ navigation, ...props }) {
  const submit = (values) => {
    console.log(values)
    console.log("alo23")
    // values = {}
    props.login();
    console.log(props)
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Audio</Text>
          <Text style={{ fontSize: 16 }}>It's modular and designed to last</Text>
        </View>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={values => submit(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={styles.form}>
                <View style={styles.form_input}>
                  <Text>Email</Text>
                  <TextInput
                    placeholder='email'
                    style={styles.text_input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}

                  />
                  {errors.email && touched.email ? (
                    <Text style={{ color: 'red' }}>{errors.email}</Text>
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
                  <Button onPress={() => props.login()} title="Sign In" />


                </View>
                <View style={styles.footer}>
                  <Text>
                    Didn't have any account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                  >
                    <Text style={{ color: '#27ae60' }}>Sign up here</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
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

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  login
};


export default connect(mapStateToProps, mapDispatchToProps)(Signin);

