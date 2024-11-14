import React from 'react';
import { Text, ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { useMoviesViewModel } from '../viewmodels/MoviesViewModel';
import { GetPopularMovies } from '../../domain/usecases/GetPopularMovies';
import { MoviesRemoteDataSource } from '../../data/datasources/MoviesRemoteDataSource';
import { MoviesRepositoryImpl } from '../../data/repositories/MoviesRepositoryImpl';
import { MovieCard } from '../components/MovieCard';

export const HomeScreen = () => {
    // const getPopularMovies = container.get<GetPopularMovies>(TYPES.GetPopularMovies);
    const moviesRemoteDataSource = new MoviesRemoteDataSource();
    const moviesRepository = new MoviesRepositoryImpl(moviesRemoteDataSource);
    const getPopularMovies = new GetPopularMovies(moviesRepository);
    const { movies, loading, error } = useMoviesViewModel(getPopularMovies);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E50914" />
                <Text style={styles.loadingText}>Cargando películas...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Hubo un problema al cargar las películas</Text>
                <Text style={styles.errorSubText}>Por favor, intenta nuevamente más tarde.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Películas Populares</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    row: {
        justifyContent: 'space-between',
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
        padding: 20,
    },
    errorText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorSubText: {
        color: '#aaa',
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
    },
});
