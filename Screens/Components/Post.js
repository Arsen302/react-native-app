import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

export const Post = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Post title</Text>
                    <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip!</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
