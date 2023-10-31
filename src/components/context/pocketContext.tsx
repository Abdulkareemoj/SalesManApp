import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import PocketBase from "pocketbase";
import { useInterval } from "usehooks-ts";
import { jwtDecode } from "jwt-decode";
import ms from "ms";

interface PocketProviderProps {
  children: React.ReactNode;
}

const BASE_URL = "http://127.0.0.1/8090";
const fiveMinutesInMs = ms("5 minutes");
const twoMinutesInMs = ms("2 minutes");
const PocketContext = createContext({});

export const PocketProvider = ({ children }: PocketProviderProps) => {
  const pb = useMemo(() => new PocketBase(BASE_URL), []);

  const [token, setToken] = useState<string>(pb.authStore.token);
  const [user, setUser] = useState<object | null>(pb.authStore.model);
  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  }, [pb.authStore]);

  // const register = useCallback(async(username, password) =>{
  // return await pb
  // .collection("users")
  // .create({username, password, passwordConfirm: password })
  // }, [])

  const login = useCallback(
    async (username: string, password: string) => {
      const authData = await pb.collection("users").authWithPassword(username, password);
      return authData
    },
    [pb]
  );

  const logout = useCallback(
    // async (username, password) => {
    // async
    () => {
      return pb.authStore.clear();
    },
    [pb.authStore]
  );

  // const refreshSession = useCallback(async () => {
  //   if (!pb.authStore.isValid) return;
  //   const decoded = jwtDecode(token);
  //   const tokenExpiration = decoded.exp;
  //   const expirationWithBuffer = decoded.exp + fiveMinutesInMs;
  //   if (tokenExpiration < expirationWithBuffer) {
  //     await pb.collection("users").authRefresh();
  //   }
  // }, [token]);
  const refreshSession = useCallback(async () => {
    if (!pb.authStore.isValid) return;
    const decoded = jwtDecode(token);
    if (decoded && typeof decoded.exp === "number") {
      const tokenExpiration = decoded.exp;
      const expirationWithBuffer = decoded.exp + fiveMinutesInMs;
      if (tokenExpiration < expirationWithBuffer) {
        await pb.collection("users").authRefresh();
      }
    }
  }, [pb, token]);

  useInterval(refreshSession, token ? (twoMinutesInMs as number) : null);
  return (
    <PocketContext.Provider value={{ user, login, logout, token, pb }}>
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
