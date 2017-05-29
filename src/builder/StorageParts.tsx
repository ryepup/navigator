import * as React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

import { BuilderState } from './interfaces'
import { ShipPart } from '../model/interfaces'


interface StorageProps extends BuilderState {
    parts: ShipPart[]
    onPartSelected: (part: ShipPart) => void;
}

export const StorageParts = (props: StorageProps) => {
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