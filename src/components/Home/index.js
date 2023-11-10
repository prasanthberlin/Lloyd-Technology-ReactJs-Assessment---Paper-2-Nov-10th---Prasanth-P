import {Component} from 'react'

import Header from '../Header'
import Category from '../Category'
import Product from '../Product'

import './index.css'

class Home extends Component {
  state = {
    categoryList: [],
  }

  renderCategroyList = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
    )

    const fetchData = await response.json()

    this.setState({categoryList: fetchData.categories})
  }

  componentDidMount = () => {
    this.renderCategroyList()
  }

  render() {
    const {categoryList} = this.state

    return (
      <>
        <Header />
        <div className="body-container">
          <div>
            <ul className="categories-section-container">
              {categoryList.map(eachList => (
                <Category key={eachList.name} eachCategory={eachList} />
              ))}
            </ul>
          </div>
          <div>
            <ul className="product-section-container">
              {categoryList.map(eachProductList => (
                <Product
                  key={eachProductList.name}
                  eachProductCategory={eachProductList}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Home
