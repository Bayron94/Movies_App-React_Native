import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../../domain/entities/Movie';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type MovieCardNavigationProp = StackNavigationProp<RootStackParamList, 'MovieDetail'>;

export const MovieCard = ({ movie }: { movie: Movie }) => {
    const { navigate } = useNavigation<MovieCardNavigationProp>();
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => navigate('MovieDetail', { movieId: movie.id })}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.posterPath}` }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
                    <Text style={styles.releaseDate}>Fecha de lanzamiento: {movie.releaseDate}</Text>
                    <Text style={styles.rating}>⭐ {movie.voteAverage}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        marginVertical: 10,
        overflow: 'hidden',
        flex: 1,
        margin: 5,
    },
    image: {
        height: 200,
        width: '100%',
    },
    infoContainer: {
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    releaseDate: {
        color: '#aaa',
        fontSize: 12,
        marginTop: 5,
    },
    rating: {
        color: '#E50914',
        fontSize: 14,
        marginTop: 5,
    },
});
