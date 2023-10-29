import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { Session, User } from "@supabase/supabase-js";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(
      (event, session: Session | null) => {
        if (event === "SIGNED_IN" && session) {
          setUser(session.user);
          setAuth(true);
        }
      }
    );
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
