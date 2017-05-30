import * as React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { ShipPart, State, SelectedPart } from '../model/interfaces'
import { makeSelectStoragePartAction } from '../model/actions'


const mapStateToProps = (state: State): StateProps => ({
    parts: state.storage,
    selectedShipPart: state.ui.selectedPart
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    onPartSelected: (part: ShipPart) => dispatch(makeSelectStoragePartAction(part))
})

interface StateProps {
    parts: ShipPart[],
    selectedShipPart?: SelectedPart
}

interface DispatchProps {
    onPartSelected: (part: ShipPart) => void
}

const render = (props: StateProps & DispatchProps) => {
    if (props.parts.length === 0) {
        return <p className="help-block">No parts available</p>
    }

    const makeGroupItem = (part: ShipPart) => {
        const onClick = () => props.onPartSelected(part)
        const isActive = props.selectedShipPart 
            && (part === props.selectedShipPart.part)
        return (
            <ListGroupItem key={part.name} onClick={onClick} active={isActive}>
                {part.name}
            </ListGroupItem>)
    }

    const items = props.parts.map(makeGroupItem)
    return <ListGroup>{items}</ListGroup>;
}

export const StorageParts = connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(render)