import { useState } from "react"
import InputField from './InputField'

const CommandLine = (props) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e)
    }

    function handleSubmit(event){
        event.preventDefault()
        props.onSubmit(input)
        setInput('')
      }

    return (
        <div className="cli-wrapper command">
            <form action="" method="get" onSubmit={handleSubmit}> 
                <InputField label="guest@myportfolio: ~" type="text" value={input} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default CommandLine