// Mock de RTK Query
jest.mock('../src/core/moviesApi', () => ({
    useGetMovieDetailsQuery: jest.fn(),
}));

describe('MovieDetailScreen', () => {
    it('TODO: pending tests', () => {
        expect(true).toBe(true);
    });
});
