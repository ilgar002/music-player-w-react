import React, { useState, useRef, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa';
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { TbPlayerTrackPrev, TbPlayerTrackNext, TbRepeat, TbRepeatOnce } from 'react-icons/tb';
import "./Controller.scss";
import Slider from './Slider/Slider';

const Controller = ({ SongList, isPlaying, setIsPlaying, currentIndex, setCurrentIndex, percentage, setPercentage, marginLeft, setMarginLeft, audioRef }) => {
    const [progressBarWidth, setProgressBarWidth] = useState(0)
    const [currentTime, setCurrentTime] = useState("0.00")
    const [remainingTime, setRemainingTime] = useState("0.00")
    const [ismuted, setIsMuted] = useState(false)
    const inputTimeRef = useRef()
    const inputVolumeRef = useRef()
    //volume
    const [volume, setVolume] = useState(1)
    const [marginLeftVolume, setMarginLeftVolume] = useState(-12)
    const [volumePercent, setVolumePercent] = useState(100)
    const [progressBarWidthVolume, setProgressBarWidthVolume] = useState(0)
    const [repeatMusic, setRepeatMusic] = useState(false)

    useEffect(() => {
        const rangeWidth = inputTimeRef.current.getBoundingClientRect().width
        const thumbWidth = 13
        const centerProgressBar = thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
        setProgressBarWidth(centerProgressBar)
    }, [percentage])

    useEffect(() => {
        const rangeWidth = inputVolumeRef.current.getBoundingClientRect().width
        const thumbWidth = 12
        const centerProgressBar = thumbWidth + (rangeWidth / 100) * volumePercent - (thumbWidth / 100) * volumePercent
        setProgressBarWidthVolume(centerProgressBar)
    }, [volumePercent])


    function convertToSeconds(value) {
        value = Number(value)
        let minutes = parseInt(value / 60)
        let seconds = parseInt(value % 60)
        seconds = seconds >= 10 ? `${seconds}` : `0${seconds}`
        let result = `${minutes}:${seconds}`
        return result
    }

    function onChangeHandler(e) {
        setMarginLeft((13 / 100) * percentage * -1)
        setPercentage(e.target.value)
        audioRef.current.currentTime = (audioRef.current.duration / 100) * e.target.value
        setRemainingTime(convertToSeconds(parseInt(audioRef.current.duration - audioRef.current.currentTime)))
    }

    function onChangeHandlerVolume(e) {
        setMarginLeftVolume((12 / 100) * volumePercent * -1)
        setVolumePercent(e.target.value)
        setVolume(e.target.value / 100)
        audioRef.current.volume = e.target.value / 100
        Number(e.target.value) === 0 ? setIsMuted(true) : setIsMuted(false);
        Number(e.target.value) === 0 ? audioRef.current.muted = true : audioRef.current.muted = false;
    }
    function onVolumeClick() {
        audioRef.current.muted = !audioRef.current.muted
        setIsMuted((prevState) => !prevState)
        if (volume !== 0) {
            if (!ismuted) {
                setVolumePercent(0)
                setMarginLeftVolume(0)
                setProgressBarWidthVolume(0)
                audioRef.current.muted = true
            }
            else {
                setVolumePercent(volume * 100)
                setMarginLeftVolume((12 / 100) * volume * 100 * -1)
                audioRef.current.muted = false
            }
        }
        else {
            audioRef.current.muted = false
            audioRef.current.volume = 0.2
            setVolume(0.2)
            setVolumePercent(20)
        }

        console.log(audioRef.current.muted);
    }

    function mouseEventVolume() {
        setMarginLeftVolume((12 / 100) * volumePercent * -1)
    }

    function onPlayingHandler(e) {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(1)
        const time = parseInt(e.currentTarget.currentTime)
        const remainingTime = parseInt(e.currentTarget.duration) - time
        setPercentage(percent)
        setCurrentTime(convertToSeconds(time))
        if (remainingTime) {
            setRemainingTime(convertToSeconds(remainingTime))
        }
        setMarginLeft((13 / 100) * percent * -1)
    }

    function onMouseUp() {
        audioRef.current.play()
    }

    function onMouseDown() {
        audioRef.current.pause()
    }

    function onLoadedDataHandler() {
        setRemainingTime(convertToSeconds(parseInt(audioRef.current.duration)))
        if (isPlaying) {
            audioRef.current.play()
        }
    }

    function onClickPlay() {
        setIsPlaying((prevState) => !prevState)
        if (isPlaying) {
            audioRef.current.pause()
        }
        else {
            audioRef.current.play()
        }
    }

    function reset() {
        setCurrentTime("0.00")
        setIsPlaying(true)
        setPercentage(0)
        setMarginLeft(0)
        setRemainingTime("0.00")
    }

    function onClickNext() {
        let max = SongList.length - 1
        if (!repeatMusic) {
            setCurrentIndex((prevState) => prevState < max ? prevState += 1 : 0)
            if (currentIndex < max) {
                SongList[currentIndex].active = false
            }
            else {
                SongList[currentIndex].active = false
            }
        }
        else {
            audioRef.current.currentTime = 0
        }
        reset()
    }
    function onClickPrev() {
        if (!repeatMusic) {
            setCurrentIndex((prevState) => prevState > 0 ? prevState -= 1 : 0)
            if (currentIndex > 1) {
                SongList[currentIndex].active = false
                SongList[currentIndex -= 1].active = true
            }
            else {
                SongList[currentIndex].active = false
                SongList[0].active = true
            }
        }
        reset()
        audioRef.current.currentTime = 0
    }


    return (
        <div className='Controller' >
            <div className="audio">
                <audio
                    onTimeUpdate={onPlayingHandler}
                    onLoadedData={() => onLoadedDataHandler()}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => {
                        onClickNext()
                        audioRef.current.play()
                    }}
                    ref={audioRef}
                    src={SongList[currentIndex].audio}
                    type="audio/mpeg"
                >
                </audio>
                <div className="xs-container">
                    <span className="currentTime">{currentTime}</span>
                    <Slider
                        value={percentage}
                        step='0.01'
                        inputRef={inputTimeRef}
                        onChange={onChangeHandler}
                        percentage={percentage}
                        progressBarWidth={progressBarWidth}
                        marginLeft={marginLeft}
                        progressHeight={"7px"}
                        sliderWidth={"100%"}
                        thumbSize={'13px'}
                        sliderColor={{
                            thumb: `${SongList[currentIndex].color[1]}`,
                            progress: `linear-gradient(90deg, ${SongList[currentIndex].color[0]}, ${SongList[currentIndex].color[1]} )`,
                            backGround: '#CCCCCC',
                        }}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                    />
                    <span className="remainingTime">{remainingTime}</span>
                </div>
            </div>
            <div className="control-buttons">
                {repeatMusic ?
                    <TbRepeatOnce
                        style={{ fill: "none" }}
                        onClick={() => setRepeatMusic((prevState) => !prevState)}
                        className="repeat"
                    />
                    : <TbRepeat
                        style={{ fill: "none" }}
                        onClick={() => setRepeatMusic((prevState) => !prevState)}
                        className="repeat"
                    />}
                <TbPlayerTrackPrev
                    onClick={onClickPrev}
                    className="prev"
                />
                {isPlaying ? <FaPause onClick={onClickPlay}
                    className='play-pause' /> : < FaPlay onClick={onClickPlay}
                        className='play-pause' />}
                <TbPlayerTrackNext
                    onClick={onClickNext}
                    className="next"
                />
                <div className="volume-area">
                    {ismuted ? <BsFillVolumeMuteFill className='volume' onClick={() => onVolumeClick()} /> : <BsFillVolumeUpFill className='volume' onClick={() => onVolumeClick()} />}
                    <Slider
                        value={volumePercent}
                        step='1'
                        inputRef={inputVolumeRef}
                        onChange={onChangeHandlerVolume}
                        percentage={volumePercent}
                        progressBarWidth={progressBarWidthVolume}
                        marginLeft={marginLeftVolume}
                        progressHeight={"5px"}
                        thumbSize={"12px"}
                        sliderWidth={"120px"}
                        sliderColor={{
                            thumb: `#F8F7F3`,
                            progress: `#F8F7F3`,
                            backGround: `#928f8f`,
                        }}
                        onMouseDown={mouseEventVolume}
                        onMouseUp={mouseEventVolume}
                    />
                </div>
            </div>
        </div >
    )
}
export default Controller