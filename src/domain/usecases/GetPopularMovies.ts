import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import type { MoviesRepository } from '../repositories/MoviesRepository';
import { TYPES } from '../../core/dependencies/dependencies_container';

@injectable()
export class GetPopularMovies {
    constructor(
        @inject(TYPES.MoviesRepository) private moviesRepository: MoviesRepository
    ) { }

    async execute() {
        return this.moviesRepository.getPopularMovies();
    }
}
