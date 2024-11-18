const key = '@tangoApp';

export const storeItem = (type, item) => localStorage.setItem(`${key}_${type}`, item);
export const getItem = (type) => localStorage.getItem(`${key}_${type}`);
export const destroyItem = (type) => localStorage.removeItem(`${key}_${type}`);
