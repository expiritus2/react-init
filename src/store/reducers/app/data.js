import { handleActions } from 'redux-actions';
import { State } from 'settings/constants/state';

import { AppActions } from 'store/actions';

const initialData = {
    state: State.IDLE,
    data: undefined,
    meta: {},
};

export default handleActions({
    [AppActions.getTest]: (state, { payload }) => ({
        ...state,
        state: payload.state,
        data: payload.data,
        meta: payload.meta,
    }),
}, initialData);
