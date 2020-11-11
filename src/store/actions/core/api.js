import { State } from 'settings/constants/state';

export function execBase(ACTION, method) {
    return (cfg = {}, options = {}, cb) => (
        execFunc({ cfg, options, ACTION, method, cb })
    );
}

export function execSuccessful(ACTION, method) {
    return (cfg = {}, options = {}, cb) => (
        execFunc({ cfg, options, ACTION, method, pending: false, cb })
    );
}

function execFunc({ cfg, options, ACTION, method, pending = true, cb }) {
    return async (dispatch) => {
        if (pending) {
            setPending({ dispatch, ACTION });
        }

        try {
            const response = await method(cfg, options);
            setData({ dispatch, ACTION, cfg, response });

            if (typeof cb === 'function') {
                cb(response);
            }
        } catch (err) {
            const config = { ...cfg, status: err.statusCode };

            setError({ dispatch, ACTION, cfg: config, response: err });
        }
    };
}

export function setPending({ dispatch, ACTION }) {
    dispatch(ACTION({ state: State.PENDING }));
}

export function setData({ dispatch, ACTION, cfg, response }) {
    dispatch(ACTION({ state: State.READY, data: response.data, meta: cfg, response }));
}

export function setError({ dispatch, ACTION, cfg, response }) {
    dispatch(ACTION({ state: State.ERROR, data: undefined, meta: cfg, response }));
}
