import React from 'react'
import DataDrawer from '../../Common/DataDrawer'
import styled from "styled-components";
import { Col, Row } from 'antd';

const Title = styled.h2`
    //
`;

const Section = styled.h3`
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
`;

const Field = styled.div`
    padding: 5px 5px 5px 0px;
    box-sizing: border-box;
    font-family: "Lato";

    p {
        margin: 0px;
    }

    .value {
    }

    .name {
        opacity: .5;
    }
`;

const FieldsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    .field-width {
        width: ${props => props.width};
    }
`;

const Button = styled.button`
    padding: 12px 15px;
    background-color: #0C4C88;
    border: 0px;
    box-shadow: none;
    color: white;
    margin-right: auto;
    cursor: pointer;
`;

function Drawer({ data, handleUpdateClick }) {

    const FieldContainer = ({ name, value }) => (
        <Field className='field-width'>
            <p className='value'>{value}</p>
            <p className='name'>{name}</p>
        </Field>
    )

    function EmptyField(field) {
        return field ? field : "---"
    }

    return (
        <DataDrawer>
            <Row type="flex" dire>
                <Col xs={24} md={12}>
                    <Section>Item detection</Section>
                    <FieldsContainer width="50%">
                        <FieldContainer name="Date of survey (dd-mm-yyyy)" value={data.date} />
                        <FieldContainer name="Site name" value={data.site?.name} />
                        <FieldContainer name="Region/Province" value={data.site?.region} />
                        <FieldContainer name="Country" value={data.site?.country?.name} />
                        <FieldContainer name="LME" value={data.site?.lme?.name} />
                        <FieldContainer name="Latitude" value={data.latitude} />
                        <FieldContainer name="Longitude" value={data.longitude} />
                        <FieldContainer name="Ongoing Surveys" value={data.ongoing_survey ? data.ongoing_survey : "No"} />
                    </FieldsContainer>
                </Col>
                <Col xs={24} md={12}>
                    <Section>Debris characterization</Section>
                    <FieldsContainer width="50%">
                        <FieldContainer name="Debris type" value={data.debris?.type?.name} />
                        <FieldContainer name="If &quot;Seafloor&quot;, specify depth (m)" value={EmptyField(data.debris?.type?.depth)} />
                        <FieldContainer name="Habitat of the finding" value={data.debris?.habitat?.name} />
                        <FieldContainer name="Debris material" value={data.debris?.material?.name} />
                        <FieldContainer name="Debris size class " value={data.debris?.size?.name} />
                        <FieldContainer name="Debris weight (Kg)" value={EmptyField(data.weight)} />
                        <FieldContainer name="Debris thickness" value={data.debris?.thickness?.name} />
                        <FieldContainer name="Debris surface rugosity" value={data.debris?.rugosity?.name} />
                        <FieldContainer name="Master List of Categories of Litter Items" value={data.debris?.litter_category?.mdi_code} />
                        <FieldContainer name="Debris identification marks " value={EmptyField(data.debris?.marks)} />
                        <FieldContainer name="Probable debris origin" value={EmptyField(data.debris?.origin)} />
                    </FieldsContainer>
                </Col>

                <Col span={24}>
                    <Section>Biological identification & samples information</Section>
                    {data.taxas && data.taxas.map((taxa, index) => (
                        <FieldsContainer key={"taxa-" + index} width="25%">
                            <FieldContainer name="Highest taxonomic level" value={taxa.level?.name} />
                            <FieldContainer name="Specify it" value={taxa.identification} />
                            <FieldContainer name="Authority" value={EmptyField(taxa.authority)} />
                            <FieldContainer name="Year of first report" value={EmptyField(taxa.year_first_report)} />
                            <FieldContainer name="Reference" value={EmptyField(taxa.reference)} />
                            <FieldContainer name="Species Status" value={taxa.speciesStatus?.name} />
                            <FieldContainer name="Population status" value={taxa.populationStatus?.name} />
                            <FieldContainer name="Species abundance" value={taxa.abundance?.name} />
                            <FieldContainer name="Viability" value={taxa.viability?.name} />
                            <FieldContainer name="Maturity stage" value={taxa.maturities.map((maturity, index) => (<span key={"maturity-" + index}>{maturity.name}, </span>))} />
                            <FieldContainer name="Native Region" value={taxa.nativeRegion?.name} />
                        </FieldsContainer>
                    ))}

                </Col>
            </Row>
            <br></br>

            <Row type="flex" >
                <Button onClick={handleUpdateClick}>Update</Button>
            </Row>



        </DataDrawer>
    )
}

export default Drawer