// @ts-check

export const DogImage = ({ dogUrl }) => {
  return (
    <div className="dogContiner">
      <img className="dogImg" src={dogUrl} />
    </div>
  )
}

export default DogImage
