	import React, { Component } from 'react';
	import {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View,
	  ScrollView
	} from 'react-native';

	import Pin from './app/components/Pin'

	export default class projetoLayout extends Component {
		constructor(props){
			super(props)
			this.state = {
				columns: 2,

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
				  <Pin pinsource={this.state.pin.guaipeca} columns={this.state.columns}/>
			  </View>
			  <View style={styles.PinContainer}>
				  <Pin pinsource={this.state.pin.guaipeca} columns={this.state.columns}/>
				  <Pin pinsource={this.state.pin.tucano} columns={this.state.columns}/>
			  </View>
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
		flexDirection: 'row'
	},
		PinContainer: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'flex-start',
		alignItems: 'flex-start'
	}
	});

	AppRegistry.registerComponent('projetoLayout', () => projetoLayout);
