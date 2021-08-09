/** choice: given an array, returns a randomly selected item */
function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}


/** remove: given an array and item
 *      removes and returns first matching item if it exists in array
 *      returns undefined if item not in array
 */
function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            const removed = items[i];
            items.splice(i, 1);
            return removed;
        }
    }

    return undefined;
}

export { choice, remove };