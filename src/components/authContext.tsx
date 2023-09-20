import { createContext, useContext, useEffect, useState } from "react";
import { AuthSession, Subscription } from "@supabase/supabase-js";
import { supabase } from "../config/supabaseClient";

type AuthContextType = {
  session: AuthSession | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  isAuthenticated: false,
  signIn: async (_email: string, _password: string) => {},
  signOut: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    const { data: session } = supabase.auth.session();
    setSession(session);
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setSession(session);
      } else if (event === "SIGNED_OUT") {
        setSession(null);
      }
    });
    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, []);

  const isAuthenticated = session !== null;

  const signIn = async (email: string, password: string) => {
    await supabase.auth.signIn({ email, password });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const authContextValue = {
    session,
    isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
