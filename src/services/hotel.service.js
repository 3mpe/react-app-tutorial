import apiService from "./api.service";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHotels: () => apiService.get('hotels.json'),
}
