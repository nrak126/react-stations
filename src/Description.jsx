// @ts-check

import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('')

  const handleClick = async () => {
    const fetchDog = await fetch('https://dog.ceo/api/breeds/image/random')
    const dogData = await fetchDog.json()
    setDogUrl(dogData.message)
  }

  return (
    <div className="container">
      <div>
        <h2>犬の画像を表示するサイトです</h2>
        <button onClick={handleClick}>更新</button>
      </div>
      <DogImage dogUrl={dogUrl} />
    </div>
  )
}

export default Description
