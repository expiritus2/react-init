import cloneDeep from 'clone-deep';

export function getDataFor(fieldName, payload, initialData) {
    return payload[fieldName] || cloneDeep(initialData[fieldName]);
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
