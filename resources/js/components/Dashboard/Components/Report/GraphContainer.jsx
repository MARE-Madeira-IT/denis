import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'
import React from 'react'
import { connect } from 'react-redux'

export const GraphContainer = ({ data, loading }) => {
    return (
        <LineChart xtitle="Date per month" ytitle="Number of reports" style={{ height: "100%" }} data={data} />
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.report.loadingGraph,
        data: state.report.dataGraph,
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer)