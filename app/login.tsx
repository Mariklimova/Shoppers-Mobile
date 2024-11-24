import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const changeUser = (value: string, tag: string) => setUser({ ...user, [tag]: value })
    return (
        <>
            <View style={{ alignItems: 'center', gap: 67, backgroundColor: 'white', flex: 1 }}>
                <View style={{ width: '90%', alignContent: 'center', marginLeft: 40, marginTop: 120 }}>
                    <Text style={styles.titleBig}>Welcome Back !</Text>
                    <Text style={styles.titleSmall}>Login with Username & password</Text>
                </View>
                <View style={styles.wrapperInp}>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Username</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changeUser(value, 'email')}></TextInput>
                    </View>
                    <View style={{ gap: 12 }}>
                        <Text style={styles.titleBtn}>Password</Text>
                        <TextInput style={styles.inp} secureTextEntry={true} onChangeText={(value) => changeUser(value, 'password')}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => console.log(user)}><Text style={styles.titleSign}>SIGN IN</Text></TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center',gap:5, justifyContent:'center'}}>
                    <Text style={[styles.textFooter, { color: '#000000' }]}>Create a new account?</Text>
                    <Link href={'/signup'}><Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline' }]}>Sign Up</Text></Link>
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
        alignItems:'flex-start',
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 3,
        gap: 24,
        paddingHorizontal: 36,
        paddingVertical: 36,
        // padding: 36,
    },
    titleBtn: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#000000'
    },
    inp: {
        width: '100%',
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 2,
        paddingHorizontal: 100,
        paddingVertical: 10,
    },
    btn: {
        width: '100%',
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        padding: 15,
        alignItems: 'center',
    },
    titleSign: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        color: '#D04444',
    },
    textFooter: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 300,
    }
})