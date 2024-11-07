import React from 'react'
import { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

// var overscrollOptions = {
//   enable: true,
//   effect: 'bounce',
//   damping: 0.15,
//   maxOverscroll: 100
// }
var options = {
  damping: 0.07,
  // plugins: {
  //   overscroll: { ...overscrollOptions }
  // }
}

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
    // Scrollbar.use(OverscrollPlugin);
  }, [])
  return null
}

export default SmoothScroll