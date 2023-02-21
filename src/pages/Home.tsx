import { ReactNode } from "react";

type HomeProps = {
    children: ReactNode
}

const Home = ({children}:HomeProps) => {
    return ( 
        <>
            {children}
        </>
     );
}
 
export default Home;