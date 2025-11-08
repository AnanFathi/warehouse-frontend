import { getMe } from "@/actions/users/getMe";
import Layout from "@/components/users/Users/Layout";

export default async function Users() {
  const me = await getMe();

  return <Layout me={me} />;
}
