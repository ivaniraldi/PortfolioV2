import React from 'react'

export default function ProgressBar({ progress=0, completed=false }) {
    let handleComplete = completed? "5px": "0px"
    let handleProgress = progress + "vw"


  return (
    <div style={{
        width: "10vw",
        border: "1px solid black",
        height: "2vh",
        borderRadius: "5px",
        background: "#f7f7f7bf"
    }}>
        <div style={{height:"1.7vh", 
        width: handleProgress, 
        borderRadius: `5px ${handleComplete} ${handleComplete} 5px`,
        background:"#bfd7ea"}}>
        </div>
    </div>
  )
}
