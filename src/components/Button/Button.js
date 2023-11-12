import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ text, onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames(
        'inline-flex cursor-pointer items-center gap-x-1.5 rounded-full  px-4 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ',
        className
      )}
    >
      {icon}
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
  className: PropTypes.string,
}

export default Button
