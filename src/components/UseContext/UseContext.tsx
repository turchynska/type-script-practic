import React, {Children, createContext, useContext, useEffect, useState} from "react";

type User = {
    name: string;
    email: string;
}
type UserContextProps = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null >>
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

type Props = {
    children : React.ReactNode;
}
export function UserProvider({children}: Props){
    const [user, setUser] = useState<User | null>(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )  
}

function useUserState() {
    const context = useContext(UserContext);
    if(context === undefined){
        throw new Error('useUser must be within a useProvider')
    }
    return context
}
export function UseProfile() {
const {user, setUser} = useUserState();

useEffect(() => {
    setTimeout(() => {
        setUser({
            name: "john",
            email:'hdusbuu@mail.com'
        });
    }, 2000)
}, [setUser])

if(!user){
    return <p>Loading...</p>
}

return(
<div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
</div>
)
}