import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
    // user will just be a non-empty string that has been validated before committing to state
    // simple but effective for proof-of-concept
    const [user, setUser] = useState({});

    function validate({email, password}) {
        // TODO validation with local JSON
        return true;
    }

    const handleUpdateUser = ({email, password}) => {
        if (validate({email, password})) {
            setUser({
                email: email,
                password: password
            });
        } else {
            setUser({}) // i.e. logout condition
        }
    }

    return (
        <UserContext.Provider value={{ user, handleUpdateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}