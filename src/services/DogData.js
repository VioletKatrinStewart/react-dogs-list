import { client, checkError } from './client';

export async function getDogs() {
  let request = await client.from('dog-data').select('*');
  return checkError(request);
}

export async function getDog(id) {
  let request = await client.from('dog-data').select('*').match({ id: id });
  return checkError(request);
}

//get dog by id

// get all dogs
