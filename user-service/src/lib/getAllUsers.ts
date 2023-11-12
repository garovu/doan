export default async function getAllUser() {
  const res = await fetch(`http://localhost:3000/api/balance/getallusers`);
  let userList: string[] = await res.json();
  if (!res.ok) {
    return ['garo', 'nam']
  }
  return userList;
}
