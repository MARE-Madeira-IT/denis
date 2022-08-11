import { Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import styled from "styled-components";
import List from '../../Common/List';
import { font } from '../../dashboardHelper';
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

const TitleContainer = styled.div`
    font-family: ${font};
    text-align: center;
    margin-bottom: 50px;

    h1 {
        font-weight: 900;
        font-size: 54px;
        margin: 0px auto ;
    }

    h2 {
        font-size: 20px;
        font-weight: 400;
        opacity: .7;
        width: 40%;
        margin: 0px auto ;
    }
`;

function Main() {
    const [activeModal, setActiveModal] = useState(undefined)

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

            <TitleContainer>
                <h1>Marine Debris characterization</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </h2>
            </TitleContainer>

            <List items={items} setActiveModal={setActiveModal} />
        </div>
    )
}

export default Main