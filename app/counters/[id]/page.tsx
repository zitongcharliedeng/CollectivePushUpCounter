async function getCounter(counterId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/counters/records/${counterId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const counter = await getCounter(params.id);

  return (
    <div>
      {/* json:
      {JSON.stringify(counter)} */}
      <h1>counters/{counter.id}</h1>
      <div className="counter">
        <h3>{counter.title}</h3>
        <h5>Current: {counter.totalCount}</h5>
        <h5>Goal: {counter.goalCount}</h5>
        <p>{counter.created}</p>
      </div>
    </div>
  );
}