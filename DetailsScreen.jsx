import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Image
        source={{ uri: movie.image?.original }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.genre}>
        Genres: {movie.genres?.join(', ') || 'N/A'}
      </Text>
      <Text style={styles.language}>Language: {movie.language}</Text>
      <Text style={styles.summary}>
        {movie.summary?.replace(/<[^>]*>/g, '') || 'No summary available.'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, // Ensures the ScrollView content stretches vertically
    backgroundColor: '#121212',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genre: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 5,
  },
  language: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
  },
  summary: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
});

export default DetailsScreen;
