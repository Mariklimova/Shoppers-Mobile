import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImgBack from '@/assets/images/ImgBack'
import Header from '@/components/header'

export default function user() {

const router = useRouter()

    return <>
        <View style={{ alignItems: 'center', gap: 86, backgroundColor: 'white', flex: 1 }}>
        <Header />
            <Text style={{ fontFamily: 'InterBold', fontSize: 32, marginTop: 214 }}>Hello SIlva</Text>
          
           <TouchableOpacity style={styles.btn} onPress={() => router.replace('/')}> <Text style={styles.titleSign}>SIGN OUT</Text></TouchableOpacity >
       
           <TouchableOpacity
				style={{ marginLeft: '5%' }}
				onPress={() => router.back()}
			>
				<ImgBack />
			</TouchableOpacity>
       
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