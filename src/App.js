import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './tailwind-config.js'

export default function App() {
  return (
    <div className="p-2">
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        My Dog Breeds
      </h1>
      <Carousel>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Affenpinscher.jpg/200px-Affenpinscher.jpg" alt="Affenpinscher" />
          <p className="legend">Affenpinscher</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Afghan_Hound.jpg/200px-Afghan_Hound.jpg" alt="Afghan Hound" />
          <p className="legend">Afghan Hound</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Aidi.jpg/200px-Aidi.jpg" alt="Aidi" />
          <p className="legend">Aidi</p>
        </div>
      </Carousel>
    </div>
  )
}