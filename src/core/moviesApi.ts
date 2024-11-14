import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '../data/interfaces/Movie';
import { API_KEY_TMDB } from '@env';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        getMovieDetails: builder.query<IMovie, number>({
            query: (id: number) => ({
                url: `/movie/${id}`,
                params: {
                    api_key: API_KEY_TMDB,
                },
            }),
        }),
    }),
});

export const { useGetMovieDetailsQuery } = moviesApi;
