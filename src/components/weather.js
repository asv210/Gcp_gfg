import React, { useEffect, useState } from 'react'
import '../weather.css'
import image from '../images/dot.png'

const Weather = () => {

  const [city, setCity] = useState("Mumbai")
  const [min, setMin] = useState([0, 0, 0, 0, 0])
  const [max, setMax] = useState([0, 0, 0, 0, 0])
  const [img, setImg] = useState([{ image }, { image }, { image }, { image }, { image }])
  const [day, setDay] = useState([0, 0, 0, 0, 0])


  function getData() {
    setDay([setWeekDay(0), setWeekDay(1), setWeekDay(2), setWeekDay(3), setWeekDay(4)])
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setMin([Number(data.list[0].main.temp_min - 273.15).toFixed(1), Number(data.list[1].main.temp_min - 273.15).toFixed(1), Number(data.list[2].main.temp_min - 273.15).toFixed(1), Number(data.list[3].main.temp_min - 273.15).toFixed(1), Number(data.list[4].main.temp_min - 273.15).toFixed(1)])
        setMax([Number(data.list[0].main.temp_max - 273.15).toFixed(1), Number(data.list[1].main.temp_max - 273.15).toFixed(1), Number(data.list[2].main.temp_max - 273.15).toFixed(1), Number(data.list[3].main.temp_max - 273.15).toFixed(1), Number(data.list[4].main.temp_max - 273.15).toFixed(1)])
        setImg([`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`, `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`, `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`, `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`, `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`])
      })
      .catch(err => alert("Something went wrong..." + err))

  }

  useEffect(() => {
    getData()
  })

  const d = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  function setWeekDay(day) {
    if (day + d.getDay() > 6) {
      return day + d.getDay() - 7
    }
    else {
      return day + d.getDay()
    }
  }

  // for (let i = 0; i < 5; i++) {
  //   if (document.getElementById('day' + (i + 1)) != null) {
  //     document.getElementById('day' + (i + 1)).innerHTML = days[setWeekDay(i)]
  //   }
  // }

  return (
    <>
      <div>
        <center style={{ display: 'inline-flex' }}>
          <p id='input'>City: <input type="text" name="" id="cityInput" onChange={() => setCity(document.getElementById('cityInput').value)} /></p>
          <button onClick={getData}>Show</button>
          <h2>{city}</h2>
        </center>
        <center>

          <div className="icon">
            <p className='weather'>{days[d.getDay()]}</p>
            <div className='image'> <img src={img[4]} className='imgclass' alt="" id='img1' /> </div>
            <p className='minValues' id='day5Min'>Min: {min[0]}°C</p>
            <p className='maxValues' id='day5Max'>Max: {max[0]}°C</p>
          </div>
        </center>

        <div id='weatherContainer'>
          <div id='iconsContainer'>
            <div className="icons">
              <p className='weather' id='day1'>{days[day[0]]}</p>
              <div className='image'> <img src={img[0]} className='imgclass' alt="" id='img1' /> </div>
              <p className='minValues' id='day1Min'>Min: {min[0]}°C</p>
              <p className='maxValues' id='day1Max'>Max: {max[0]}°C</p>
            </div>
            <div className="icons">
              <p className='weather' id='day2'>{days[day[1]]}</p>
              <div className='image'> <img src={img[1]} className='imgclass' alt="" id='img2' /> </div>
              <p className='minValues' id='day2Min'>Min: {min[1]}°C</p>
              <p className='maxValues' id='day2Max'>Max: {max[1]}°C</p>
            </div>
            <div className="icons">
              <p className='weather' id='day3'>{days[day[2]]}</p>
              <div className='image'> <img src={img[2]} className='imgclass' alt="" id='img3' /> </div>
              <p className='minValues' id='day3Min'>Min: {min[2]}°C</p>
              <p className='maxValues' id='day3Max'>Max: {max[2]}°C</p>
            </div>
            <div className="icons">
              <p className='weather' id='day4'>{days[day[3]]}</p>
              <div className='image'> <img src={img[3]} className='imgclass' alt="" id='img4' /> </div>
              <p className='minValues' id='day4Min'>Min: {min[3]}°C</p>
              <p className='maxValues' id='day4Max'>Max: {max[3]}°C</p>
            </div>
            <div className="icons">
              <p className='weather' id='day5'>{days[day[4]]}</p>
              <div className='image'> <img src={img[4]} className='imgclass' alt="" id='img5' /> </div>
              <p className='minValues' id='day5Min'>Min: {min[4]}°C</p>
              <p className='maxValues' id='day5Max'>Max: {max[4]}°C</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather