import React, { Component } from 'react'

import {
	Image,
	Dimensions
} from 'react-native'

const LocalImage = ({source, originalWidth, originalHeight, columns}) => {
	let windowWidth = Dimensions.get('window').width
	if (columns) {
		windowWidth = (Dimensions.get('window').width)/columns
	} else {
		windowWidth = Dimensions.get('window').width
	}
	/*16 é o tamanho do padding que iremos ignorar, 8 de cada lado*/
	let widthChange = (windowWidth-16)/originalWidth
	let newWidth = originalWidth * widthChange
	let newHeight = originalHeight * widthChange
	return (
		<Image source={source} style={{width: newWidth, height: newHeight}} />
	)
}

export default LocalImage
