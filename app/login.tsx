import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login() {
    const [user,setUser]=useState({
        email:'',
        password:'',
    });

    // const changeUser = ()
    return (
        <>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '90%', alignContent: 'center' }}>
                    <Text style={styles.titleBig}>Welcome Back !</Text>
                    <Text style={styles.titleSmall}>Login with Username & password</Text>
                </View>
                <View style={styles.wrapperInp}>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Username</Text>
                        <TextInput style={styles.inp} secureTextEntry={true}></TextInput>
                    </View>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Password</Text>
                        <TextInput style={styles.inp}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.btn}><Text style={styles.titleSign}>SIGN IN</Text></TouchableOpacity>
                </View>

                <View>
                    <Text>Create a new account?</Text>
                   <Link href={'/'}><Text>Sign Up</Text></Link> 
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    titleBig: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 400,
        color: '#000000'
    },
    titleSmall: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 400,
        color: '#606060'
    },
    wrapperInp: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 3,
        gap: 24,
        padding: 36,
    },
    titleBtn: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#000000'
    },
    inp: {
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 2,
        gap: 10,
        padding: 36,
    },
    btn:{

    },
    titleSign:{

    }
})