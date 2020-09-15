import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import stydyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import HeartIcon from '../../assets/images/icons/heart.png'

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={stydyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </TouchableOpacity>                
            </View>

            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={HeartIcon} />
            </Text>
        </View>
    )
}

export default Landing