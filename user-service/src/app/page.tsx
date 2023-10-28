import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <h1>Landing page about Tipme</h1>
      <Button variant="link">
        <Link href="/garo">Donate for @garo</Link>
      </Button>
    </div>
  );
}
