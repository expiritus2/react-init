import { createAction } from 'redux-actions';
import * as api from 'store/actions/core/api';
import { getTestPosts } from 'api/app';

export class TestActions {
    static getTest = createAction('GET_TEST_ACTION');
}

export const load = api.execBase(TestActions.getTest, getTestPosts);
