import { useInput } from '../hooks/useInput'
import PropTypes from 'prop-types'

export const Search = ({ setCategories }) => {

  const { inputValue, setInputValue, handleInputChange } = useInput()

  const handleSubmit = ( e ) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories( cats => [ inputValue, ...cats] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit } >
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Search your Jikkomon"
        value={ inputValue }
        onChange={ ({ target }) => handleInputChange( target.value ) }
      />
    </form>
  )
}

Search.propTypes = {
  setCategories: PropTypes.func.isRequired
}