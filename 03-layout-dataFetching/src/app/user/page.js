import User from "./User";

const URL = `https://jsonplaceholder.typicode.com/users`;

export async function userData() {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

async function page() {
  const data = await userData();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-10">
        Users Directory
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default page;