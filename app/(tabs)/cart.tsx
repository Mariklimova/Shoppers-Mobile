import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { iProduct } from '@/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Del from '@/assets/images/delete'
import storage from '../../storage/index'

export default function Products() {
	const [basket, setBasket] = useState<iProduct[]>([]);

	const loadBasket = async () => {
		const exitingProducts = await AsyncStorage.getItem('prod')
		const parsed = exitingProducts && JSON.parse(exitingProducts) || []

		const result: iProduct[] = [];

		parsed.forEach((parsedItem: iProduct) => {
			const existingProduct = result.find((item) => item.id === parsedItem.id);
			if (existingProduct) {
				existingProduct.Qty += parsedItem.Qty;
			} else {
				const productToAdd = storage.find(item => item.id === parsedItem.id);
				if (productToAdd) {
					result.push({ ...productToAdd, Qty: parsedItem.Qty });
				}
			}
		});

		setBasket(result);
	}

	const updateQuantity = (change: number, productId: number) => {
		const updatedBasket = basket.map(item => {
			if (item.id === productId) {
				const newQty = item.Qty + change;
				return { ...item, Qty: newQty < 0 ? 0 : newQty }; // Не допускаем отрицательное количество
			}
			return item;
		});
		setBasket(updatedBasket);
	}

	const removeFromBasket = async (index: number) => {
		const updatedBasket = basket.filter((_, i) => i !== index);
		setBasket(updatedBasket);

		// Сохраняем только необходимые поля, чтобы избежать циклических ссылок
		const simplifiedBasket = updatedBasket.map(({ id, Qty, title, price }) => ({ id, Qty, title, price }));

		// Проверка на циклические ссылки
		try {
			await AsyncStorage.setItem('prod', JSON.stringify(simplifiedBasket));
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
							<View style={{ width: 136, height: 113, borderRadius: 25, overflow: 'hidden' }}>
								{el?.img}
							</View>
							<View style={{ gap: 13 }}>
								<Text style={styles.text}>{el?.title}</Text>

								<View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
									<TouchableOpacity style={styles.btnSmall} onPress={() => updateQuantity(-1, el.id)}><Text>-</Text></TouchableOpacity>
									<Text style={styles.textSmall}>Qty:{el?.Qty}</Text>
									<TouchableOpacity style={styles.btnSmall} onPress={() => updateQuantity(1, el.id)}><Text>+</Text></TouchableOpacity>
								</View>

								<Text style={styles.text}>Rs. {el?.price}</Text>
							</View>
							<TouchableOpacity style={{ marginRight: 15 }} onPress={() => removeFromBasket(index)}>
								<Del />
							</TouchableOpacity>
						</View>
					))}
				</View>

				<View style={{ gap: 29, marginVertical: 62, width: '90%', marginLeft: '5%' }}>
					<View style={styles.vector} />
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.textTotal}>Total :</Text>
						<Text style={styles.textSmall}>Qty. {basket.reduce((sum, el: any) => sum + el.Qty, 0)}</Text>
						<Text style={styles.textTotal}>Rs. {basket.reduce((sum, el: any) => sum + el.price * el.Qty, 0)}</Text>
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
		fontFamily: 'InterBold',
		fontSize: 14,
		color: '#000000',
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		fontFamily: 'InterSemiBold',
		fontSize: 12,
		color: 'black',
	},
	textSmall: {
		fontFamily: 'InterSemiBold',
		fontSize: 12,
		color: '#827D7D',
	},
	btnSmall: {
		width: 20,
		height: 20,
		borderRadius: 5,
		backgroundColor: '#827d7d9e',
		alignItems: 'center'
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
		fontFamily: 'InterBold',
		fontSize: 16,
		color: 'black',
	},
})

