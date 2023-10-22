import { useGlobalContext } from "./context";

const SearchForm=()=>{
  const {setSearchTerm}=useGlobalContext();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const searchValue=e.target.elements;
    console.log(searchValue.search.value);
    setSearchTerm(searchValue.search.value)
  }
  // console.log(greeting);
  // console.log(isDarkTheme);

  return(
    <section >
      
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
      <input type='text' name='search' placeholder='cat' className="form-input search-input"></input>
      <button type="submit" className='btn'>Search</button>
      </form>

    </section>
  )
}
export default SearchForm;
