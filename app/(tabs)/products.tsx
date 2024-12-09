import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import storage from '../../storage/index'
import { iProduct } from '@/interfaces'
import Product from '@/assets/images/Product'
import Product2 from '@/assets/images/SmartWatch'
import Product3 from '@/assets/images/AdidasShoe'
import Header from '@/components/header';
import { useRouter } from 'expo-router';


export default function Products() {
    const router = useRouter()

    const container = storage.map((el: iProduct) =>
        <TouchableOpacity key={el.id} onPress={() => router.replace(`/detail/${el.id}`)}>
            <View style={styles.item} >
                <Product width={'100%'} height={112} />
                <Text>{el?.title}</Text>
                <Text>{el?.price}</Text>
            </View>
        </TouchableOpacity>
    )

    return <View style={{ gap: 62, flex: 1 }}>

        <Header />
        <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {container}
        </View>

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