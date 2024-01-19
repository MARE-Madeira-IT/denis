import { Button, Input, Row } from "antd";
import React, { useState, useRef } from "react";

export const getColumnSearchProps = (dataIndex, searchInput, handleSearch, handleFilterClear) => ({

    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
            style={{
                padding: 8,
            }}
        >
            <Input
                ref={searchInput}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys}
                onChange={(e) => setSelectedKeys(e.target.value ? e.target.value : undefined)}
                style={{
                    marginBottom: 8,
                    display: 'block',
                }}
            />
            <Row>
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, dataIndex)}
                    size="small"
                    style={{
                        width: 90,
                    }}
                >
                    Search
                </Button>
                <Button
                    onClick={() => clearFilters && handleFilterClear(setSelectedKeys, dataIndex)}
                    size="small"
                    style={{
                        width: 90,
                    }}
                >
                    Reset
                </Button>

            </Row>
        </div>
    ),
    onFilterDropdownOpenChange: (visible) => {
        if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
        }
    },
});