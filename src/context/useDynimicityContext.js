import { createContext, useContext, useState} from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {

    const [showForm, setShowForm] = useState(["none", "0"])
    
    const changeFormDisplay = (showForm) => {
        if (showForm) {
            setShowForm(["block", "0"])
            setTimeout(() => setShowForm(["block", "1"]), 1)
        }
    }

    return (
        <DynimicityContext.Provider value={{showForm, changeFormDisplay}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}