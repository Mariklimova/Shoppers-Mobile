import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import storage from '../storage/index'
import { iProduct } from '@/interfaces'
import Product from '@/assets/images/Product'
import Header from '@/components/header';
import ImgBack from '@/assets/images/ImgBack';
import { useRouter } from 'expo-router';


export default function Products() {
    const router = useRouter()
    const container = storage.map((el: iProduct) => <View style={styles.item} key={el.id}>
        <Product />
        <Text>{el?.title}</Text>
        <Text>{el?.price}</Text>
    </View>)

    return <View style={{ gap: 62, backgroundColor: 'white', flex: 1 }}>

        <Header />
        <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {container}
        </View>

        <TouchableOpacity style={{ marginLeft: '10%' }} onPress={() => router.back()}><ImgBack /></TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        height: 169,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    }
})