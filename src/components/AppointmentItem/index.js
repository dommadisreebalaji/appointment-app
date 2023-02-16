// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {list, updateStar} = props
  const {id, title, date, isStarred} = list
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    updateStar(id)
  }

  return (
    <li>
      <p className="list-item">
        <div className="title-date-container">
          <p className="title-heading">{title}</p>
          <p className="time">Date: {date}</p>
        </div>
        <button
          className="button-star"
          type="button"
          onClick={onClickStar}
          data-testid="star"
        >
          <img src={imgUrl} alt="star" className="image-star" />
        </button>
      </p>
    </li>
  )
}

export default AppointmentItem
