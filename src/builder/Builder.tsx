import * as React from 'react';
import { State, Ship, ShipPart } from '../model/interfaces'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { PLACE_SHIP_PART } from '../model/actions'
import { Range } from 'immutable'
import { Grid, Row, Col, Table, ListGroup, ListGroupItem } from 'react-bootstrap'
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

interface BuilderState {
    partBeingPlaced?: ShipPart
}

interface StorageProps extends BuilderState {
    parts: ShipPart[]
    onPartSelected: (part: ShipPart) => void;
}

interface TableProps extends BuilderState {
    ship: Ship,
    onCellSelected: (i: number, j: number) => void;
}


const partCell = (part?: ShipPart) => {
    // TODO: some graphics
    return part ? part.name : '-'
}

const partTable = (props: TableProps) => {

    const ship = props.ship
    const isBeingPlaced = props.partBeingPlaced !== undefined
    const onClick = isBeingPlaced ? props.onCellSelected : () => undefined;

    const makeCell = (i: number, j: number) => {
        const key = `${i}:${j}`
        const part = ship.parts[i][j]
        const className = isBeingPlaced && !part ? 'selectable' : ''

        return (
            <td key={key} className={className} onClick={() => onClick(i, j)}>
                {partCell(part)}
            </td>
        )
    }

    const makeRow = (i: number) => {
        const cells = Range(0, ship.width)
            .map((j: number) => makeCell(i, j))

        return <tr key={`${i}:`}><th>{i}</th>{cells}</tr>
    }

    const rows = Range(0, ship.height)
        .map(makeRow)

    // TODO: style this table to be consistent
    return (
        <Table bordered={true}>
            <tbody>
                <tr>
                    <td />
                    {Range(0, ship.width).map(i => <th key={`:${i}`}>{i}</th>)}
                </tr>
                {rows}
            </tbody>
        </Table>
    )
}


const storage = (props: StorageProps) => {
    if (props.parts.length === 0) {
        return <p className="help-block">No parts available</p>
    }

    const makeGroupItem = (part: ShipPart) => {
        const onClick = () => props.onPartSelected(part)
        const isActive = part === props.partBeingPlaced
        return (
            <ListGroupItem key={part.name} onClick={onClick} active={isActive}>
                {part.name}
            </ListGroupItem>)
    }

    const items = props.parts.map(makeGroupItem)
    return <ListGroup>{items}</ListGroup>;
}


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
                            {partTable({
                                ship: this.props.ship,
                                partBeingPlaced: this.state.partBeingPlaced,
                                onCellSelected: this.onCellSelected.bind(this)
                            })}
                        </Col>
                        <Col sm={6}>
                            <h3>Parts in storage</h3>
                            {storage({
                                parts: this.props.storage,
                                onPartSelected: this.onPartSelected.bind(this),
                                partBeingPlaced: this.state.partBeingPlaced
                            })}
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