import { get } from './http';

describe('get function', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch data successfully', async () => {
        const mockData = { message: 'Success' };
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        });

        const data = await get('https://api.example.com/data');
        expect(data).toEqual(mockData);
        expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/data');
    });

    it('should throw an error when response is not ok', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 404,
            json: jest.fn(),
        });

        await expect(get('https://api.example.com/data')).rejects.toThrow(
            'Failed to fetch data 404'
        );
    });
});

