import { createSelector } from 'reselect';

const selectCategoriesReducer = state => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categorySlice) => categorySlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories => {
        return categories.reduce((acc, docSnapshot) => {
            const { title, items, imageUrl, id } = docSnapshot;
            acc[title.toLowerCase()] = { items, imageUrl, title, id };
            return acc;
        }, {});
    })
);
