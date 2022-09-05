import React from 'react'
import "./Preview.scss"

const Preview = ({ SongList, currentIndex }) => {
    return (
        <div className='preview'>
            <div className="song-cover">
                <img srcSet={SongList[currentIndex].cover} alt="Song Image" />
            </div>
            <div className='song-info'>
                <span className='song-name'>{SongList[currentIndex].name}</span>
                <span className='artist-name'>{SongList[currentIndex].artist}</span>
            </div>
        </div>
    )
}

export default Preview