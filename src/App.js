import { useState, Fragment, useRef } from "react";
import "./App.css";
import NoteContainer from "./components/note container/Note-container";

function App() {
  const searchInput = useRef();
  const [searched, setSearched] = useState([]);
  const [changeSearch, setChangeSearch] = useState(false);
  const [SearchValue, setSearchValue] = useState(null);
  const [li, setLi] = useState([]);
  const [remaining, setRemaining] = useState([192]);
  const formSubmit = (event) => {
    event.preventDefault();
    let newli = [...li];

    newli.push(event.target.leave.value);
    setLi(newli);
    event.target.leave.value = "";
    setRemaining(192);
  };
  const handleDelete = (index) => {
    let newli = [...li];
    setLi(newli.filter((item, i) => i != index));
    console.log(index);
  };
  const handleSearch = (event) => {
    setChangeSearch(true);
    console.log(searched.length);
    let newli = [...li];
    setSearchValue(event.target.value);
    setSearched(newli.filter((item) => item.search(event.target.value) !== -1));
    console.log(searched);
    if (event.target.value.length === 0) {
      setSearched([]);
    }
  };

  return (
    <div className="App flex flex-col">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl">Notes</h1>
      </div>
      <div>
        <form className="flex items-center mt-8">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              ref={searchInput}
              onChange={handleSearch}
              onBlur={() => {
                setChangeSearch(false);
              }}
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      {changeSearch === true &&
      searched.length === 0 &&
      searchInput.current.value.length !== 0 ? (
        <Fragment> </Fragment>
      ) : (
        <NoteContainer
          remaining={remaining}
          setRemaining={setRemaining}
          searched={searched}
          SearchValue={SearchValue}
          handleDelete={handleDelete}
          formSubmit={formSubmit}
          li={li}
        />
      )}
    </div>
  );
}

export default App;
