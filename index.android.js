	import React, { Component } from 'react';
	import {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View,
	  ScrollView
	} from 'react-native';

	import Pin from './app/components/Pin'

//	var First = require('./app/First');
	//var Second = require('./app/Second');

	export default class Projeto extends Component {
		constructor(props){
			super(props)
			this.state = {
				//columns: 2,

				pin: {
					tucano: {
						imagesource: require('./app/assets/images/tucano.jpg'),
						originalWidth: 1277,
						originalHeight: 912
					},
					guaipeca: {
						imagesource: require('./app/assets/images/guaipeca.jpg'),
						originalWidth: 960,
						originalHeight: 638
					}
				}
			}
		}
	  render() {
	    return (
	      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
			  <View style={styles.PinContainer}>
				  <Pin pinsource={this.state.pin.tucano} columns={this.state.columns}/>
			  </View>
			  {/*<View style={styles.PinContainer}>
				  <Pin pinsource={this.state.pin.guaipeca} columns={this.state.columns}/>
				  <Pin pinsource={this.state.pin.tucano} columns={this.state.columns}/>
			  </View>*/}
		  </ScrollView>
	    );
	  }
	}

	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    // justifyContent: 'center',
	    // alignItems: 'center',
	    backgroundColor: '#F5FCFF'
	},
		contentContainer:{
		flexDirection: 'column'//row se for fazer com colunas
	},
		PinContainer: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'flex-start',
		alignItems: 'flex-start'
	}
	});

	AppRegistry.registerComponent('Projeto', () => Projeto);
