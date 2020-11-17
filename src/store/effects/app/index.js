import * as api from 'store/effects/core';
import { getTestPosts } from 'api/app';
import { AppActions } from 'store/actions/app';

export const load = api.execBase(AppActions.getTest, getTestPosts);
