import './index.css'

const Category = props => {
  const {eachCategory} = props
  const {name, products} = eachCategory

  console.log(name)
  console.log(products)

  return (
    <li className="category-items">
      <p>{name}</p>
    </li>
  )
}

export default Category
