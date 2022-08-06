import '../styles/input.css';

export default function Input(props) {

  const {
    name,
    label,
    type,
    state,
    setState,
    expresion,
    error,
    placeholder
  } = props;

  const handleChange = ({ target }) => {
    setState({
      ...state,
      campo: target.value,
    });
  };

  const validation = () => {
    if (expresion) {
      if (!expresion.test(state.campo)) {
        setState({ ...state, error: true });
      } else {
        setState({ ...state, error: false });
      }
    }
  };
  return (
    <div className='input'>
      <label
        htmlFor={name}
        className={` ${state.error ? 'input__color-red' : 'input__color-black'}`}
      >
        <strong>{label}</strong>
      </label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={state.campo}
        className={`input__campo ${
          state.error ? 'input__color-red' : 'input__color-black'
        }`}
        onChange={handleChange}
        onBlur={() => validation()}
        placeholder={placeholder}
        required
      />

      <span
        className={`${
          state.error ? 'input__opacity-100' : 'input__opacity-0'
        } input__error`}
      >
        {error}
      </span>
    </div>
  );
}