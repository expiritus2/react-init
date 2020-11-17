import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { load } from 'store/effects/app';

const Main = (props) => {
    const onClick = () => {
        const { loadInner } = props;
        loadInner({});
    };

    return (
        <div>
            Main Page
            <button type="button" onClick={onClick}>Click me</button>
        </div>
    );
};

Main.propTypes = {
    loadInner: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        loadInner: load,
    },
)(Main);
