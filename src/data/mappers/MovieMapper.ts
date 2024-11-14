import { Movie } from '../../domain/entities/Movie.d';
import { IMovie } from '../interfaces/Movie';

export class MovieMapper {
    static toEntity(movie: IMovie): Movie {
        return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            releaseDate: movie.release_date,
            posterPath: movie.poster_path,
            voteAverage: movie.vote_average,
        };
    }
}
