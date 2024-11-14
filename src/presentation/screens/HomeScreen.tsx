import React from 'react';
import {  Text, ActivityIndicator, FlatList } from 'react-native';
import { useMoviesViewModel } from '../viewmodels/MoviesViewModel';
import { GetPopularMovies } from '../../domain/usecases/GetPopularMovies';
import { MoviesRepositoryImpl } from '../../data/repositories/MoviesRepositoryImpl';
import { MoviesRemoteDataSource } from '../../data/datasources/MoviesRemoteDataSource';

export const HomeScreen = () => {
  const moviesRemoteDataSource = new MoviesRemoteDataSource();
  const moviesRepository = new MoviesRepositoryImpl(moviesRemoteDataSource);
  const getPopularMovies = new GetPopularMovies(moviesRepository);

  const { movies, loading } = useMoviesViewModel(getPopularMovies);

    if (loading) {
        return <ActivityIndicator />;
    }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
