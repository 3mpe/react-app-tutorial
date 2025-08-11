const HOTELS_API_URL = 'http://localhost:3000/';

const apiClient = async (endpoint, options={}) => {
    try {
        const response = await fetch(`${HOTELS_API_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }
    catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: (endpoint) => apiClient(endpoint, { method: 'GET' }),
    post: (endpoint, data) => apiClient(endpoint, { method: 'POST', data }),
    put: (endpoint, data) => apiClient(endpoint, { method: 'PUT', data }),
    delete: (endpoint) => apiClient(endpoint, { method: 'DELETE' }),
}