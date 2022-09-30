import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      homePage
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/customers">
          <li>Customers</li>
        </Link>
        <Link to="/addcustomer">
          <li>Add</li>
        </Link>
      </ul>
    </div>
  )
}
