import React, { useState } from 'react'
import axios from 'axios'
import faker from "faker"

const Upload = () => {
  const username = 'sanya000'
  const name = 'Sanya Sharma'
  const avatar = 'https://media-exp1.licdn.com/dms/image/C5603AQGtDOSyB8b6bQ/profile-displayphoto-shrink_200_200/0/1593001925334?e=1632960000&v=beta&t=99xSD2RB70Kq60e18nTMN_1_29brgUbX5Pt5-6BZ0o0'
  const [video, setVideo] = useState(null)
  const [caption, setCaption] = useState(null)
  const today = new Date()
  const timestamp = today.toISOString()

  let id = faker.random.uuid()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data =  {
        id: id,
        name: name,
        username: username,
        avatar: avatar,
        is_followed: false,
        video: video,
        caption: caption,
        likes: 0,
        comments: 0,
        timestamp: timestamp,
        button_visible: false  
      }

      axios.post('/.netlify/functions/add', data)
      .then((response) => {
        console.log(response)
        })
      .catch((err) => {
        console.error(err)
  })
  }

  return (
    <div className="upload-page">
        <br />
        <h1>Upload video</h1>
        <p>This video will be published to @{username}</p>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='section'>
              <div className="image-upload"></div>
              <div className="form-section">
                <div className='section input-section'>
                  <label className="bold">Caption</label>
                  <input
                    className='input'
                    name='caption'
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </div>
                <div className="break"></div>
                <div className='section input-section'>
                  <label className="bold">Video Url</label>
                  <input
                    className='input'
                    name='video'
                    onChange={(e) => setVideo(e.target.value)}
                  />
                </div>
              </div>
            </div>			
            <button>Post</button>
          </form>
        </div>
    </div>
  )
}

export default Upload