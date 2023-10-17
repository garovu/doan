'use client'
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ModeToggle } from '@/components/ui/toggle-mode';

export function InputDemo() {
  return
}

export interface UserTippingProps {
}



export default function UserTipping (props: UserTippingProps) {
    const userAccount = useParams();

  return (
    <>
      <h1>User Tipping</h1>
      <p>Slug: {JSON.stringify(userAccount)}</p>
      <Input type="number" placeholder="Dolar" />
      <Textarea placeholder="Say something to me" />
      <Button>Send Tip</Button>
    </>
  );
}
