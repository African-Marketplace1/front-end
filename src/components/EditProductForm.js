import React,{useState, useEffect} from "react"
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

const intialFormValues = {
    name: '',
    category: '',
    price: '',
    description:'',
    image_url: '',
    };
const EditProductForm =(props)=> {
    const {push}= useHistory()
    const {id}= useParams()
    const [formValues, setFormValues] = useState(intialFormValues);

    useEffect(()=> {
        axios.get(`https://africanmarketplace-1.herokuapp.com/products/${id}`)
        .then(res => {
                setFormValues(res.data)
            })
            .catch(err=> {
                console.log(err)
            })
    })
    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`https://africanmarketplace-1.herokuapp.com/products/${id}`, formValues)
        .then(res=> {
                props.setProducts(res.data)
                push(`/products/${id}`)
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    const {name, category, price, description, image_url} = formValues

    return(
        <div className="col">
        <div className="modal-content">
                <form onSubmit={handleSubmit}>
                        <div className="modal-header">						
                                <h4 className="modal-title">Editing <strong>{formValues.name}</strong></h4>
                                        </div>
                                <div className="modal-body">						
                                <div className="form-group">
                                        <label>name</label>
                                                <input value={name} onChange={handleChange} name="name" type="text" className="form-control"/>
                                                </div>				
                                        <div className="form-group">
                                        <label>category</label>
                                                <input value={category} onChange={handleChange} name="category" type="text" className="form-control"/>
                                                </div>
                                        <div className="form-group">
                                        <label>price</label>
                                                <input value={price} onChange={handleChange} name="price" type="text" className="form-control"/>
                                                </div>
                                        <div className="form-group">
                                        <label>image url</label>
                                                <input value={image_url} onChange={handleChange} name="genre" type="text" className="form-control"/>
                                                </div>

                                        <div className="form-group">
                                        <label>Description</label>
                                                <textarea value={description} onChange={handleChange} name="description" className="form-control"></textarea>
                                                </div>		
                                        </div>
                                <div className="modal-footer">			    
                                <input type="submit" className="btn btn-info" value="Save"/>
                                        <Link to={`/categories`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
                                        </div>
                                </form>
                        </div>
                </div>);

}
export default EditProductForm