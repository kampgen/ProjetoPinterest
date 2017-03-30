	import React, { Component } from 'react'

	import {
		  StyleSheet,
		  View,
		  Text,
		  Image,
		  Dimensions
	} from 'react-native'

	import UtilityNavButton from './UtilityNavButton'
	import Button from './Button'
	import LocalImage from './LocalImage'

	let windowWidth = Dimensions.get('window').width

	export default class Pin extends Component {
	  render() {
	    return (
	        <View style={[styles.PinContainer, {width: windowWidth/this.props.columns}]}>

				{/*Header*/}
				<View style={styles.PinHeader}>
					{/*Menu de incones*/}
					<View style={styles.UtilityNav}>
						<UtilityNavButton icon="Back"/>
						<UtilityNavButton icon="Heart"/>
						<UtilityNavButton icon="Share"/>
						<UtilityNavButton icon="More"/>
					</View>
					{/*Botão Salvar*/}
					<View style={styles.PinButtonContainer}>
						<Button red icon textColor="white" text="Save"/>
					</View>
				</View>

				<View style={styles.PinContent}>
					<LocalImage
						source={this.props.pinsource.imagesource}
						originalWidth={this.props.pinsource.originalWidth}
						originalHeight={this.props.pinsource.originalHeight}
						columns={this.props.columns}
					/>
				</View>

				<View style={styles.PinMeta}>
					<View style={styles.PinMetaTextContainer}>
						<Text style={styles.PinMetaText}>Saved from</Text>
						<Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
					</View>
					<View style={styles.PinButtonContainer}>
						<Button textColor ="black" text="Visit"/>
					</View>
				</View>

				<View style={styles.PinUser}>
					<View style={styles.PinUserAvatar}>

					</View>

					<View style={styles.PinUserContainer}>
						<Text style={styles.PinUserText}>
							<Text style={styles.TextBold}>User Name </Text>
							saved to <Text style={styles.TextBold}>Space</Text>
						</Text>
						<Text style={styles.PinUserText}>Descrição Lorem Ipsum</Text>
					</View>
				</View>
	        </View>
	    )
	  }
	}

	const styles = StyleSheet.create({
		PinContainer: {
			//flex: 1,
			//alignSelf: 'stretch'
		},
		PinHeader: {
			backgroundColor: 'white',
			flexDirection: 'row',
			alignItems: 'flex-end',
			justifyContent: 'space-between',
			flex: 1,
			minHeight: 50, //minWidth, MaxWidth, maxHeight
			padding: 8
		},
		UtilityNav: {
			flexDirection: 'row',
			flex: 1,
			justifyContent: 'space-between'
		},
		PinButton: {
			flexDirection: 'row',
			backgroundColor: 'red',
			padding: 8,
			borderRadius: 6,
			justifyContent: 'space-between',
			width: 60
		},
		PinButtonText: {
			color: 'white',
		},
		PinButtonContainer: {
			flex: 1,
			alignItems: 'flex-end'
		},
		PinContent: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 8,
		borderRadius: 8
		},
		ImagePlaceholder: {
			backgroundColor: '#1e1e1e',
			flex: 1,
			alignSelf: 'stretch',
			borderRadius: 6,
		},
		PinMeta: {
			flex: 1,
			minHeight: 70,
			flexDirection: 'row',
			paddingHorizontal: 8,
			paddingTop: 16,
			paddingBottom: 8
		},
		PinMetaTextContainer: {

		},
		UtilityButton: {
			backgroundColor: '#cecece',
			alignItems: 'center',
			justifyContent: 'center'
		},
		UtilityButtonText: {
			color: 'black',
			fontWeight: 'bold'
		},
		PinUserContainer: {
		},
		PinUser: {
			flex: 5,
			flexDirection: 'row',
			paddingHorizontal: 8
		},
		PinUserAvatar: {
			width: 50,
			height: 50,
			borderRadius: 25,
			marginRight: 8,
			backgroundColor: 'black'
		},
		TextBold: {
			fontWeight: 'bold'
		},
	})
