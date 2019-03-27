import React, {Component} from 'react'
import OneRecipeCard from './all-recipes-card'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllRecipesThunk} from '../store'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

export class AllRecipes extends Component {
  componentDidMount() {
    this.props.getAllRecipesThunkDispatch()
  }

  render() {
    const allRecipes = this.props.allRecipes || []
    const recipe = allRecipes.length ? (
      allRecipes.map(r => {
        return (
          <Col key={r.id} xs="12" sm="6" md="4" lg="3">
            <Link to={`/recipes/${r.id}`}>
              {' '}
              <OneRecipeCard recipe={r} />
            </Link>
          </Col>
        )
      })
    ) : (
      <div>Empty</div>
    )

    return (
      <div className="home-page">
        <Row>
          <Image className="header" src="/testcopy.jpg" />
        </Row>
        <Row>
          {allRecipes.length ? (
            <CardGroup>{recipe}</CardGroup>
          ) : (
            <div className="loading">
              <img src="https://cdn.dribbble.com/users/82578/screenshots/2338455/loadinganimation.gif" />
            </div>
          )}
        </Row>
      </div>
    )
  }
}

const mapState = state => {
  return {
    allRecipes: state.recipe.recipes
  }
}

const mapDispatch = dispatch => {
  return {
    getAllRecipesThunkDispatch: () => dispatch(getAllRecipesThunk())
  }
}

export default connect(mapState, mapDispatch)(AllRecipes)
