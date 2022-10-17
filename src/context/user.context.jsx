import { createContext, useState} from 'react';

export const UserContext = createContext({
	currentUser: {
		username: null,
		balance: null,
	},
	setCurrentUser: () => null,
})

export default function UserProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({username: null, balance: null});
	const value = { currentUser, setCurrentUser };

	return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}