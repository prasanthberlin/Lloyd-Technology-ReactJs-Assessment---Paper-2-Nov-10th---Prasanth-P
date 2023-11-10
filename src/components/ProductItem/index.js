import {AiFillPlusCircle} from 'react-icons/ai'

import './index.css'

const ProductItem = props => {
  const {renderItem} = props
  const {name, image, price, weight} = renderItem

  return (
    <li className="each-product-list-item">
      <img src={image} className="img-resize" alt={name} />
      <AiFillPlusCircle size="35" color="#0ceb65" />
      <h4>{price}</h4>
      <p className="item-name">{name}</p>
      <p className="weight-details">{weight}</p>
    </li>
  )
}
export default ProductItem
