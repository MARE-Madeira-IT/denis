import React from 'react'
import DataDrawer from '../../Common/DataDrawer'
import styled from "styled-components";
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import MapViewModal from '../../../MapViewModal';
import moment from "moment";
import { Create, CreateSecundary, dimensions } from '../../dashboardHelper';
import { dateTypes } from '../../../../helper';

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

    p {
        margin: 0px;
    }

    .value {
        opacity: .7;
    }

    .name {
        
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

const ImageContainer = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    img {
        width: 20%;
        padding: 10px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.lg}) {
            width: 33%;
        }

        @media (max-width: ${dimensions.md}) {
            width: 50%;
        }

        @media (max-width: ${dimensions.sm}) {
            width: 100%;
        }
    }
   
`;

function Drawer({ current, handleUpdateClick, handleDuplicateClick }) {

    const FieldContainer = ({ name, value }) => (
        <Field className='field-width'>
            <p className='name'>{name}</p>
            <p className='value'>{value}</p>
        </Field>
    )

    function EmptyField(field) {
        return field ? field : "---"
    }

    return (
        <DataDrawer>
            <Row type="flex" dire="true">

                <Col span={24}>
                    <Section>Item detection</Section>
                    <Row style={{ marginBottom: "30px" }}>
                        <MapViewModal customData={{ id: 1, latitude: current.latitude, longitude: current.longitude }} />
                    </Row>

                    <FieldsContainer width="33%">
                        <FieldContainer name="Date of survey" value={current.date_type != "range" ? moment(current.date).format(dateTypes[current.date_type]) : moment(current.date).format(dateTypes[current.date_type]) + " - " + moment(current.final_date).format(dateTypes[current.date_type])} />
                        <FieldContainer name="Localization" value={current.site?.value + ", " + current.site?.region + ", " + current.site?.country?.name + ", " + (current?.site?.lme ? current?.site?.lme?.name : "")} />
                        <FieldContainer name="Ongoing Surveys" value={current.ongoing_survey ? current.ongoing_survey : "No"} />
                    </FieldsContainer>




                    <ImageContainer>
                        {current?.images && current.images.map((image) => (
                            <img src={image?.path} alt="" />
                        ))}
                    </ImageContainer>
                </Col>

                <Col span={24}>
                    <Section>Publication details</Section>
                    <FieldsContainer width="25%">
                        <FieldContainer name="Title" value={EmptyField(current.title_publication)} />
                        <FieldContainer name="Journal" value={EmptyField(current.journal_publication)} />
                        <FieldContainer name="First Author" value={EmptyField(current.first_author)} />
                        <FieldContainer name="Author(s)" value={EmptyField(current.authors)} />
                    </FieldsContainer>
                    <FieldsContainer width="25%">
                        <FieldContainer name="DOI" value={EmptyField(current.doi)} />
                        <FieldContainer name="Year of publication" value={EmptyField(current.year_publication)} />
                        <FieldContainer name="Volume" value={EmptyField(current.volume_publication)} />
                        <FieldContainer name="Page(s)" value={EmptyField(current.pages_publication)} />
                    </FieldsContainer>
                </Col>
                <Col span={24}>
                    <Section>Debris characterization</Section>
                    <FieldsContainer width="33%">
                        <FieldContainer name="Debris type" value={current.debris?.type?.name} />
                        <FieldContainer name="Depth (m)" value={EmptyField(current.debris?.type?.depth)} />
                        <FieldContainer name="Habitat of the finding" value={current.debris?.habitat?.name} />
                        <FieldContainer name="Category of litter" value={current.debris?.litter_category?.name + (current.litter_category?.subcategory ? (", " + current.litter_category?.subcategory?.name) : "")} />
                        <FieldContainer name="Abundance" value={EmptyField(current.debris?.size?.name)} />
                        <FieldContainer name="Debris weight (Kg)" value={EmptyField(current.debris?.weight)} />
                        <FieldContainer name="Stiffness" value={EmptyField(current.debris?.thickness?.name)} />
                        <FieldContainer name="Surface rugosity" value={EmptyField(current.debris?.rugosity?.name)} />
                        <FieldContainer name="Debris identification marks " value={EmptyField(current.debris?.marks)} />
                        <FieldContainer name="Probable debris origin" value={EmptyField(current.debris?.origin)} />
                    </FieldsContainer>
                </Col>



                <Col span={24}>
                    <Section>Biological identification & samples information</Section>
                    {current.taxas && current.taxas.map((taxa, index) => (
                        <>
                            <FieldsContainer key={"taxa-" + index} width="25%">
                                <FieldContainer name="Highest taxonomic level" value={taxa.level?.name} />
                                <FieldContainer name="Specify it" value={taxa.identification} />
                                <FieldContainer name="Authority" value={EmptyField(taxa.authority)} />
                                <FieldContainer name="Year of first report" value={EmptyField(taxa.year_first_report)} />
                                <FieldContainer name="Reference" value={EmptyField(taxa.reference)} />
                                <FieldContainer name="Species Status" value={EmptyField(taxa.speciesStatus?.name)} />
                                <FieldContainer name="Population status" value={EmptyField(taxa.populationStatus?.name)} />
                                <FieldContainer name="Species abundance" value={EmptyField(taxa.abundance?.name)} />
                                <FieldContainer name="Viability" value={taxa.viability?.name} />
                                <FieldContainer name="Maturity stage" value={taxa.maturities.map((maturity, index) => (<span key={"maturity-" + index}>{maturity.name}, </span>))} />
                                <FieldContainer name="Native Region" value={taxa.nativeRegions.map((nativeRegion, index) => (<span key={"nr-" + index}>{nativeRegion.name}, </span>))} />
                                <FieldContainer name="AS-ISK" value={taxa.asisk_score ? taxa.asisk_score + " (" + taxa.asisk_result + ")" : "---"} />
                            </FieldsContainer>
                            <br />
                        </>
                    ))}

                </Col>
            </Row>
            <br></br>



            <Row type="flex" justify='start' gutter={16}>
                {handleUpdateClick ?
                    <Create style={{ marginRight: "10px" }} onClick={handleUpdateClick}>Update</Create>
                    : <></>
                }
                {handleDuplicateClick ?
                    <CreateSecundary onClick={handleDuplicateClick}>Duplicate</CreateSecundary>
                    : <></>
                }
            </Row>




        </DataDrawer>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.drawer.current,
    };
};

export default connect(mapStateToProps, null)(Drawer);