import './InputField.css'

export default function InputField({id, label, type}) {
  return <div>
    <label htmlFor={id}>{label}</label>
    <br/>
    <input className="input-field" id={id} name={id} type={type} />
    <br/>
  </div>
}

