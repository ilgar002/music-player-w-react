import React from 'react';
import "./Slider.scss";

const Progress = ({ value, step, onChange, percentage, sliderColor, sliderWidth, thumbSize, marginLeft, progressHeight, onMouseUp, onMouseDown, inputRef, progressBarWidth }) => {
    return (
        <div className='slider' style={{ background: `${sliderColor.backGround}`, width: sliderWidth, }}>
            <input
                type="range"
                step={step}
                value={value}
                ref={inputRef}
                onChange={(e) => onChange(e)}
                onMouseUp={() => onMouseUp()}
                onMouseDown={() => onMouseDown()}

            ></input>
            <div className="progress" style={{ width: `${progressBarWidth}px`, height: `${progressHeight}`, background: `${sliderColor.progress}` }}></div>
            <div
                className="thumb"
                style={{ width: thumbSize, height: thumbSize, background: `${sliderColor.thumb}`, left: `${percentage}%`, marginLeft: `${marginLeft}px` }}
            ></div>
        </div >
    )
}

export default Progress