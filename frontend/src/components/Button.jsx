const Button = ({text,onSubmit}) => {
  return <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-7" onClick={onSubmit}>{text}</button>
}

Button.defaultProps = {
    text: 'Text'
}

export default Button