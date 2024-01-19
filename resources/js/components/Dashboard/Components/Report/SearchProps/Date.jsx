import { Button, DatePicker, Input, Row } from "antd";
import React, { useState, useRef } from "react";
import moment from "moment";

export const getColumnDateProps = (dataIndex, searchInput, handleSearch, handleFilterClear) => ({

    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
            style={{
                padding: 8,
            }}
        >
            <DatePicker
                ref={searchInput}
                placeholder={`Search ${dataIndex}`}
                onChange={(e, eString) => setSelectedKeys(e ? eString : undefined)}
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