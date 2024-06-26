import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <div className='font-bold text-3xl text-center'>
                <Link to="/Home">
                    <p>Go to Home</p>
                </Link>
            </div>
        </>
    )
}

export default Register