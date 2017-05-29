import * as React from 'react';
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'

import { State, Ship, ShipPart } from '../model/interfaces'
import { PLACE_SHIP_PART } from '../model/actions'
import { BuilderState } from './interfaces'
import { ShipTable } from './ShipTable'
import { StorageParts } from './StorageParts'
import './Builder.css'

const mapStateToProps = (state: State): StateProps => ({
    ship: state.ship,
    storage: state.storage
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onPartPlaced: (part: ShipPart, i: number, j: number) => dispatch({ type: PLACE_SHIP_PART, i, j, part })
    }
}

interface StateProps {
    ship: Ship,
    storage: ShipPart[]
}

interface DispatchProps {
    onPartPlaced?: (part: ShipPart, i: number, j: number) => void
}

type BuilderProps = StateProps & DispatchProps



class BuilderComponent extends React.Component<BuilderProps, BuilderState> {

    constructor(props: StateProps) {
        super(props);

        this.state = {}
    }

    onPartSelected(partBeingPlaced: ShipPart) {
        this.setState({ partBeingPlaced })
    }

    onCellSelected(i: number, j: number) {
        if (this.props.onPartPlaced && this.state.partBeingPlaced) {
            this.props.onPartPlaced(this.state.partBeingPlaced, i, j)
            this.setState({ partBeingPlaced: undefined })
        }
    }

    render() {
        return (
            <div className="builder">
                <Grid>
                    <Row>
                        <Col sm={6}>
                            <h3>Ship Loadout</h3>
                            <ShipTable
                                ship={this.props.ship}
                                onCellSelected={this.onCellSelected.bind(this)}
                                partBeingPlaced={this.state.partBeingPlaced}
                                onPartSelected={this.onPartSelected.bind(this)}                                
                            />
                        </Col>
                        <Col sm={6}>
                            <h3>Parts in storage</h3>
                            <StorageParts
                                parts={this.props.storage}
                                onPartSelected={this.onPartSelected.bind(this)}
                                partBeingPlaced={this.state.partBeingPlaced}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h3>Part details</h3>
                        </Col>
                    </Row>
                </Grid>

                TODO: list overall ship stats, with diffs in add mode

            TODO: if you add over an existing component, show the stats and
            confirm
    </div>
        )
    }
}

const Builder = connect<StateProps, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(BuilderComponent)

export default Builder