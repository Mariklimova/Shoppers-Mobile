import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const router = useRouter();
    const changeUser = (value: string, tag: string) => setUser({ ...user, [tag]: value })

    const goToProductsMenu = () => {
        try {
            if (!user.username || !user.password) throw new Error('пустое значение')
            if (user.password.length < 8) throw new Error('пароль не менее 8 символов')
            // axios

            router.push(`/user?name=${(user.username)}`);

        } catch (err: any) {
            console.error(err.message)
        }
    }
    return (
        <>
            <View style={{ alignItems: 'center', gap: 67, backgroundColor: 'white', flex: 1 }}>
                <View style={{ width: '90%', alignContent: 'center', marginLeft: 40, marginTop: 120 }}>
                    <Text style={{ fontFamily: 'InterRegular', fontSize: 24, color: '#000000' }}>Welcome Back !</Text>
                    <Text style={{ fontFamily: 'InterRegular', fontSize: 12, color: '#606060' }}>Login with Username & password</Text>
                </View>
                <View style={styles.wrapperInp}>

                    <View style={{ gap: 12, width: '100%' }}>
                        <Text style={{ fontFamily: 'InterBold', fontSize: 14, color: '#000000' }}>Username</Text>
                        <TextInput style={styles.inp} onChangeText={(value) => changeUser(value, 'username')}></TextInput>
                    </View>

                    <View style={{ gap: 12, width: '100%' }}>
                        <Text style={{ fontFamily: 'InterBold', fontSize: 14, color: '#000000' }}>Password</Text>
                        <TextInput style={styles.inp} secureTextEntry={true} onChangeText={(value) => changeUser(value, 'password')}></TextInput>
                    </View>
                    
                    <TouchableOpacity style={styles.btn} onPress={goToProductsMenu}><Text style={styles.titleSign}>SIGN IN</Text></TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                    <Text style={[styles.textFooter, { color: '#000000' }]}>Create a new account?</Text>
                    <Link href={'/signup'}><Text style={[styles.textFooter, { color: '#120EDB', textDecorationLine: 'underline' }]}>Sign Up</Text></Link>
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
        paddingHorizontal: 15,
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