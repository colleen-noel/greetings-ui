import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')

  const updateName = (event) => {
    if (event.target.value) {
      setName(`It's nice to meet you ${event.target.value}`)
    } else {
      setName('')
    }
  }

  return (
    <div className="page">
      <div className="title">To whom am I speaking?</div>
      <input type="text" name="search" onChange={updateName} />
      <div className="name">{name}</div>
    </div>
  )
}
