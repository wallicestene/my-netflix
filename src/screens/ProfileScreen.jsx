import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
const ProfileScreen = () => {
    const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profileScreen-body">
            <h1>Edit Profile</h1>
            <div className="profileScreen-info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s" alt="" />
                <div className="profileScreen-details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen-plans">
                        <h3>Plans</h3>
                    </div>
                    <button onClick={() => auth.signOut()} 
                    className='profileScreenSignout'>
                        Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen