import ajax from './http'

const apis = {
    getRandomData: (params) => ajax('get', '/api/echarts/get_random_data', params),
    saveCurrentData: (params) => ajax('post', '/api/echarts/save_data', params),
    getSavedData: (params) => ajax('get', '/api/echarts/get_saved_data', params),
};

export default apis