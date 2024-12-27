import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Share from "@/assets/images/share";
import ImgBack from "@/assets/images/ImgBack";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import storage from '../../storage/index';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Detail() {

    const params: any = useLocalSearchParams()
    const router = useRouter()
    const [product, setProduct] = useState<any>([])

    useEffect(() => {
        const filterStorage = storage.filter(el => el.id == params.id)
        setProduct(filterStorage)
    }, [params.id])

    const addToBasket = async () => {
        try {
            const gettingData: any = await AsyncStorage.getItem('prod')
            const products = JSON.parse(gettingData) || []

            products.push({ ...product[0], img: '' })
            await AsyncStorage.setItem('prod', JSON.stringify(products))
            // console.log('success')
            router.replace('/(tabs)/cart')
        } catch (error: any) {
            console.error(error.message)
        }

    }
    return <>
        <View style={{ flex: 1, marginHorizontal: 30, alignItems: 'center' }}>
            <View >
                <View style={{ height: 392 }}>
                    {product[0]?.img}
                </View>
                <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 52 }}>
                    <TouchableOpacity onPress={() => router.replace('/products')}><ImgBack /></TouchableOpacity>
                    <Share />
                </View>

            </View>
            <View style={{ gap: 14, marginBottom: 38, width: '90%', alignSelf: 'center' }}>
                <Text style={{ fontFamily: 'InterSemiBold', fontSize: 20, }}>{product[0]?.title}</Text>
                <Text style={{ fontFamily: 'InterSemiBold', fontSize: 20, }}>Rs. {product[0]?.price}</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={addToBasket}>
                <Text style={{ fontFamily: 'InterBold', fontSize: 14, color: '#4D1717', }}>Add to Cart</Text>
            </TouchableOpacity>

            <View style={{ gap: 16 }}>
                <Text style={{ fontFamily: 'InterBold', fontSize: 14, }}>More Details</Text>
                <Text style={styles.description} > Gear up with the latest collections from
                    adidas Originals, Running, Football, Training.
                    With over 20,000+ products, you will never
                    run out of choice. Grab your favorites now.
                    Secure Payments. 100% Original Products.
                    Gear up with adidas.
                </Text>
            </View>
        </View >
    </>
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 68,
        marginBottom: 42,
        borderRadius: 40,
        backgroundColor: '#F9EF05',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        alignItems: 'center',
        width: '90%',
    },
    description: {
        fontFamily: 'InterLight',
        fontSize: 14,
        color: '#AAA8A8',
        paddingHorizontal: 12,
    }
})