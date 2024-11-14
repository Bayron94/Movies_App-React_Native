import { Movie } from '../../domain/entities/Movie';
import { GetPopularMovies } from '../../domain/usecases/GetPopularMovies';
import { useState, useEffect } from 'react';

export const useMoviesViewModel = (getPopularMovies: GetPopularMovies) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await getPopularMovies.execute();
                setMovies(response);
            } catch (e) {
                setError('Error al cargar películas');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { movies, loading, error };
};
