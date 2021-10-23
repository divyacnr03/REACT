

export const addItems = item => ({
    type: 'ADD_ITEMS',
    text: item.text
});

export const updateItem = id => ({
    type: 'UPDATE_ITEM',
    id
});