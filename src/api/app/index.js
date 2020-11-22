import { apiServer } from 'settings/api';

export function getTestPosts(/* cfg */) {
    return apiServer.get('/posts');
}
