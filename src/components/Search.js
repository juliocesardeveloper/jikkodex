import { useInput } from '../hooks/useInput'

export const Search = () => {

  const { inputValue, setInputValue, handleInputChange } = useInput()

  const handleSubmit = ( e ) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit } >
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control mt-2 mb-2"
          placeholder="Search your Jikkomon"
          value={ inputValue }
          onChange={ ({ target }) => handleInputChange( target.value ) }
        />
        <button className="btn btn-outline-secondary mt-2 mb-2" type="button" id="button-addon2">Search</button>
      </div>
    </form>
  )
}