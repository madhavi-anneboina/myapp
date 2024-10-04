import React from 'react';
import Person from './Person';


const NameList = () => {
    const personList = [
        {
            id :1,
            name : "mad",
            city : "hyd",
            county : "deklab"

        },
        {
            id :2,
            name : "vaad",
            city : "kyd",
            county : "peklab"
        }
    ]
  return (
    <div>
    {personList.map(person=>
       <Person  key="person.id" person={person}></Person>

    )}
    </div>
  )
}

export default NameList