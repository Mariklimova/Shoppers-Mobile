import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function user() {
    return <>
        <View style={{ alignItems: 'center', gap: 86, backgroundColor: 'white', flex: 1 }}>
            <Text style={{ fontFamily: 'InterBold', fontSize: 32, marginTop: 214 }}>Hello SIlva</Text>
           <TouchableOpacity style={styles.btn}> <Link href={'/'}><Text style={styles.titleSign}>SIGN OUT</Text></Link></TouchableOpacity >
        </View>

    </>
}

const styles = StyleSheet.create({
    btn: {
        width: '70%',
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        padding: 15,
        alignItems: 'center',
    },
    titleSign: {
        fontFamily: 'InterBold',
        fontSize: 14,
        color: ' #000000',

    },
})