export type StateType = {
    count: number;
}

type ReducerAction = {
    type: string,
    payload?: string,
}

const MainReducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}
 
export default MainReducer ;