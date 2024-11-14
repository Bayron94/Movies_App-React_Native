import { useGetMovieDetailsQuery } from '../../core/moviesApi';

export const useMovieDetailsViewModel = (movieId: number) => {
    const { data: movie, error, isLoading } = useGetMovieDetailsQuery(movieId);

    return {
        movie,
        error,
        isLoading,
    };
};
