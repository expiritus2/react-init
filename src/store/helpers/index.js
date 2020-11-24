export function getDataFor(fieldName, data, initialData) {
    return data[fieldName] || initialData[fieldName];
}

export function getPromiseAllSettledProp(data, propName = 'data') {
    return (data.value && data.value[propName]) || null;
}

export function getPromiseAllSettledReason(data) {
    if ('reason' in data) {
        return { status: data.reason.response.status, message: data.reason.message };
    }

    return { status: getPromiseAllSettledProp(data, 'status') };
}
