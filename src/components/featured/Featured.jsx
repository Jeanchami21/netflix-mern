import './featured.scss'

import { InfoOutlined, PlayArrow } from '@material-ui/icons'

export default function Featured({ type }) {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'movies' : 'series'} </span>
          <select name='genre' id='genre'>
            <option>Genre</option>

            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img
        src='https://p4.wallpaperbetter.com/wallpaper/455/861/85/jurassic-world-fallen-kingdom-2018-4k-8k-wallpaper-preview.jpg'
        alt=''
      />
      <div className='info'>
        <img
          src='https://upload.wikimedia.org/wikipedia/fr/d/d8/Jurassic_World_Logo.png'
          alt=''
        />
        <span className='description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
          excepturi rerum corrupti? Ea fugiat odio quasi, amet quas ut neque
          exercitationem eos.
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
