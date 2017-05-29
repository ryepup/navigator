import * as React from 'react'
import { Range } from 'immutable'
import { Table, Button } from 'react-bootstrap'

import { Ship, ShipPart } from '../model/interfaces'
import { BuilderState } from './interfaces'

interface TableProps extends BuilderState {
    ship: Ship,
    onCellSelected: (i: number, j: number) => void;
    onPartSelected: (part: ShipPart) => void;
}

export const ShipTable = (props: TableProps) => {

    const ship = props.ship
    const isBeingPlaced = props.partBeingPlaced !== undefined
    const onCellSelected = isBeingPlaced ? props.onCellSelected : () => undefined;

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
            <td key={key} className={className} onClick={() => onCellSelected(i, j)}>
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
