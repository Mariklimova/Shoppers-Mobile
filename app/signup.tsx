import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function signup() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const changeUser = (value: string, tag: string) => setUser({ ...user, [tag]: value })

    return (
        <>
            <View style={{ alignItems: 'center', gap: 67, backgroundColor: 'white', flex: 1 }}>

                <View style={{ justifyContent: 'center', marginLeft: 40, marginTop: 120 }}>
                    <Text style={{ fontFamily: ' InterBold', fontSize: 36, color: '#000000' }}>Welcome!</Text>
                    <Text style={{ fontFamily: ' InterBold', fontSize: 14, color: '#606060' }}>Create a new account</Text>
                </View>

                <View style={styles.wrapperInp}>
                    <View style={{ gap: 12 }}>
                        <Text style={{ fontFamily: 'InterBold',fontSize: 14,color: '#000000'}}>Name</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changeUser(value, 'name')}></TextInput>
                    </View>

                    <View style={{ gap: 12 }}>
                        <Text style={{ fontFamily: 'InterBold',fontSize: 14,color: '#000000'}}>Email</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changeUser(value, 'email')}></TextInput>
                    </View>

                    <View style={{ gap: 12 }}>
                        <Text style={{ fontFamily: 'InterBold',fontSize: 14,color: '#000000'}}>Password</Text>
                        <TextInput style={styles.inp} secureTextEntry={true} onChangeText={(value) => changeUser(value, 'password')}></TextInput>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => console.log(user)}><Link href={'/login'}><Text style={styles.titleSign}>SIGN UP</Text></Link></TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                    <Text style={[styles.textFooter, { color: '#000000' }]}>Already have an account?</Text>
                    <Link href={'/login'}><Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline' }]}>Sign In</Text></Link>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapperInp: {
        width: '90%',
        alignItems: 'flex-start',
        borderRadius: 20,
        borderColor: '#CECECE',
        borderWidth: 3,
        gap: 24,
        paddingHorizontal: 36,
        paddingVertical: 36,
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
        fontFamily: 'InterBold',
        fontSize: 14,
        color: '#D04444',
    },
    textFooter: {
        fontFamily: 'InterLight',
        fontSize: 14,
    }
})