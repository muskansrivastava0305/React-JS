import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function List() {
  const employee = [{id:1 , name:"dfjj" , salary:4543}, {id:2, name:"komal" , salary:9000}]

  return (
    <ul>
     { employee.map((employee) => 
    <List key = {employee.id} employee={employee} /> 
  )}
    </ul>
     
  )
}

export default List
