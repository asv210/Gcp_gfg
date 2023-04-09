import React from 'react'

const about = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div className="box mx-5" style={
          {
            justifyContent: 'center',
            display: 'flex',
            boxShadow: '0px 0px 5px rgb(0 0 0 / 40%)',
            width: '100%',
            height: '550px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px'
          }
        }>
          <h1 className='h mt-4'>About us</h1>
        </div >
      </div >
    </>
  )
}

export default about