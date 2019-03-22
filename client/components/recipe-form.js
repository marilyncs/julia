import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
// import InputGroup from 'react-bootstrap/InputGroup'
import PhotoAdd from './photo-add'

class RecipeForm extends Component {
  constructor() {
    super()
    this.createPhoto = this.createPhoto.bind(this)
  }

  createPhoto(newPhoto) {
    console.log('PHOTO:', newPhoto.image)
    const h = {} //headers
    let data = new FormData()
    data.append('image', newPhoto.image)
    data.append('name', newPhoto.name)
    h.Accept = 'application/json' //if you expect JSON response
    fetch('/api/item', {
      method: 'POST',
      headers: h,
      body: data
    })
      .then(response => {})
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <Form>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="/imgPlaceholder.svg"
          />
          <PhotoAdd createPhoto={this.createPhoto} />
          <Figure.Caption>Upload a picture here.</Figure.Caption>
          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Figure>
        <Form.Row>
          <Form.Group controlId="formPrepTime">
            <Form.Label>Prep Time</Form.Label>
            <Form.Control type="prepTime" />
          </Form.Group>

          <Form.Group controlId="formCookTime">
            <Form.Label>Cook Time</Form.Label>
            <Form.Control type="cookTime" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formWaitTime">
            <Form.Label>Wait Time</Form.Label>
            <Form.Control type="waitTime" />
          </Form.Group>

          <Form.Group controlId="servings">
            <Form.Label>Number of servings</Form.Label>
            <Form.Control type="servings" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group md="6" controlId="formTitle">
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control type="title" placeholder="Enter title" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formIngredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="ingredients"
              placeholder="Enter one ingredient"
            />
            <Form.Text className="text-muted">
              Enter each ingredient on its own line.
            </Form.Text>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formInstructions">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              placeholder="Enter one instruction"
            />
            <Form.Text className="text-muted">
              Enter each instruction on its own line.
            </Form.Text>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>Easy</option>
              <option>Intermediate</option>
              <option>Hard</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default RecipeForm