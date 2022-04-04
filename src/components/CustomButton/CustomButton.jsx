import './CustomButton.css'

export default function CustomButton({ buttonText, ...args }) {
  return (
    <button 
      className="button-style" 
      {...args}>
        {buttonText}
    </button>
  )
} 