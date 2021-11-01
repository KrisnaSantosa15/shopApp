import React from "react";
import { View,Text,StyleSheet,TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const CartItem = props => {
	return (
		<View>
			<View style={styles.cartItem}>
				
				<View style={styles.itemData}>
					<Text style={styles.qty}> {props.quantity} </Text>
					<Text style={styles.mainText}> {props.title} </Text>
				</View>
				<View style={styles.itemData}> 
					<Text styles={styles.mainText}>$ {props.amount.toFixed(2)}</Text>
					{props.deletable && <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
						<Ionicons name={Platform.OS === 'android' ? 'trash' : 'ios-trash'} size={23} color='red' ></Ionicons>
					</TouchableOpacity>}
				</View>
			</View>
		</View>
		
	)
};

const styles = StyleSheet.create({
	cartItem: {
		padding: 10,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20
	},
	itemData: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	qty: {
		fontFamily: 'open-sans',
		color: '#888',
		fontSize: 16
	},
	mainText: {
		fontFamily: 'open-sans-bold',
		fontSize: 16
	},
	deleteButton: {
		marginLeft: 20
	}
});

export default CartItem;