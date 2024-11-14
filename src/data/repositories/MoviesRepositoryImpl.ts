import 'reflect-metadata';
import { MoviesRepository } from '../../domain/repositories/MoviesRepository';
import { Movie } from '../../domain/entities/Movie';
import { MovieMapper } from '../mappers/MovieMapper';
import { MoviesRemoteDataSource } from '../datasources/MoviesRemoteDataSource';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../core/dependencies/dependencies_container';

@injectable()
export class MoviesRepositoryImpl implements MoviesRepository {
    constructor(
        @inject(TYPES.MoviesRemoteDataSource) private remoteDataSource: MoviesRemoteDataSource
    ) { }

    async getPopularMovies(): Promise<Movie[]> {
        const moviesDTO = await this.remoteDataSource.fetchPopularMovies();
        return moviesDTO.map(MovieMapper.toEntity);
    }
}
