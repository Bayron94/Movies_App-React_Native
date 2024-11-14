import 'reflect-metadata';
import { Container } from 'inversify';
import { MoviesRepository } from '../../domain/repositories/MoviesRepository';
import { MoviesRepositoryImpl } from '../../data/repositories/MoviesRepositoryImpl';
import { MoviesRemoteDataSource } from '../../data/datasources/MoviesRemoteDataSource';
import { GetPopularMovies } from '../../domain/usecases/GetPopularMovies';

// Identificadores de las dependencias
const TYPES = {
    MoviesRepository: Symbol.for('MoviesRepository'),
    MoviesRemoteDataSource: Symbol.for('MoviesRemoteDataSource'),
    GetPopularMovies: Symbol.for('GetPopularMovies'),
};

const container = new Container();

// Vinculamos las clases a sus interfaces para inyección
container.bind<MoviesRepository>(TYPES.MoviesRepository).to(MoviesRepositoryImpl);
container.bind<MoviesRemoteDataSource>(TYPES.MoviesRemoteDataSource).to(MoviesRemoteDataSource);
container.bind<GetPopularMovies>(TYPES.GetPopularMovies).to(GetPopularMovies);

export { container, TYPES };
