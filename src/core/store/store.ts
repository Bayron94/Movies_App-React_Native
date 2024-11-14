import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../moviesApi';

// Configuramos el store de Redux
const store = configureStore({
    reducer: {
        // Añadimos el reducer de RTK Query para el manejo de la cache
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    // Middleware para habilitar características de RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
});

// Definiciones de tipos de RootState y AppDispatch para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
