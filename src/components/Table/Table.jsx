import React from 'react'
import './Tables.css'
function Table() {
  return (
    <div className='table_container'>
      <div className="table-top-part">
        <h1>BOOK YOUR TABLE</h1>
        <p>We accept reservation. Call us or complete the form below</p>
      </div>
      <div className='table_part'>
        <div className="reservations">
          <h2>MAKE A RESERVATION</h2>
          <p>You may make a reservation any time or by calling 000000000</p>
        </div>

        <div className="input-fileds">
          <input type="text" placeholder='Name*'/>
          <input type="text" placeholder='Phone*' />
          <input type="text" placeholder='Time*' />
          <input type="text" placeholder='Seats*' />
          <input type="date" placeholder='Date*' />
        </div>
        <div className="button">
            <button>BOOK NOW</button>
          </div>

      </div>
    </div>
  )
}

export default Table