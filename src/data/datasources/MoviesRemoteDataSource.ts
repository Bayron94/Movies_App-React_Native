// src/data/datasources/remote/MoviesRemoteDataSource.ts
import apiClient from '../../core/apliClient';
import { IMovie } from '../interfaces/Movie';

export class MoviesRemoteDataSource {
    async fetchPopularMovies(): Promise<IMovie[]> {
        const response = await apiClient.get('/movie/popular');
        return response.data.results;
    }
}
