import * as React from 'react';
import { State, Ship, ShipPart } from '../model/interfaces'
import { connect } from 'react-redux'
import { Range } from 'immutable'

const mapStateToProps = (state: State): BuilderProps => ({
    ship: state.ship,
    storage: state.storage
})

interface BuilderProps extends React.Props<{}> {
    ship: Ship,
    storage: ShipPart[]
}

const partCell = (part?: ShipPart) => {
    return part ? part.name : '-'
}

const partTable = (ship: Ship) => {
    const makeCell = (i: number, j: number) => {
        return (
            <td key={`${i}:${j}`}>
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

    return (
        <table>
            <tbody>
                <tr>
                    <td />
                    {Range(0, ship.width).map(i => <th key={`:${i}`}>{i}</th>)}
                </tr>
                {rows}
            </tbody>
        </table>
    )
}

const render = (props: BuilderProps) => {
    return (
        <div className="builder">

            {partTable(props.ship)}
            TODO: ship builder
    </div>
    )
}

const Builder = connect<BuilderProps, {}, void>(mapStateToProps)(render)

export default Builder