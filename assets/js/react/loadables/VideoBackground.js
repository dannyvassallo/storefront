import './style.scss'
import LoadableVisibility from 'react-loadable-visibility/react-loadable'
import Loader from 'react-loaders'
import React, {Component} from 'react'
import 'loaders.css/src/animations/line-scale-random.scss'

export default LoadableVisibility({
  loader: () => import('../components/VideoBackground/index'),
  loading: () => (
    <div className="video-background-loader">
      <Loader type="line-scale-party" />
    </div>
  ),
})
