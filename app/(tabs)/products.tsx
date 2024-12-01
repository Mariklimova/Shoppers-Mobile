import { StyleSheet, Text, View } from 'react-native'
import storage from '../storage/index'
import { iProduct } from '@/interfaces'
import Product from '@/assets/images/Product'

export default function Products() {

    const container = storage.map((el: iProduct) => <View style = {styles.item} key={el.id}>
        <Product/>
        <Text>{el?.title}</Text>
        <Text>{el?.price}</Text>
    </View>)

    return <>
        <View style={{ flexDirection: 'row', gap: 20, justifyContent:'center', flexWrap: 'wrap' }}>
            {container}
        </View>
    </>
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        height:169,
        borderRadius:30,
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