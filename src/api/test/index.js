import { apiServer } from 'settings/api-service';

export function getTestPosts(/* cfg */) {
    return apiServer.get('https://jsonplaceholder.typicode.com/posts');
}
