import Head from "next/head";
import { Button } from "src/components/Button/Button";
import { JsonDebug } from "src/components/JsonDebug/JsonDebug";

export default function Home() {
  return (
    <div>
      <JsonDebug v="123" />
      <Button bar={"123"} foo={false}>
        1222
      </Button>
    </div>
  );
}
