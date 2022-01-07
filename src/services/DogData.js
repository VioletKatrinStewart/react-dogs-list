import { client, checkError } from './client';

export async function getDogs() {
  let request = await client.from('dog-data').select('*');
  return checkError(request);
}

export async function getDog(id) {
  let request = await client.from('dog-data').select('*').match({ id }).single();
  return checkError(request);
}

export async function updateDog(dog) {
  let request = await client.from('dog-data').update(dog).eq('id, dog.id');
  return checkError(request);
}

export async function insertDog(dog) {
  let request = await client.from('dog-data').insert(dog);
  return checkError(request);
}

export async function deleteDog(id) {
  let request = await client.from('dog-data').delete().match({ id });
  return checkError(request);
}
//get dog by id

// get all dogs
