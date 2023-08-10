import React from 'react'

import "./Newpost.css"

const Newpost = () => {
  return (
    <div className='Newpost'>
      <input placeholder='제목'/>
      <textarea placeholder='내용'></textarea>

      <div className='btns'>
        <button>저장</button>
        <button>취소</button>
      </div>
    </div>


  )
}

export default Newpost