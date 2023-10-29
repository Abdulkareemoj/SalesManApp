import { Button } from "@/components/ui/button";
import { usePocket } from "../components/context/pocketContext";

export const Protected = () => {
  const { logout, user } = usePocket();
  return (
    <section>
      <h2>Protected</h2>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
      <Button onClick={logout}>Logout</Button>
    </section>
  );
};
