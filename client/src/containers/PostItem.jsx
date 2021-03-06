import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea, Grid, Image } from 'semantic-ui-react'

import Autocomplete from '../components/Autocomplete.jsx'
import FileUpload from '../components/FileUpload.jsx'
const categories = [
  'Fashion and Accessories',
  'Home and Garden',
  'Electronics',
  'Baby and Child',
  'Cars and Motors',
  'Sports, Leisure and Games',
  'Movies, Books and Music',
  'Other'
];

//{ key: 'hat', text: 'Hat', value: 'hat' }

const products = categories.map(function(category) {
  return { key: category, text: category, value: category };
});

class PostItem extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      formData: {},
      imageUrl: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.handleImageUrl = this.handleImageUrl.bind(this);
  }

  handleChange(e, { value }) {
    this.setState({ value })
  }

  handleSubmit(e, { formData }) {
    e.preventDefault()
    //this.setState({ formData })
    var data = {};
    data.title = formData.title;
    data.imageUrl = this.state.imageUrl;
    data.details = formData.details;
    data.category = formData.category;
    data.address1 = formData.address1;
    data.address2 = formData.address2;
    data.zip = formData.zip;
    console.log(data);
  }

  handleImageUrl(url){
    this.setState({imageUrl: url});
  }

  componentDidMount() {
    // get users gps location
    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };
    // function success(pos) {
    //   var crd = pos.coords;

    //   console.log('Your current position is:');
    //   console.log(`Latitude : ${crd.latitude}`);
    //   console.log(`Longitude: ${crd.longitude}`);
    //   console.log(`More or less ${crd.accuracy} meters.`);
    // };
    // function error(err) {
    //   console.warn(`ERROR(${err.code}): ${err.message}`);
    // };
    // navigator.geolocation.getCurrentPosition(success, error, options);

  }

  onFocus() {
      console.log('hoho')
  }


  render() {
    const { formData, value } = this.state
    let image = null;
    let src = 'http://react.semantic-ui.com/assets/images/wireframe/image.png'
    if (this.state.imageUrl) {
      src = this.state.imageUrl;
    }
    return (
      <Grid centered>
        <Grid.Row>
          <FileUpload handleImageUrl={this.handleImageUrl}/>  
        </Grid.Row>
        <Grid.Row>
          <Image.Group size='small'>
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
          </Image.Group>         
        </Grid.Row>
        <Grid.Column width={11}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input label='Title' name='title' placeholder='Title' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Address 1' name='address1' placeholder='922 folsom' />
              <Form.Input label='Address2' name='address2' placeholder='#153' />
              <Form.Input label='Zip' name='zip' placeholder='zip' />
            </Form.Group>
            <Form.Select label='Category' name='category' options={products} placeholder='Choose category...' search />
            <Form.TextArea name='details' label='Details' placeholder='Anything else we should know?(optinal)' rows='3' />
            <Button primary type='submit'>Show me the money!</Button>

          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default PostItem;

            // <Message>
              // <pre>formData: {JSON.stringify(this.state, null, 2)}</pre>
            // </Message>


            //<Form.Field>
            //  <label>Autocomplete Address</label>
            //  <Autocomplete name='autocomplete'/>
            //</Form.Field>

          //  <Form.Group widths='equal'>
          //    <Form.Input label='Address1' name='address1' placeholder='Address1' />
          //    <Form.Input label='Address2' name='address2' placeholder='Address2' />
          //    <Form.Input label='Zip code' name='zipcode' placeholder='Zip code' />
          //  </Form.Group>
