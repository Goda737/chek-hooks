import "./filter.css"
import {useState} from 'react'
 
const Filter = () =>{

    const [title,useTitle]= useState('')
    const [rate,useRate] =useState('')


    return(
        <div className={'filter'}>

            <input type='text' placeholder='Title'/>
            <input type='number' placeholder='Rating'/>
            <div  className ={'button'}>
                <span>Filter</span>
            </div>


        </div>
    )
}
export default Filter