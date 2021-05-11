import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';





const options = [
    {
        label:'Afrikans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Spanish',
        value:'es'
    }
]



const Translate = () =>{

    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('')
    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text:</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label='Select a language'
            />
            <hr/>
            <h3>Output:</h3>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate;