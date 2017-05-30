import * as React from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Action, Dispatch } from 'redux'

import { State, ShipPart, SelectedPart } from '../model/interfaces'
import { 
    makeCancelSelectPartAction,
    makeUninstallPartAction 
} from '../model/actions'

const mapStateToProps = (state: State): StateProps => ({
    selectedPart: state.ui.selectedPart
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
    onCancel: (part: ShipPart) => dispatch(makeCancelSelectPartAction(part)),
    onUninstall: (part: ShipPart) => dispatch(makeUninstallPartAction(part)),
})


interface StateProps {
    selectedPart?: SelectedPart
}

interface DispatchProps {
    onCancel: (part: ShipPart) => void
    onUninstall: (part: ShipPart) => void
}

const renderPart = (selectedPart: SelectedPart, props: DispatchProps) => {
    const {part, isInstalled} = selectedPart
    const onCancel = () => props.onCancel(part)
    const onUninstall = () => props.onUninstall(part)

    return (
        <div>
            <h4>{part.name}</h4>
            <p>{part.description}</p>

            <Button bsStyle="link" onClick={onCancel}>
                Ok
            </Button>
            {isInstalled && (
                <Button bsStyle="default" onClick={onUninstall}>
                Uninstall
                </Button>
            )}
        </div>
    )
}

const render = (props: StateProps&DispatchProps) => {
    return (
        <div className="partDetail">
            { props.selectedPart 
            ? renderPart(props.selectedPart, props)
            : <p className="help-block">No part selected</p> }
        </div>
    )
}

export const PartDetail = connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(render)
