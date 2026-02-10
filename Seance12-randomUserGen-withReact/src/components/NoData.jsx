import React from 'react'
import './NoData.css'


export default function NoData() {
  return (
    <div className='noDataContainer'>
        <img src="https://siliconangle.com/files/2013/02/no-data.png" alt="no data" />
        <p className='noData'>Sorry No Data Available to Show</p>
    </div>
  )
}
