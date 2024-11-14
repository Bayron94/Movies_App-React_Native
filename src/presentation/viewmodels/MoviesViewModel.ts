import { Movie } from '../../domain/entities/Movie';
import { GetPopularMovies } from '../../domain/usecases/GetPopularMovies';
import { useState, useEffect } from 'react';

export const useMoviesViewModel = (getPopularMovies: GetPopularMovies) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPopularMovies.execute().then((data) => {
            setMovies(data);
            setLoading(false);
        });
    }, [getPopularMovies]);

    return { movies, loading };
};
