import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Form, Row, Col, Input, Divider } from 'antd'
import TaxaLevelRemoteSelectContainer from '../../Ecosystem/Level/TaxaLevelRemoteSelectContainer';
import TaxaSpeciesStatusRemoteSelectContainer from '../../Ecosystem/SpeciesStatus/TaxaSpeciesStatusRemoteSelectContainer';
import TaxaPopulationStatusRemoteSelectContainer from '../../Ecosystem/PopulationStatus/TaxaPopulationStatusRemoteSelectContainer';
import TaxaAbundanceRemoteSelectContainer from '../../Ecosystem/Abundance/TaxaAbundanceRemoteSelectContainer';
import TaxaViabilityRemoteSelectContainer from '../../Ecosystem/Viability/TaxaViabilityRemoteSelectContainer';
import TaxaMaturityRemoteSelectContainer from '../../Ecosystem/Maturity/TaxaMaturityRemoteSelectContainer';
import TaxaNativeRegionRemoteSelectContainer from '../../Ecosystem/NativeRegion/TaxaNativeRegionRemoteSelectContainer';
import debounce from 'lodash/debounce';
import CustomTooltip from './CustomTooltip';

const requiredRule = { required: true };

const Delete = styled.img`
    cursor: pointer;
    width: 20px;
    transition: all .3s ease;

    &:hover {
        filter: brightness(.2);
    }
`;

const Subtitle = styled.h2`
    flex: 1;
`;



function BiologicalInformation({ name, handleDelete, length, form }) {
    const [speciesName, setSpeciesName] = useState(undefined)

    useEffect(() => {
        if (speciesName) {
            handleSearch();
        }

    }, [speciesName])


    const handleSearch = async () => {
        var url = "https://www.marinespecies.org/rest";

        const aphia_id = await (await fetch(
            `${url}/AphiaIDByName/${speciesName}?marine_only=true`
        )).json();

        if (aphia_id) {
            const info = await (await fetch(
                `${url}/AphiaRecordByAphiaID/${aphia_id}`
            )).json();

            const sources = await (await fetch(
                `${url}/AphiaSourcesByAphiaID/${aphia_id}`
            )).json();

            var ref = undefined;
            sources.map((source) => {
                if (source.use == "basis of record") {
                    ref = source.reference;
                }
            })

            updateFields({ authority: info.valid_authority, reference: info.reference, reference: ref })

        } else {
            updateFields({ authority: undefined, reference: undefined, reference: undefined })
        }


    }

    const updateFields = (values) => {
        const taxas = form.getFieldValue('taxas')

        const updatedTaxas = taxas.map((taxa, key) => {
            if (key == name) {
                return {
                    ...taxa,
                    ...values
                }
            }
            return taxa;
        })
        form.setFieldsValue({ taxas: updatedTaxas })
    }

    const handleIdentificationChange = (e) => {
        setSpeciesName(e.target.value);
    }

    return (
        <>
            <Row type="flex" style={{ marginBottom: "20px" }}>
                <Subtitle>Biological identification & samples information</Subtitle>
                {length > 1 && <Delete onClick={handleDelete} src="/images/icons/delete.svg" alt="delete" />}


            </Row>

            <Row type="flex" align='bottom' gutter={32}>
                <Col xs={24} md={8}>
                    <Form.Item label="Highest taxonomic level*" name={[name, 'level']} rules={[{ ...requiredRule, message: "'taxonomic level' is required" }]}>
                        <TaxaLevelRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Scientific name*" name={[name, 'identification']} rules={[{ ...requiredRule, message: "'scientific name' is required" }]}>
                        <Input onChange={debounce(handleIdentificationChange, 800)} placeholder='Identification based on the highest taxonomic level' />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Authority" name={[name, 'authority']} rules={[{ required: false }]}>
                        <Input placeholder="Authority" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Species Status" name={[name, 'species_status']}>
                        <TaxaSpeciesStatusRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Year of the first record (if NIS or cryptogenic)" name={[name, 'year_first_report']} rules={[{ required: false }]}>
                        <Input placeholder="Year of the first record (if NIS or cryptogenic)" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Reference" name={[name, 'reference']}>
                        <Input placeholder="Reference" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Population Status" name={[name, 'population_status']}>
                        <TaxaPopulationStatusRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label={(
                        <>
                            <span>Abundance</span>
                            <CustomTooltip text="Categories of species abundance ranges to characterize the presence" />

                        </>)} name={[name, 'abundance']}>
                        <TaxaAbundanceRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Viability*" name={[name, 'viability']} rules={[{ ...requiredRule, message: "'viability' is required" }]}>
                        <TaxaViabilityRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Maturity stage*" name={[name, 'maturity']} rules={[{ ...requiredRule, message: "'maturity stages' are required" }]}>
                        <TaxaMaturityRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Native region" name={[name, 'native_region']}>
                        <TaxaNativeRegionRemoteSelectContainer />
                    </Form.Item>
                </Col>

                <Col xs={12} md={12}>
                    <Form.Item label={(
                        <>
                            <span>AS-ISK score</span>
                            <CustomTooltip text="Aquatic Species Invasiveness Screening Kit score." />

                        </>)} name={[name, 'asisk_score']} rules={[{ required: false }]}>
                        <Input placeholder="Aquatic Species Invasiveness Screening Kit" />
                    </Form.Item>
                </Col>

                <Col xs={12} md={12}>
                    <Form.Item label={(
                        <>
                            <span>AS-ISK result</span>
                            <CustomTooltip text="Aquatic Species Invasiveness Screening Kit result" />

                        </>)} name={[name, 'asisk_result']} rules={[{ required: false }]}>
                        <Input placeholder="Aquatic Species Invasiveness Screening Kit" />
                    </Form.Item>
                </Col>
            </Row>
            <Divider />
        </>
    )
}

export default BiologicalInformation