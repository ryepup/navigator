export type Credit = number

export interface State {
    ship: Ship
    storage: ShipPart[]
    jobs: Mission[]
    completed: Mission[]
    credits: Credit
}

export interface Ship {
    height: number,
    width: number,
    parts: ShipPart[][]
}

export interface ShipPart {
    name: string
}

export type Reward = ShipPart | Credit

export interface Mission {
    name: string
    description: string
    rewards: Reward[]
}