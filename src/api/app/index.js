import { apiServer } from 'settings/api';
import { getPromiseAllSettledProp, getPromiseAllSettledReason } from 'store/helpers';

export function getTestData(cfg) {
    const postsReq = getPosts(cfg);
    const commentsReq = getComments(cfg);

    return new Promise((resolve, reject) => {
        Promise
            .allSettled([postsReq, commentsReq])
            .then(([posts, comments]) => {
                const data = {
                    posts: getPromiseAllSettledProp(posts), comments: getPromiseAllSettledProp(comments),
                };
                const meta = {
                    posts: getPromiseAllSettledReason(posts), comments: getPromiseAllSettledReason(comments),
                };

                resolve({ data, meta });
            })
            .catch((err) => reject(err));
    });
}

export function getPosts(cfg) {
    return apiServer.get('/posts', cfg);
}

export function getComments(cfg) {
    return apiServer.get('/comments', cfg);
}
