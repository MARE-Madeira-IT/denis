import { Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import styled from "styled-components";
import DebrisCategory from './Category/DebrisCategory';
import DebrisList from './DebrisList';
import DebrisHabitat from './Habitat/DebrisHabitat'
import DebrisMaterial from './Material/DebrisMaterial'
import DebrisRugosity from './Rugosity/DebrisRugosity'
import DebrisSize from './Size/DebrisSize'
import DebrisSubCategory from './SubCategory/DebrisSubCategory';
import DebrisThickness from './Thickness/DebrisThickness'
import DebrisType from './Type/DebrisType'

const TableContainer = styled(Modal)`
    .ant-modal-body {
        padding: 0px;
    }

    .ant-modal-content {
        background-color: transparent !important;
    }
`;

function Main() {
    const [activeModal, setActiveModal] = useState(0)

    const items = [
        { title: "Categories", description: "Master list of categories of debris items by materials", image: "debris_categories", component: <DebrisCategory /> },
        { title: "Sub Categories", description: "Master list of categories of debris items by materials", image: "debris_subcategories", component: <DebrisSubCategory /> },
        { title: "Materials", description: "Master list of categories of debris items by materials", image: "debris_materials", component: <DebrisMaterial /> },
        { title: "Size classes", description: "Master list of categories of debris items by materials", image: "debris_sizes", component: <DebrisSize /> },
        { title: "Habitats", description: "Master list of categories of debris items by materials", image: "debris_habitats", component: <DebrisHabitat /> },
        { title: "Thickness classes", description: "Master list of categories of debris items by materials", image: "debris_thickness", component: <DebrisThickness /> },
        { title: "Rugosity classes", description: "Master list of categories of debris items by materials", image: "debris_rugosity", component: <DebrisRugosity /> },
        { title: "Type", description: "Master list of categories of debris items by materials", image: "debris_type", component: <DebrisType /> }
    ];

    const handleCancel = () => {
        setActiveModal(undefined);
    };

    return (
        <div>
            <TableContainer
                width={960}
                footer={null}
                closable={false}
                title={null}
                visible={activeModal != undefined}
                onCancel={handleCancel}
                centered
            >
                {activeModal != undefined && items[activeModal].component}
            </TableContainer>

            <DebrisList items={items} setActiveModal={setActiveModal} />
        </div>
    )
}

export default Main