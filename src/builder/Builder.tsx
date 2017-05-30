import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import { ShipTable } from './ShipTable'
import { StorageParts } from './StorageParts'
import { PartDetail } from './PartDetail'
import './Builder.css'


const Builder = () => {
        return (
            <div className="builder">
                <Grid>
                    <Row>
                        <Col sm={6}>
                            <h3>Ship Loadout</h3>
                            <ShipTable />
                        </Col>
                        <Col sm={6}>
                            <h3>Part details</h3>
                            <PartDetail />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h3>Parts in storage</h3>
                            <StorageParts />
                        </Col>
                    </Row>
                </Grid>

                TODO: list overall ship stats, with diffs in add mode

            TODO: if you add over an existing component, show the stats and
            confirm
    </div>
        )
    }

export default Builder