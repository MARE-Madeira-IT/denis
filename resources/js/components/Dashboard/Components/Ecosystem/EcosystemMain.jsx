import { Col, Modal } from 'antd'
import React, { useState } from 'react'
import styled from "styled-components";
import List from '../../Common/List';
import { dimensions, font } from '../../dashboardHelper';
import Tour from '../../Hooks/Tour';
import TaxaAbundance from './Abundance/TaxaAbundance';
import TaxaLevel from './Level/TaxaLevel';
import TaxaMaturity from './Maturity/TaxaMaturity';
import TaxaNativeRegion from './NativeRegion/TaxaNativeRegion';
import TaxaPopulationStatus from './PopulationStatus/TaxaPopulationStatus';
import TaxaSpeciesStatus from './SpeciesStatus/TaxaSpeciesStatus';
import TaxaViability from './Viability/TaxaViability';

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

function EcosystemMain() {
    const [activeModal, setActiveModal] = useState(undefined)

    const items = [
        { title: "Taxonomic levels", description: "Master list of taxonomic levels form which user's fill based on their knowledge", image: "taxa_levels", component: <TaxaLevel /> },
        { title: "Maturity classes", description: "Characterization of species based on their lifespan", image: "taxa_maturity", component: <TaxaMaturity /> },
        { title: "Species status", description: "List of status regarding the species' estimation", image: "taxa_species_status", component: <TaxaSpeciesStatus /> },
        { title: "Populations status", description: "List of status regarding the species' population estimation", image: "taxa_population", component: <TaxaPopulationStatus /> },
        { title: "Native regions", description: "Origin regions of species considered to be invading", image: "taxa_native_region", component: <TaxaNativeRegion /> },
        { title: "Viability classes", description: "Current viability status of the species", image: "taxa_viability", component: <TaxaViability /> },
        { title: "Abundance categories", description: "Categories of species abundance ranges to characterize a report", image: "taxa_abundance", component: <TaxaAbundance /> },
    ];

    const handleCancel = () => {
        setActiveModal(undefined);
    };

    return (
        <Tour itemName="ecosystemTour">
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

            <TitleContainer>
                <h1>Ecosystems characterization</h1>
                <h2>Each entry below represents a table which is required to characterize an ecosystem.</h2>
            </TitleContainer>

            <div data-intro="Click on any of the following sections to visualize existing data."
                data-title="Ecosystems characterization"
                data-step='1'>
                <List items={items} setActiveModal={setActiveModal} />
            </div>

        </Tour>
    )
}

export default EcosystemMain