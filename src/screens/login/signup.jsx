import { Formik } from 'formik'
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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

export default function Signup({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={{fontSize:45,fontWeight:'bold'}}>Audio</Text>
                <Text style={{fontSize:16}}>It's modular and designed to last</Text>
            </View>
                <KeyboardAwareScrollView>
                    <Formik
                        initialValues={{ email: '',password:''}}
                        validationSchema={SignupSchema}
                        onSubmit={values=>console.log(values)}
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
                            <View>
                                <Button  onPress={handleSubmit} title="Sign Up" />

                            </View>
                            <View style={styles.icon_action}>
                                    <TouchableOpacity style={styles.icon}>
                                        <Text style={{color:'#27ae60'}}>Apple</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.icon}>
                                        <Text style={{color:'#27ae60'}}>Facebook</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.icon}>
                                        <Text style={{color:'#27ae60'}}>Google</Text>
                                    </TouchableOpacity>
                            </View>
                            <View style={styles.footer}>
                                <Text>
                                    If you have an account?   
                                </Text>
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate('SignIn')}
                                    style={{height:20}}
                                >
                                    <Text style={{color:'#27ae60'}}>Sign In here</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        marginLeft:20,
        marginRight:20,
        flex:1
    },
    title:{
        marginTop:50,
        alignItems:'center',
        flex:1,
        maxHeight:200,
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
    },
    icon_action:{
        flexDirection:'row',
        
        justifyContent:'center'
    },
    icon:{
        // height:50,
        // width:50,
        margin:10,
        // backgroundColor:'#27ae60',
    },  
    footer:{
        
        alignItems:'center',
        marginTop:20
    }
})