import ProductItem from '../ProductItem'

import {FaGreaterThan} from 'react-icons/fa6'

import './index.css'

const Product = props => {
  const {eachProductCategory} = props
  const {name, products} = eachProductCategory

  console.log(name)
  console.log(products)

  return (
    <li className="category-items">
      <div className="each-product-heading-container">
        <div className="product-heading-container">
          <h3 className="product-heading">{name}</h3>
          <FaGreaterThan />
        </div>
        <p className="view-all-text">View all</p>
      </div>
      <div>
        <ul className="each-product-item">
          {products.map(eachItem => (
            <ProductItem key={eachItem.id} renderItem={eachItem} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Product
