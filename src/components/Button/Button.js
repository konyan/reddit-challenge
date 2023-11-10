import PropTypes from 'prop-types';

const Button = ({text,onClick})=>{
  return(
    <button
      onClick={onClick}
      type="button"
      className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  )
}

Button.propTypes= {
  text:PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired,
}


export default Button;