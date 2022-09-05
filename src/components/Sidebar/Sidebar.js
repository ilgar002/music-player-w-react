import React from 'react'
import "./Sidebar.scss";
import Sound from './icons/sound.gif';
import Sound2 from './icons/sound-stop.png';
import { RiArrowGoBackLine } from 'react-icons/ri';




const Sidebar = ({ sidebarVisibility, setSidebarVisibility, SongList, currentIndex, setCurrentIndex, onclickChangeSong, isPlaying }) => {

  return (
    <div className={`sidebar ${sidebarVisibility ? "active" : ''}`}>
      <div className='caption'>
        <h2 className='title'>Library</h2>
        <RiArrowGoBackLine className='go-back' onClick={() => setSidebarVisibility(false)} />
      </div>
      <span className="number-items">{`${SongList.length} tracks`}</span>

      <div className="items">
        {SongList.map((el) => {
          return <div key={el.id}
            onClick={() => onclickChangeSong(el.id)}
            className={`item ${el.active ? 'active' : ""}`}>
            <img className='song-cover' src={el.cover} alt="song-cover" />
            <div className="description">
              <span className="song-name">{el.name}</span>
              <span className="artist">{el.artist}</span>
            </div>
            {el.active && isPlaying ?  <img className='sound' src={Sound} alt="sound" /> : null}
            {el.active && !isPlaying ? <img className='sound' src={Sound2} alt="sound" /> : null}
          </div>
        })}
      </div>
    </div >
  )
}

export default Sidebar