import React, { useEffect, useState } from 'react'
import './style.css'
import coldbg from './assets/cold.jpg'
import hotbg from './assets/hot.jpg'
import { FaArrowAltCircleUp, FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import { getFormatedWeatherData } from './weatherService.js'

// const API_KEY = '20d95618b91441058df248232ae36018'

const InputSection = () => {
  return (
    <div className="section section__inputs">
      <input type="text" name="city" placeholder='Enter city...' />
      <button className="btn">°F</button>
    </div>
  )
}

const TemperatureSection = ({ data, units }) => {
  return (
    <div className="section section__temperature">
      <div className="icon">
        <h3>{data.name}, {data.country}</h3>
        <img src={data.iconURL} alt="weathericon" />
        <h3>{data.description}</h3>
      </div>
      <div className="temperature">
        <h1>{data.temp.toFixed(1)}°{units === 'metric' ? 'C' : 'F'}</h1>
      </div>
    </div>
  )
}

const DescriptionSection = ({data, units}) => {

  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === 'metric' ? 'm/s' : 'm/h'

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: data.temp_min.toFixed(),
      unit: tempUnit
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: data.temp_max.toFixed(),
      unit: tempUnit
    }, {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: data.feels_like.toFixed(),
      unit: tempUnit
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: data.pressure,
      unit: "hPa"
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: data.humidity,
      unit: "%"
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: data.speed.toFixed(),
      unit: windUnit
    }
  ];

  return (
    <div className="section section__description">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{data}{unit}</h2>
        </div>
      ))}
    </div>
  )
}

const WeatherApp = () => {

  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')

  useEffect(() => {
    console.log("Call API...")
    const fetchWeatherData = async () => {
      const data = await getFormatedWeatherData("los angeles") // TODO Should be working through the search bar
      setWeather(data)
      console.log(data)
    }
    fetchWeatherData()
  }, [])

  return (
    <div className="weather_app" style={{ backgroundImage: `url(${hotbg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            < InputSection />
            < TemperatureSection data={weather} units={units} />
            < DescriptionSection data={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherApp