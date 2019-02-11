import React from 'react';
import Table from './table';

export default () => {

const students = [
    {
      name: 'Rachel',
      course: 'Biology',
      grade: 100
    },
    {
     name: 'John',
     course: 'Film Financing',
     grade: 85
    },
    {
     name: 'EJ',
     course: 'Coding',
     grade: 50
    }
];

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

