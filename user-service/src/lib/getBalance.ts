export default async function getBalance(username: string) {
  let balance: number = 0;

  const res = await fetch(
    `http://localhost:3000/api/balance/info?of=${username}`
  );
  balance = await res.json();

  return balance;
}
