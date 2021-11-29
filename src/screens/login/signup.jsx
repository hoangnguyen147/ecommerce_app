import React from 'react'
import { View,Text, SafeAreaView, TextInput, Button, StyleSheet } from 'react-native'
import { fontSizes } from '../../theme/fonts'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Trường này là bắt buộc!'),
    password:Yup.string()
    .min(2,'Quá ngắn!')
    .required('Trường này là bắt buộc!'),
 });


export default function Signup(){
    return(
        <SafeAreaView style={{marginLeft:20,marginRight:20}}>
            <View style={styles.title}>
                <Text style={{fontSize:45,fontWeight:'bold'}}>Audio</Text>
                <Text style={{fontSize:16}}>It's modular and designed to last</Text>
            </View>
            <KeyboardAwareScrollView>
                <Formik
                    initialValues={{ email: '',password:''}}
                    validationSchema={SignupSchema}
                    onSubmit={values => console.log(values)}
                    >
                    {({ handleChange, handleBlur, handleSubmit, values,errors,touched}) => (
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
                            {errors.email&&touched.email?(
                                <Text style={{color:'red'}}>{errors.email}</Text>
                            ):null}
                        </View>
                        <View style={styles.form_input}>
                            <Text>Password</Text>
                            <TextInput
                                placeholder='password'
                                style={styles.text_input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                // secureTextEntry='true'
                            />
                            {errors.password&&touched.password?(
                                <Text style={{color:'red'}}>{errors.password}</Text>
                            ):null}
                        </View>
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
            
        </SafeAreaView>

    )

}
const styles=StyleSheet.create({
    title:{
        marginTop:200,
        height:100,
        alignItems:'center'
    },
    form:{

    },
    form_input:{
        marginBottom:10,
    },
    text_input:{
        paddingLeft:20,
        height:50,
        borderColor:'#95a5a6',
        borderWidth:1,
    }
})