import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export const Search = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
                <TextInput defaultValue="Search" />
                <StatusBar style="auto" />
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }
});
