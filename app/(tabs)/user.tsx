import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from '@/components/header'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function user() {

    const router = useRouter()
    const params = useLocalSearchParams();
    const [username, setUsername] = useState(params.name || 'user');
   
    const handleSignOut = () => {
        setUsername('user');
        router.replace('/');
    };

    return <>
        <View style={{ alignItems: 'center', gap: 86, backgroundColor: 'white', flex: 1 }}>
            <Header />
            <Text style={{ fontFamily: 'InterBold', fontSize: 32, marginTop: 214 }}>Hello {username}</Text>

            <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
                <Text style={styles.titleSign}>SIGN OUT</Text>
            </TouchableOpacity >

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