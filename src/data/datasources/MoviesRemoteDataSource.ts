import 'reflect-metadata';
import { injectable } from 'inversify';
import apiClient from '../../core/apliClient';
import { IMovie } from '../interfaces/Movie';

@injectable()
export class MoviesRemoteDataSource {
    async fetchPopularMovies(): Promise<IMovie[]> {
        const response = await apiClient.get('/movie/popular');
        return response.data.results;
    }
}
