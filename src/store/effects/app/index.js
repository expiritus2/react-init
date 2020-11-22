import Api from 'store/effects/core/api';
import { getTestPosts } from 'api/app';
import { getTest } from 'store/actions/app';

export const load = Api.execBase(getTest, getTestPosts);
