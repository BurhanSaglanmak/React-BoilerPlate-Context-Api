// import axios from 'axios';
import { createContext, useState} from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const[testData,setTestData]=useState("testValue-Context")
    const [anchorElNav, setAnchorElNav] = useState(null);

    
    return (
        <MyContext.Provider
            value={{
                setTestData,
                testData,
                anchorElNav,
                 setAnchorElNav
            }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };