import { createContext, useContext, useEffect, useState } from "react";
import { AuthSession } from "@supabase/supabase-js";
import { supabase } from "../config/supabaseClient";

type AuthContextType = {
  // session: AuthSession | null;
  // isAuthenticated: boolean;
  user: any;
  session: any;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

// const AuthContext = createContext<AuthContextType>({
//   session: null,
//   isAuthenticated: false,
//   signIn: async (_email: string, _password: string) => {},
//   signOut: async () => {},
// });

// export function useAuth() {
//   return useContext(AuthContext);
// }

// type AuthProviderProps = {
//   children: React.ReactNode;
// };

// export function AuthProvider({ children }: AuthProviderProps) {
  // const [session, setSession] = useState<AuthSession | null>(null);
  
export const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  signIn: async (email: string, password: string) => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  // useEffect(() => {
  //   const { data: session } = supabase.auth.session();
  //   setSession(session);
  //   const authListener = supabase.auth.onAuthStateChange((event, session) => {
  //     if (event === "SIGNED_IN") {
  //       setSession(session);
  //     } else if (event === "SIGNED_OUT") {
  //       setSession(null);
  //     }
  //   });
  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  // const isAuthenticated = session !== null;

  // const signIn = async (email: string, password: string) => {
  //   await supabase.auth.signIn({ email, password });
  // };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      throw error;
    }
  };
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const authContextValue = {
    session,
    user,
    // isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
