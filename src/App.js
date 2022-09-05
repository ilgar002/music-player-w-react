import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import Controller from './components/Controller/Controller';
import SongsData from './data.js';



const App = () => {

  const [SongList, setSongList] = useState(SongsData)
  const [currentIndex, setCurrentIndex] = useState(localStorage.getItem("currentIndex") ? Number(localStorage.getItem("currentIndex")) : 0)
  const [percentage, setPercentage] = useState(0)
  const [sidebarVisibility, setSidebarVisibility] = useState(false)
  const [marginLeft, setMarginLeft] = useState(0)
  const filterVisibility = sidebarVisibility
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex)
    SongList[currentIndex].active = true
  }, [currentIndex])


  function onclickChangeSong(id) {
    SongList.forEach((el, index) => {
      if (el.id === id) {
        setCurrentIndex(index)
        SongList[currentIndex].active = false
        SongList[index].active = true
      }
    });
    setPercentage(0)
    setMarginLeft(0)
    audioRef.current.currentTime = 0
  }


  return (
    <div className="container">
      <div className="left-container">
        <Sidebar
          sidebarVisibility={sidebarVisibility}
          setSidebarVisibility={setSidebarVisibility}
          isPlaying={isPlaying}
          SongList={SongList}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onclickChangeSong={onclickChangeSong}
        />
      </div>
      <div className='right-container'>
        <Header
          setSidebarVisibility={setSidebarVisibility}
        />
        <Preview SongList={SongList} currentIndex={currentIndex} />
        <Controller
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          marginLeft={marginLeft}
          setMarginLeft={setMarginLeft}
          percentage={percentage}
          setPercentage={setPercentage}
          SongList={SongList}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      {filterVisibility ? <div className="filter-layout" onClick={() => setSidebarVisibility(false)}></div> : null}
    </div>

  )
}

export default App