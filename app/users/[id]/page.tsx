async function getUser(userId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/users/records/${userId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function UserPage({ params }: any) {
  const user = await getUser(params.id);

  return (
    <div>
      json: {JSON.stringify(user)}
    </div>
  );
}