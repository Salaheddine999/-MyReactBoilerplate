import { createContext, useReducer, ReactElement, useCallback, useContext } from "react"
import MainReducer,{StateType} from "./MainReducer"


const initState: StateType = { count: 0}


const useCounterContext = (initState: StateType) => {
    const [state, dispatch] = useReducer(MainReducer, initState)

    const increment = useCallback(() => dispatch({ type: "INCREMENT" }), [])

    const decrement = useCallback(() => dispatch({ type: "DECREMENT" }), [])

    return { state, increment, decrement }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => { },
    decrement: () => { },
}

export const CounterContext = createContext<UseCounterContextType>(initContextState)


type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

export const CounterProvider = ({children}: ChildrenType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}

type UseCounterHookType = {
    count: number,
    increment: () => void,
    decrement: () => void,
}

export const useCounter = (): UseCounterHookType => {
    const { state: { count }, increment, decrement } = useContext(CounterContext)
    return { count, increment, decrement }
}