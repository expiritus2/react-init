const REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
    const raw = Object.keys(process.env)
        .filter((key) => REACT_APP.test(key))
        .reduce((env, key) => {
            // eslint-disable-next-line no-param-reassign
            env[key] = process.env[key];
            return env;
        },
        {
            NODE_ENV: process.env.NODE_ENV || 'development',
            PUBLIC_URL: publicUrl,
        });

    const stringified = {
        'process.env': Object.keys(raw).reduce((env, key) => {
            // eslint-disable-next-line no-param-reassign
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };

    return { raw, stringified };
}

module.exports = {
    getClientEnvironment,
};
