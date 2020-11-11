import { handleActions } from 'redux-actions';
import { State } from 'settings/constants/state';

import { getTestAction } from 'store/actions';

const initialData = {
    state: State.IDLE,
    data: undefined,
    meta: {},
};

export default handleActions({
    [getTestAction]: (state, { payload }) => ({
        ...state,
        state: payload.state,
        data: payload.data,
        meta: payload.meta,
    }),
}, initialData);
