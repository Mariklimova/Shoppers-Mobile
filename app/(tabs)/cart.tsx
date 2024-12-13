import Product from '@/assets/images/Product'
import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { iProduct } from '@/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Del from '@/assets/images/delete'
import storage from '../../storage/index'

function Products() {
	const [basket, setBasket] = useState<iProduct[]>([]);

	const loadBasket = async () => {
		const exitingProducts = await AsyncStorage.getItem('prod')
		const parsed = exitingProducts && JSON.parse(exitingProducts) || []
		// setBasket(parsed)
		const result = [];
		for (let i = 0; i < storage.length; i++) {
			for (let a = 0; a < parsed.length; a++) {
				if (storage[i].id == parsed[a].id) {
					result.push(storage[i])
				}
			}

		}
		setBasket(result)
	}

	const removeFromBasket = async (index: number) => {
		const updatedBasket = basket.filter((_, i) => i !== index);
		setBasket(updatedBasket);
		
		// Проверка на циклические ссылки
		try {
			await AsyncStorage.setItem('prod', JSON.stringify(updatedBasket));
		} catch (error) {
			console.error("Ошибка при сохранении в AsyncStorage:", error);
		}
	}

	useEffect(() => {
		loadBasket();
	}, [])

	return (

		<View style={{ flex: 1, alignItems: 'center', gap: 62 }}>
			<Header />

			<ScrollView style={{ width: '100%' }}>

				<View style={{ gap: 40, flexWrap: 'wrap', justifyContent: 'center', width: '90%', marginLeft: '5%' }}>
					{basket.map((el: iProduct, index) => (
						<View key={index} style={styles.item}>
							{/* <Product /> */}
							<View style={{ width: 136, height: 117 }}>
								{el?.img}
							</View>
							<View style={{ gap: 13 }}>
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

				<View style={{ gap: 29, marginVertical: 62, width: '90%', marginLeft: '5%' }}>
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
					<Text style={styles.titleSing}>CHECKOUT</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		marginTop: 40,
		borderRadius: 40,
		backgroundColor: '#F9EF05',
		alignContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 16,
		alignItems: 'center',
		width: '90%',
		marginLeft: '5%',
		marginBottom: 50
	},
	titleSing: {
		fontFamily: 'Inter',
		fontSize: 14,
		fontWeight: 700,
		color: '#000000',
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'center',
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

