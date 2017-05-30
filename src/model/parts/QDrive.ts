import { ShipPart } from '../interfaces'

export default class QDrive implements ShipPart {
    readonly name: string = 'QDrive'
    readonly description: string = `The quantum drive is the 
        foundation of space travel. It allows a ship to take many paths through
        space, and only one of them needs to work.`
}