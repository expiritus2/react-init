export function getDataFor(fieldName, data, initialData) {
    return data[fieldName] || initialData[fieldName];
}
