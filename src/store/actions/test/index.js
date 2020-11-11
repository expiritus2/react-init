import { createActions } from 'redux-actions';
import * as api from 'store/actions/core/api';
import { getTestPosts } from 'api/test';

export const {
    getTestAction,
} = createActions(
    'GET_TEST_ACTION',
);

export const load = api.execBase(getTestAction, getTestPosts);
