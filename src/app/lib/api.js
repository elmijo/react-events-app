import axios from 'axios';

const client = axios.create({
    baseURL: process.env.API_BASE_URI,
    timeout: 60000,
    headers: { Accept: 'application/json' }
});

const event = {
    list: () => client.get(`/events`).then((res) => res.data),
    create: (data) => client.post('/events', data)
};

const category = {
    list: () => client.get(`/categories`).then((res) => res.data),
};

export default { event, category };