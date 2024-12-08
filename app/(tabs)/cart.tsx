import Product from '@/assets/images/Product'
import Header from '@/components/header'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import arrBasket from '../../storage/basket'
import { iProduct } from '@/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Del from '@/assets/images/delete'


function Products() {
	const router = useRouter()
	const [basket, setBasket] = useState<iProduct[]>([]);

	const loadBasket = async () => {
		const exitingProducts = await AsyncStorage.getItem('prod')
		const parsed = exitingProducts && JSON.parse(exitingProducts) || []
		setBasket(parsed)
	}

	const removeFromBasket = async (index: number) => {
		const updatedBasket = basket.filter((_, i) => i !== index);
		setBasket(updatedBasket);
		await AsyncStorage.setItem('prod', JSON.stringify(updatedBasket));
	}

	useEffect(() => {
		loadBasket();
	}, [])

	return (
		<View style={{ flex: 1, alignItems: 'center', gap: 62 }}>
			<Header />

			<View style={{ width: '80%', gap: 62 }}>
				<View style={{ gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
					{basket.map((el: iProduct, index) => (
						<View key={index} style={styles.item}>
							<Product />
							<View style={{ gap: 13}}>
								<Text style={styles.text}>{el?.title}</Text>
								<Text style={styles.textSmall}>Qty:{el?.Qty}</Text>
								<Text style={styles.text}>Rs. {el?.price}</Text>
							</View>
							<TouchableOpacity onPress={() => removeFromBasket(index)}>
								<Del />
							</TouchableOpacity>
						</View>
					))}
				</View>

				<View style={{ gap: 29 }}>
					<View style={styles.vector} />
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Text style={styles.textTotal}>Total :</Text>
						<Text style={styles.textSmall}>Qty. {basket.reduce((sum, el: any) => sum + el.Qty, 0)}</Text>
						<Text style={styles.textTotal}>Rs. {basket.reduce((sum, el: any) => sum + el.price, 0)}</Text>
					</View>
				</View>

				<TouchableOpacity style={styles.btn}>
					<Text style={styles.titleSing}>CHECKOUT</Text>{' '}
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		marginTop: 40,
		borderRadius: 40,
		backgroundColor: '#F9EF05',
		alignContent: 'center',
		paddingHorizontal: 100,
		paddingVertical: 16,
		alignItems: 'center',
	},
	titleSing: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 700,
		color: '#000000',
	},
	item: {
		flexDirection: 'row',
		justifyContent:'center',
		gap: 40,
		alignItems: 'center',
		borderRadius: 30,
		shadowColor: '#000',
		shadowOffset: {
			width: 1,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
		elevation: 4,
	},
	text: {
		fontFamily: 'Inter',
		fontSize: 12,
		fontWeight: 600,
		color: 'black',
	},
	textSmall: {
		fontFamily: 'Inter',
		fontSize: 12,
		fontWeight: 600,
		color: '#827D7D',
	},
	vector: {
		width: '100%',
		height: 1,
		borderRadius: 1,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#C6C4C4',
	},
	textTotal: {
		fontFamily: 'Inter',
		fontSize: 16,
		fontWeight: 700,
		color: 'black',
	},
})

export default Products

