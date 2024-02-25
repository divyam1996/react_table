import React from 'react'

function Testcss() {
  return (
    <>
    <div>Testcss</div>
    <div id="sidebar" style={{display : 'inline'}} >
  {/* <script src="build/sidebar.js"></script> */}
  abc
</div>
<div id="map-canvas" style={{display: 'inline-block', width: '90%', height: '50%'}}>abc
</div>
 <div style={{position: 'absolute', left: '50%'}}>
    <div style={{position: 'relative', left: '-50%', border: 'dotted red 1px'}}>
      I am some centered shrink-to-fit content! <br />
      tum te tum
    </div>
  </div>

  <div>

  </div>
</>
  )
}

export default Testcss