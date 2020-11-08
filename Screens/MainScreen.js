import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList } from 'react-native';
import { Author } from "./Components/Author";
import { Search } from "./Components/Search";
// import { PostsScreen } from "./Screens/PostsScreen";

export const MainScreen = () => {
    const AUTHORS_URL = `https://jsonplaceholder.typicode.com/users`

    const [authors, setAuthors] = React.useState([])

    React.useEffect(() => {
        fetch(AUTHORS_URL)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setAuthors(res)
            })
        // .catch((err) => {
        //     console.log(err)
        //     alert('Ohhh..., maybe something went wrong')
        // })
    }, [])

    return (
        <SafeAreaView >
            <View style={styles.container} >
                <StatusBar style="auto" />
                <Text>Authors</Text>
                <Search />
                {authors.map(author =>
                    <FlatList key={author.id}>
                        <Author author={author} />
                    </FlatList>)}
                {/* Здесь нам нужен переход на другой экран <PostsScreen /> */}
            </View>
        </SafeAreaView>
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
