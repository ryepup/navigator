import * as React from 'react'
import { Range } from 'immutable'
import { Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { Ship, ShipPart, State } from '../model/interfaces'
import { SELECT_SHIP_PART, PLACE_SHIP_PART } from '../model/actions'

interface StateProps {
    ship: Ship,
    selectedShipPart?: ShipPart
}

interface DispatchProps {
    onPartSelected: (part: ShipPart) => void,
    onPartPlaced: (part: ShipPart, i: number, j: number) => void
}

const mapStateToProps = (state: State): StateProps => ({
    ship: state.ship,
    selectedShipPart: state.ui.selectedPart && state.ui.selectedPart.part
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    onPartSelected: (part: ShipPart) => dispatch({ type: SELECT_SHIP_PART, payload: part }),
    onPartPlaced: (part: ShipPart, i: number, j: number) => dispatch({ type: PLACE_SHIP_PART, payload: {part, i, j} })
})


const render = (props: StateProps&DispatchProps) => {

    const ship = props.ship
    const isBeingPlaced = props.selectedShipPart ? true : false
    const onPartPlaced = (i: number, j: number) => {
        if (props.selectedShipPart) {
            props.onPartPlaced(props.selectedShipPart, i, j)
        }
    }

    const makePartCell = (part: ShipPart) => {
        const onClick = () => props.onPartSelected(part)
        // TODO: some graphics
        return (
            <Button bsStyle="default" bsSize="small" onClick={onClick}>
                {part.name}
            </Button>
        )
    }

    const makeCell = (i: number, j: number) => {
        const key = `${i}:${j}`
        const part = ship.parts[i][j]
        const className = isBeingPlaced && !part ? 'selectable' : ''

        return (
            <td key={key} className={className} onClick={() => onPartPlaced(i, j)}>
                {part ? makePartCell(part) : '-'}
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

export const ShipTable = connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(render)
