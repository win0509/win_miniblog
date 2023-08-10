import React from 'react'

import "./Profile.css"


const Profile = () => {
  return (
    <div className='Profile'>
        <div className='profile-img'></div>
        <div className='intro'>
            <h2 className='title'>뚠빵이</h2>
            <p>에버랜드 판다월드 바오가족<br/>
                건강하고 행복하기 아이바오<br/>
                러바오 푸바오 첫째바오 둘째바오
            </p>
        </div>
        <button>프로필</button>
    </div>
  )
}

export default Profile