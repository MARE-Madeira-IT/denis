import { Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import styled from "styled-components";
import List from '../../Common/List';
import PageHeader from '../../Common/PageHeader';
import { dimensions, font } from '../../dashboardHelper';
import Tour from '../../Hooks/Tour';
import DebrisCategory from './Category/DebrisCategory';
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
    const [activeModal, setActiveModal] = useState(undefined)

    const items = [
        { title: "Categories", description: "Master list of categories of debris items by materials", image: "debris_categories", component: <DebrisCategory /> },
        { title: "Sub Categories", description: "Listing of items which belong to the categories of debris items", image: "debris_subcategories", component: <DebrisSubCategory /> },
        { title: "Materials", description: "Debris Materials generalized to create a report", image: "debris_materials", component: <DebrisMaterial /> },
        { title: "Size classes", description: "Categories of items size ranges to characterize items", image: "debris_sizes", component: <DebrisSize /> },
        { title: "Habitats", description: "Aquatic-based habitats in which the debris was found", image: "debris_habitats", component: <DebrisHabitat /> },
        { title: "Stiffness classes", description: "Flexibility of the material found", image: "debris_thickness", component: <DebrisThickness /> },
        { title: "Rugosity classes", description: "Description on the surface of the debris", image: "debris_rugosity", component: <DebrisRugosity /> },
        { title: "Type", description: "Location in which the debris was found", image: "debris_type", component: <DebrisType /> }
    ];

    const handleCancel = () => {
        setActiveModal(undefined);
    };

    return (
        <Tour itemName="debrisTour">
            <PageHeader title="Marine Debris characterization" subtitle="Each entry below represents a table which is required to characterize marine debris." />

            <TableContainer
                width={1200}
                footer={null}
                closable={false}
                title={null}
                visible={activeModal != undefined}
                onCancel={handleCancel}
                centered
            >
                {activeModal != undefined && items[activeModal].component}
            </TableContainer>




            <div data-intro="Click on any of the following sections to visualize existing data."
                data-title="Marine Debris characterization"
                data-step='1'>
                <List

                    items={items}
                    setActiveModal={setActiveModal} />
            </div>

        </Tour>
    )
}

export default Main