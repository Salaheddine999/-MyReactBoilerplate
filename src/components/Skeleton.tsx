import { useCounter } from '../context/MainContext'

const Skeleton = () => {

    const{count, increment, decrement} = useCounter()

    return ( 
            <>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </>
     );
}
 
export default Skeleton;