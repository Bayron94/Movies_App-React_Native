import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMovieDetailsViewModel } from '../viewmodels/MovieDetailsViewModel';
import { RootStackParamList } from '../../navigation/types';

type MovieDetailRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetailScreen = () => {
    const route = useRoute<MovieDetailRouteProp>();
    const { movieId } = route.params;
    const { movie, error, isLoading } = useMovieDetailsViewModel(movieId);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E50914" />
                <Text style={styles.loadingText}>Cargando detalles...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>No se pudieron cargar los detalles de la película.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {movie && (
                <>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={styles.poster}
                    />
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.releaseDate}>Fecha de lanzamiento: {movie.release_date}</Text>
                    <Text style={styles.rating}>⭐ {movie.vote_average}</Text>
                    <Text style={styles.overview}>{movie.overview}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    poster: {
        width: '100%',
        height: 400,
        borderRadius: 8,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    releaseDate: {
        color: '#aaa',
        fontSize: 14,
    },
    rating: {
        color: '#E50914',
        fontSize: 18,
        marginVertical: 5,
    },
    overview: {
        color: '#ddd',
        fontSize: 16,
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    loadingText: {
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 10,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    errorText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '80%',
    },
});

export default MovieDetailScreen;
