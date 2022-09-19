import React from 'react'
import "./Preview.scss"

const Preview = ({ SongList, currentIndex, src }) => {
    return (
        <div className='preview'>
            <div className="song-cover">
                <img src={src} alt="song" />
            </div>
            <div className='song-info'>
                <span className='song-name'>{SongList[currentIndex].name}</span>
                <span className='artist-name'>{SongList[currentIndex].artist}</span>
            </div>
        </div>
    )
}

export default Preview