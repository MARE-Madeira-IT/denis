import { Popconfirm } from 'antd'
import React from 'react'

export function handleTableDelete({ handleDelete }) {
    return {
        title: 'Operation',
        dataIndex: 'Operation',
        render: (_, record) =>
            data.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                    <a>Delete</a>
                </Popconfirm>
            ) : null,
    }

}