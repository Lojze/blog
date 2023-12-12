import { useState, useEffect } from 'preact/hooks';

export default function RandomUser() {
  const [count, setCount] = useState(5); // 设置默认值为 5
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [users, setUsers] = useState([]);

  const nationalities = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IN', 'IR', 'MX', 'NL', 'NO', 'NZ', 'RS', 'TR', 'UA', 'US'];

  useEffect(() => {
    let url = `https://randomuser.me/api/?results=${count}`;
    if (gender) {
      url += `&gender=${gender}`;
    }
    if (nationality) {
      url += `&nat=${nationality}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, [count, gender, nationality]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(event.target.elements.count.value);
    setGender(event.target.elements.gender.value);
    setNationality(event.target.elements.nationality.value);
  };

  return (
      <div class="container mx-auto px-4">
  <form onSubmit={handleSubmit} class="grid grid-cols-1 gap-6">
    <label class="flex items-center gap-2">
      <span class="text-gray-700">Count:</span>
      <input type="number" name="count" defaultValue={count} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
    </label>
    <label class="flex items-center gap-2">
      <span class="text-gray-700">Gender:</span>
      <select name="gender" defaultValue={gender} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </label>
    <label class="flex items-center gap-2">
      <span class="text-gray-700">Nationality:</span>
      <select name="nationality" defaultValue={nationality} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        <option value="">All</option>
        {nationalities.map(nat => <option value={nat}>{nat}</option>)}
      </select>
    </label>
    <button type="submit" class="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500">Get Users</button>
  </form>
  {users.map((user, index) => (
    <div key={index} class="flex items-center bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <img class="h-full object-cover" src={user.picture.large} alt="" />
      <div class="px-6 py-4">
        <h4 class="mb-2 text-xl font-semibold text-gray-700">{user.name.first} {user.name.last}</h4>
        <p class="text-gray-600">{user.email}</p>
        <p class="text-gray-600">Country: {user.location.country}</p>
        <p class="text-gray-600">Postal Code: {user.location.postcode}</p>
        <p class="text-gray-600">Registered Date: {new Date(user.registered.date).toLocaleDateString()}</p>
        <p class="text-gray-600">Phone: {user.phone}</p>
      </div>
    </div>
  ))}
</div>
  );
}