import { MoviesRepository } from '../../domain/repositories/MoviesRepository';
import { Movie } from '../../domain/entities/Movie';
import { MovieMapper } from '../mappers/MovieMapper';
import { MoviesRemoteDataSource } from '../datasources/MoviesRemoteDataSource';

export class MoviesRepositoryImpl implements MoviesRepository {
    private remoteDataSource: MoviesRemoteDataSource;

    constructor(remoteDataSource: MoviesRemoteDataSource) {
        this.remoteDataSource = remoteDataSource;
    }

    async getPopularMovies(): Promise<Movie[]> {
        const moviesDTO = await this.remoteDataSource.fetchPopularMovies();
        return moviesDTO.map(MovieMapper.toEntity);
    }
}
