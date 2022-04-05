import { Marker } from "/components";

export default function Pagemarker() {
  return <>{typeof window !== "undefined" && <Marker />}</>;
}
