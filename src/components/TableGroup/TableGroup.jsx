import React, { Component } from 'react'

import Table from '../Table/Table'

import './TableGroup.scss'

class TableGroup extends Component {
  render() {
    const { style, data, address, network } = this.props
    const left = Object.assign(data.left, data.data)
    const right = Object.assign(data.right, data.data)

    return (
      <div className="TableGroup" style={style}>
        <Table data={left} classes={data.classes ? data.classes : ''} address={address} network={network} />
        <Table data={right} classes={data.classes ? data.classes : ''} address={address} network={network} />
      </div>
    )
  }
}

export default TableGroup