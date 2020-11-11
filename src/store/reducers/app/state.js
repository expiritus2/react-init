import { handleActions } from 'redux-actions';
import { State } from 'settings/constants/state';

import { getTestAction } from 'store/actions';

const initialData = {
    pending: false,
    data: undefined,
};

export default handleActions({
    [getTestAction]: (state, { payload }) => ({
        ...state,
        pending: payload.state === State.PENDING,
        data: payload.data,
    }),
}, initialData);
