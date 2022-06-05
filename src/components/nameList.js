// List rendering
import React from 'react';

function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
    const persons = [{
        id: 1,
        name: "Bruce",
        age: 30,
        skill: "React"
    }, {
        id: 2,
        name: "Clark",
        age: 25,
        skill: "Angular"
    }, {
        id: 3,
        name: "Diana",
        age: 28,
        skill: "Vue"
    }];
    
    const nameList = names.map( (name, index) => <h1 key={index}>{index}. {name}</h1> );

    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList;