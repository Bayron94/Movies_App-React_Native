# Movies App

Esta es una aplicación de React Native que muestra una lista de películas populares y permite ver los detalles de cada una. La aplicación utiliza el patrón **MVVM** para organizar la lógica de negocio en `HomeScreen` y **RTK Query** para realizar consultas de datos en el detalle de las películas.

## Estructura de la Aplicación

- **HomeScreen**: Muestra una lista de películas populares. Implementa el patrón **MVVM** para organizar la lógica y separar las responsabilidades de la interfaz y la obtención de datos.
- **DetailScreen**: Muestra los detalles de una película seleccionada. Usa **RTK Query** para manejar las consultas de la API de manera eficiente, simplificando el manejo de estados de carga y errores.

## Tecnologías Utilizadas

- **React Native**: Framework para construir aplicaciones móviles nativas.
- **TypeScript**: Lenguaje que permite tipado estático para un código más seguro y claro.
- **RTK Query**: Herramienta de `Redux Toolkit` que facilita las consultas a la API y el manejo de cache.
- **Axios**: Cliente HTTP utilizado para obtener datos de la API en `HomeScreen`.
- **React Navigation**: Biblioteca para manejar la navegación entre pantallas.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Bayron94/Movies_App-React_Native.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd movies-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura el archivo `.env` con tu API Key de TMDb:
   ```plaintext
   API_KEY_TMDB=tu_api_key_aqui
   ```

5. Inicia la aplicación en un emulador o dispositivo físico:
   ```bash
   npx react-native run-android # Para Android
   npx react-native run-ios     # Para iOS
   ```

## Estructura del Proyecto

La estructura del proyecto sigue el patrón MVVM y está organizada de la siguiente manera:

```plaintext
src
├── core
│   └── dependencies
│   │   └── dependencies_container.ts # Configuración de contenedores de dependencias (Inversify o similar)
│   └── moviesApi.ts                  # Configuración de RTK Query para obtener detalles de películas
├── data
│   ├── datasource
│   │   └── MoviesRemoteDataSource.ts # DataSource para obtener películas populares con Axios
│   ├── interfaces
│   │   └── MoviesRepository.ts      # Interfaz del repositorio de películas
│   ├── mappers
│   │   └── MovieMapper.ts           # Mapeo de datos de API a entidad Movie
│   └── repositories
│       └── MoviesRepositoryImpl.ts  # Implementación del repositorio de películas
├── domain
│   ├── entities
│   │   └── Movie.ts                 # Entidad Movie
│   └── repositories
│       └── MoviesRepository.ts      # Interfaz del repositorio de películas
│   └── usecases
│       └── GetPopularMovies.ts      # UseCase para obtener películas populares
├── presentation
│   ├── screens
│   │   ├── HomeScreen.tsx           # Pantalla principal con lista de películas
│   │   └── MovieDetailScreen.tsx    # Pantalla de detalle de la película
│   └── viewmodels
│       ├── HomeViewModel.ts         # ViewModel de HomeScreen con MVVM
│       └── MovieDetailsViewModel.ts # ViewModel para obtener detalles de película usando RTK Query
└── navigation
    └── AppNavigator.tsx             # Configuración de la navegación de la aplicación
```

## Funcionalidades

### HomeScreen (Lista de Películas)

- **Patrón MVVM**: La lógica de negocio se separa de la interfaz en `HomeScreen`.
  - **ViewModel (`HomeViewModel`)**: Administra la lógica de obtención de datos de la API usando `MoviesRemoteDataSource`.
  - **Data Source (`MoviesRemoteDataSource`)**: Utiliza Axios para obtener las películas populares desde la API de TMDb.
  - **MovieMapper**: Mapea los datos obtenidos en el formato necesario para la aplicación.

- **Pantalla de Lista de Películas**:
  - Muestra una lista de películas populares con sus imágenes y títulos.
  - Incluye un estado de carga (`loading`) mientras los datos se están obteniendo.
  - Muestra un mensaje de error en caso de que la obtención de datos falle.

### DetailScreen (Detalle de Película)

- **RTK Query**: Utiliza `RTK Query` para gestionar la consulta de datos de una película específica.
  - El detalle de cada película incluye la imagen, el título, la fecha de lanzamiento, el promedio de votación y una descripción.

- **Ventajas de RTK Query**:
  - **Manejo Automático de Estado**: `RTK Query` se encarga de gestionar el estado de carga y error, simplificando la lógica en el componente.
  - **Cache de Resultados**: Los resultados de las consultas se almacenan en caché automáticamente, mejorando el rendimiento de la aplicación.

## Ejecución de Pruebas

La aplicación incluye pruebas unitarias para `HomeScreen` y `MovieDetailScreen` usando Jest y Testing Library. Estas pruebas verifican el renderizado correcto, el manejo de estados de carga y errores, y la navegación entre pantallas.

1. Para ejecutar las pruebas, usa el siguiente comando:
   ```bash
   npm test
   ```

2. Las pruebas cubren:
   - Renderizado de componentes.
   - Manejo de estados de carga y error.
   - Navegación de `HomeScreen` a `MovieDetailScreen`.

## Posibles Mejoras

- **Almacenamiento en caché de películas populares** para mejorar el rendimiento.
- **Pruebas adicionales** para casos más complejos de errores y manejo de navegación.
- **Incorporación de Local Storage** para guardar configuraciones de usuario o historial de vistas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar esta aplicación, siéntete libre de enviar un pull request o abrir un issue para discutir mejoras o reportar errores.


