const randomItem = (items) => items[Math.floor(Math.random()*items.length)];
export const randomItems = (items, number) => {
    let result = [];
    if (items.length >= number) {
        do {
            const item = randomItem(items);
            if (!result.some((elem) => elem.id === item.id)) {
                result.push(item);
            }
        } while (result.length < number);
    }

    return result;
};

export const orderEvents = (items) => items.sort((a, b) => new Date(b.date) - new Date(a.date));
export const groupEvents = (items) => items.reduce((groups, item) => {
    const group = (groups[item.categoryId] || []);
    group.push(item);
    groups[item.categoryId] = group;
    return groups;
}, []);
export const excludeEvents = (items, exclude) => items.filter((elem) => !exclude.some((el) => el.id === elem.id));
