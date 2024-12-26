import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  const navigateToDetails = (movie) => {
    navigation.navigate('Details', { movie });

  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for movies"
        style={styles.searchBar}
        onFocus={() => navigation.navigate('Search')}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetails(item.show)}>
            <View style={styles.movieContainer}>
              <Image
                source={{ uri: item.show.image?.medium }}
                style={styles.thumbnail}
              />
              <View>
                <Text style={styles.title}>{item.show.name}</Text>
                <Text style={styles.summary}>
                  {item.show.summary?.replace(/<[^>]*>/g, '')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    color: '#fff',
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
  },
  thumbnail: {
    width: 80,
    height: 120,
    borderRadius: 4,
  },
  title: {
    color: '#ccf',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  summary: {
    color: '#ccc',
    marginLeft: 10,
  },
});

export default HomeScreen;
