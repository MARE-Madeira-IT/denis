import { Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import styled from "styled-components";
import List from '../../Common/List';
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

const TitleContainer = styled.div`
    font-family: ${font};
    text-align: center;
    margin-bottom: 50px;

    h1 {
        font-weight: 900;
        font-size: clamp(28px, 6vw, 54px);
        margin: 0px auto 10px auto;
    }

    h2 {
        font-size: clamp(18px, 2vw, 20px);
        font-weight: 400;
        opacity: .7;
        width: 50%;
        margin: 0px auto ;

        @media (max-width: ${dimensions.lg}) {
            width: 60%;
        }

        @media (max-width: ${dimensions.md}) {
            width: 90%;
        }
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
        <Tour itemName="debrisTour">
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

            <TitleContainer >
                <h1>Marine Debris characterization</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. </h2>
            </TitleContainer>

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