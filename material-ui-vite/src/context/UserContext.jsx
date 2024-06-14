import { createContext, useContext, useState } from "react";
import users from '../data/mockUsers.json'

const UserContext = createContext();

export const UserProvider = (props) => {
    // user will just be a non-empty string that has been validated before committing to state
    // simple but effective for proof-of-concept
    const [user, setUser] = useState({});

    function validate({email, password}) {
        // TODO validation with local JSON
        // let isValidated = false;
        // const foundUser = Array(users).find(user => (user.email == email));
        // if(foundUser && (foundUser.password == password)) {
        //     isValidated = true;
        // }
        // return isValidated;
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