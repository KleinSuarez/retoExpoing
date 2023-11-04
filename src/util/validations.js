export function emptyProperty(obj) {
    const result = () => Object.values(obj).some(value => value === '');
    return result();
}

export function compareStrings(string, string1) {
    const result = () => string === string1;
    return result();
}