import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import SearchBar from './SearchBar';
import  haze  from '../assets/backgroundImages/img/haze.jpg';

export default function Weather({ weatherData, fetchWeatherData }) {


    const { weather,
            name,
            main: { temp, humidity, feels_like },
            wind: { speed }
    } = weatherData;

    const [{ main }] = weather;

    // useEffect(() => {
    // }, [weatherData])

   
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground 
                source={haze}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                <SearchBar fetchWeatherData={fetchWeatherData} />

                <View style={{alignItems: 'center' }}>
                    <Text style={{ ...styles.headerText, color: 'white', fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: 'white', fontWeight: 'bold'}}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: 'white',}}>{temp} °C</Text>
                </View>

                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{speed}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: 'white' }}>Feels Like</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{feels_like}</Text>
                    </View>
                    
                   
                
                </View>

                
                
                

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'column',
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10,
        // marginLeft: 30
        alignItems: 'center'
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 10,
        borderRadius: 15,
        marginTop: 5,
        justifyContent: 'center'
    }
});
  