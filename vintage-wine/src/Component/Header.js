import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


export default function Header() {
    <View style={styles.header}>
        <TouchableOpacity>
            <Image
                source={require('../../assets/arrow_back.png')}
                style={styles.arrowBack}
            />
        </TouchableOpacity>
        <Text style={styles.txtHeader}>Categorias</Text>
        <TouchableOpacity>
            <Image
                source={require('../../assets/bag.png')}
                style={styles.bag}
            />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    header: {},
    arrowBack: {},
    txtHeader: {},
    bag:{},
})