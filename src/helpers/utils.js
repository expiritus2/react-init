export function isSuccessfulResponse(meta) {
    return meta && meta.status >= 200 && meta.status < 300;
}
