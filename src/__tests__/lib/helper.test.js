import { randomItems, orderEvents, groupEvents, excludeEvents } from "../../app/lib/helper";
import db from './../../../db';

test("Testing randomItems when pass empty array", () => {
   expect(randomItems([]).length).toBe(0);
});

test("Testing randomItems when number is greater than items length", () => {
    expect(randomItems(db.events, 20).length).toBe(0);
});

test("Testing randomItems when number is lower than items length", () => {
    const list = randomItems(db.events, 4);
    expect(list.length).toBe(4);
    expect(list[0].hasOwnProperty('id')).toBe(true);
});

test("Testing orderEvents when pass empty array", () => {
    expect(orderEvents([]).length).toBe(0);
});

test("Testing orderEvents when pass items array", () => {
    const list = orderEvents(db.events);
    expect(list.length).toBe(8);
    expect(list[0].hasOwnProperty('id')).toBe(true);
    expect(list[0].id).toBe(4);
    expect(list[7].id).toBe(7);
});

test("Testing groupEvents when pass empty array", () => {
    expect(groupEvents([]).length).toBe(0);
});

test("Testing groupEvents when pass items array", () => {
    const list = groupEvents(db.events);
    expect(list.length).toBe(4);
    expect(list[0].length).toBe(2);
    expect(list[1].length).toBe(1);
    expect(list[2].length).toBe(2);
    expect(list[3].length).toBe(3);
});


test("Testing excludeEvents when pass empty array", () => {
    expect(excludeEvents([], [1,2,3]).length).toBe(0);
});

test("Testing excludeEvents when pass items array", () => {
    const exclude = randomItems(db.events, 2);
    const result = excludeEvents(db.events, exclude);
    expect(result.length).toBe(6);
});