import React from 'react';

export default function Form() {
  return (
    <form>
      <label>Name
        <input value={''} onClick={} type='text' placeholder='Name'/>
      </label>
      <label>Bio
        <input value={''} onClick={} type='text' placeholder='Bio'/>
      </label>
      <label>Age
        <input value={''} onClick={} type='number' placeholder='Age'/>
      </label>
      <label>Image
        <input value={''} onClick={} type='text' placeholder='image'/>
      </label>
      <label>Breed
        <input value={''} onClick={} type='text' placeholder='Breed'/>
      </label>
      

      <button>Submit</button>
    </form>
  );
}
