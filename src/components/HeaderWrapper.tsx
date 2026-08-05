import Header from "@/components/Header";
import { getCmsHeaders } from "@/lib/api";

export default async function HeaderWrapper() {
  const headers = await getCmsHeaders();
  return <Header headers={headers} />;
}
