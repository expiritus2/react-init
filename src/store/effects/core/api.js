import { PENDING, READY, ERROR } from 'settings/constants/api-state';

export default class Api {
    static execBase(ACTION, method) {
        return (cfg = {}, options = {}, cb) => (
            Api.execFunc({ cfg, options, ACTION, method, cb })
        );
    }

    static execSuccessful(ACTION, method) {
        return (cfg = {}, options = {}, cb) => (
            Api.execFunc({ cfg, options, ACTION, method, pending: false, cb })
        );
    }

    static execFunc({ cfg, options, ACTION, method, pending = true, cb }) {
        return async (dispatch) => {
            if (pending) {
                Api.setPending({ dispatch, ACTION });
            }

            try {
                const response = await method(cfg, options);
                Api.setData({ dispatch, ACTION, cfg, response });

                if (typeof cb === 'function') {
                    cb(response);
                }
            } catch (err) {
                const config = { ...cfg, status: err.response.status, message: err.message };

                Api.setError({ dispatch, ACTION, cfg: config, response: err });
            }
        };
    }

    static setPending({ dispatch, ACTION }) {
        dispatch(ACTION({ state: PENDING }));
    }

    static setData({ dispatch, ACTION, cfg, response }) {
        dispatch(ACTION({ state: READY, data: response.data, meta: cfg }));
    }

    static setError({ dispatch, ACTION, cfg }) {
        dispatch(ACTION({ state: ERROR, data: undefined, meta: cfg }));
    }
}
