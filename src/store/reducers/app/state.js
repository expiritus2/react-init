import { handleActions } from 'redux-actions';
import { PENDING } from 'settings/constants/api-state';

import { getTest } from 'store/actions/app';

const initialData = {
    pending: false,
    data: null,
};

export default handleActions({
    [getTest]: (state, { payload }) => ({
        ...state,
        pending: payload.state === PENDING,
        data: payload.data,
    }),
}, initialData);
