import { Drawer } from 'antd'
import React from 'react'
import { connect } from "react-redux";
import { setDrawerState } from "../../../redux/drawer/actions";

function DataDrawer({ children, state, setDrawerState }) {
    return (
        <div>
            <Drawer closable={false} width={"60%"} visible={state} onClose={() => setDrawerState(0)}>
                {children}
            </Drawer>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDrawerState: (state) => dispatch(setDrawerState(state)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.drawer.loading,
        current: state.drawer.current,
        state: state.drawer.state,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataDrawer);