import { MoviesRepository } from '../repositories/MoviesRepository';

export class GetPopularMovies {
    constructor(private moviesRepository: MoviesRepository) { }

    async execute() {
        return this.moviesRepository.getPopularMovies();
    }
}
