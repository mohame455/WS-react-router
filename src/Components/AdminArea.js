import React from 'react'
import { Link } from 'react-router-dom'

const AdminArea = () => {
    return (
        <div>
            <h1>you must be logged to view this page</h1>
           <Link to='/admin/logged'> <button className='btns'>login</button> </Link>
        </div>
    )
}

export default AdminArea
