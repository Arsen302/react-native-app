import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

export const Author = ({ author }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Text>JS</Text>
                </View>
                <View>
                    <Text style={styles.userName}>{author.name}</Text>
                    <Text style={styles.userLogin}>{author.email}</Text>
                </View>
                <View>
                    <Text>{author.posts}</Text>
                </View>
                <StatusBar style="auto" />
            </View >
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
