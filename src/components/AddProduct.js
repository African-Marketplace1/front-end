import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const initialFormValues = {
    name:'',
    category:'',
    price:'',
    description:'',
    image_url:''
}
function AddProduct(){
    const history = useHistory()
    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange= e => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        const newProduct = {
            name: formValues.name,
            category: formValues.category,
            price: formValues.price,
            description: formValues.description,
            image_url: formValues.image_url
        }
    }
    const classes = useStyles()
    return (
        <div>
          <form onSubmit={onSubmit}>
            <TextField
              id="outlined-basic"
              name="name"
              label="name"
              variant="outlined"
              value={formValues.name}
              onChange={onChange}
            />
            <TextField
              id="outlined-basic"
              name="category"
              label="category"
              variant="outlined"
              value={formValues.category}
              onChange={onChange}
            />
            <TextField
              id="outlined-basic"
              name="price"
              label="price"
              variant="outlined"
              value={formValues.price}
              onChange={onChange}
            />
            <TextField 
                id="outlined-basic"
                name = "description"
                lable="description"
                variant= "outlined"
                value = {formValues.description}
                onChange= {onChange}
            />
            <TextField
              id="outlined-basic"
              name="image_url"
              label="Image URL"
              variant="outlined"
              value={formValues.image_url}
              onChange={onChange}
            />
    
            <div>
              <Button variant="contained" color="secondary" type="submit">
                save
              </Button>
              <Link to="https://africanmarketplace-1.herokuapp.com/products">
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      );
}
export default AddProduct
