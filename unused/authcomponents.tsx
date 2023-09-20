import { useAuth } from "./authContext";

function Dashboard() {
  const { session, isAuthenticated, signOut } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {session?.user?.email}!</p>
      ) : (
        <p>Please sign in to continue.</p>
      )}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
