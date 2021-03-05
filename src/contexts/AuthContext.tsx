import { createContext, FormEvent, useCallback, useContext } from 'react';

import {
  Provider,
  signIn as handleOAuthLogin,
} from 'next-auth/client';


interface AuthContextData{
	signInGit(event: FormEvent): void;
}

const AuthContext = createContext({} as AuthContextData);

interface AuthContextProps{
	session: any;
}

export const AuthProvider: React.FC<AuthContextProps> = ({ session, children }) => {
	
	const signInGit = useCallback(() => {
		handleOAuthLogin('github');
	}, [])

	return(
		<Provider session={session}>
			<AuthContext.Provider value={{signInGit}}>
				{children}
			</AuthContext.Provider>
		</Provider>
	)
}

export function useAuth(): AuthContextData{
	const context = useContext(AuthContext);

	if(!context){
		throw new Error('should be used with AuthProvider')
	}

	return context;
}