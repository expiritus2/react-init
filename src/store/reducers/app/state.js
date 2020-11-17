import { handleActions } from 'redux-actions';
import { State } from 'settings/constants/state';

import { AppActions } from 'store/actions';

const initialData = {
    pending: false,
    data: undefined,
};

export default handleActions({
    [AppActions.getTest]: (state, { payload }) => ({
        ...state,
        pending: payload.state === State.PENDING,
        data: payload.data,
    }),
}, initialData);
