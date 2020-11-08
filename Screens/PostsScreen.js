import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Post } from "./Components/Post";
import { Search } from "./Components/Search";

export const PostsScreen = () => {
    const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`

    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        fetch(POSTS_URL)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPosts(res)
            })
            .catch((err) => {
                console.log(err)
                alert('Ohhh..., maybe something went wrong')
            })
    }, [])

    return (
        <View style={styles.container}>
            <Text>James Smith's Posts</Text>
            <Search />
            <Post />
            <Post />
            <Post />
            <Post />
            <StatusBar style="auto" />
        </View >
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
