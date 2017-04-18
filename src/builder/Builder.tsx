import * as React from 'react';
import { State, Ship, ShipPart } from '../model/interfaces'
import { connect } from 'react-redux'
import { Range } from 'immutable'
import { Grid, Row, Col, Table} from 'react-bootstrap'

const mapStateToProps = (state: State): BuilderProps => ({
    ship: state.ship,
    storage: state.storage
})

interface BuilderProps extends React.Props<{}> {
    ship: Ship,
    storage: ShipPart[]
}

const partCell = (part?: ShipPart) => {
    // TODO: some graphics
    return part ? part.name : '-'
}

const partTable = (ship: Ship) => {
    const makeCell = (i: number, j: number) => {
        const key = `${i}:${j}`
        return (
            <td key={key}>
                {partCell(ship.parts[i][j])}
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

const render = (props: BuilderProps) => {
    return (
        <div className="builder">
            <Grid>
                <Row>
                    <Col sm={6}>
                        {partTable(props.ship)}
                    </Col>
                    <Col sm={6}>
                        TODO: list of parts in storage
                    </Col>    
                </Row>    
            </Grid>
                       
            TODO: click a part to enter "add mode", which highlights eligible
            cells in the table. Clicking the cell completes the "add" and dispatches to state

            TODO: list overall ship stats, with diffs in add mode

            TODO: if you add over an existing component, show the stats and
            confirm
    </div>
    )
}

const Builder = connect<BuilderProps, {}, void>(mapStateToProps)(render)

export default Builder