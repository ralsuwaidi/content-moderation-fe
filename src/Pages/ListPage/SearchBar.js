/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { CiSearch } from "react-icons/ci";



export default function SearchBar(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target[0].value
    let filteredList = props.movies.filter(movie=> movie.attributes.title.toLowerCase().includes(search.toLowerCase()));
    if (event.target[0].value==="") filteredList=[];
    props.filterMovies(filteredList)
    event.target[0].value=""
  
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 "><CiSearch /></span>
        </div>
        <input
          type="text"
          name="Movie"
          id="Movie"
          className="block w-full rounded-lg border-none pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100"
          placeholder=" Avatar, Lightyear, ..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option>Movie</option>
            <option>Series</option>
          </select>
        </div>
      </div>
    </form>
  )
}
