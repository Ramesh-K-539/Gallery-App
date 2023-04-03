// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, userClickBtn, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const onClickImg = () => {
    userClickBtn(id)
  }

  const isActiveImg = isActive ? 'active' : ''

  return (
    <li className="list-item">
      <button type="button" onClick={onClickImg} className="custom-btn">
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={`img ${isActiveImg}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
