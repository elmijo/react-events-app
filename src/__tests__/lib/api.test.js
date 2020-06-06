import api from "../../app/lib/api";
import db from './../../../db';
import http from "http";

let server;

beforeAll(async () => {
    const {events, categories } = db;
    server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'application/json', 'access-control-allow-origin': '*' });

        res.end(JSON.stringify(req.url === '/events' ? events : categories));
    }).listen(8000);
});

afterAll(() => {
    server.close();
    server = null;
});

describe("Test API services", () => {
    test("Get events", async () => {
        const events = await api.event.list();
        expect(events.length).toBe(8);
        expect(events[0].id).toBe(0);
        expect(events[0].label).toBe('SCRUM Alliance Catch-up');
    });

    test("Get categories", async () => {
        const categories = await api.category.list();
        expect(categories.length).toBe(4);
        expect(categories[0].id).toBe(0);
        expect(categories[0].label).toBe('Work');
    });
});