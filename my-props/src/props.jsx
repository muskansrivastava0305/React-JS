import React from 'react'

// export default function Props(prop) {

export default class Props extends React.Component{
  render()
  {
  return (
    <div>
        {/* //</div>h1>{prop.text.name} </h1> */}
        <h1>{this.props.text} </h1>
    </div>
  )
}
}