import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/Header';

const items = [
    {
        title:'What is React????',
        content:'React is a frontend framwork'
    },
    {
        title:'Why use React?',
        content:'Because it\'s the most used JavaScript frontend framework'
    },
    {
        title:'How do you use React?',
        content:'By creating React components'
    }
]

const options = [
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'green'
    },
    {
        label:'A Shade Of Blue',
        value:'blue'
    }
]


export default () => {
    const [selected,setSelected] = useState(options[0]);
    return (
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    selected={selected} 
                    options={options}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path ='/translate'>
                <Translate/>
            </Route>
        </div>
    )
}