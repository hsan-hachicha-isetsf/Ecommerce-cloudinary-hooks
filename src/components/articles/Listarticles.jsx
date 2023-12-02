import React, { useState,useEffect} from 'react'
import axios from "axios"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Listarticles = () => {
const [x,setX]=useState(5)
  const [articles,setArticles]=useState([])
useEffect(() => {
  fetcharticles()
},[])
  const fetcharticles=async()=>{
    await axios.get("http://localhost:3001/api/articles")
    .then(res=>{
      setArticles(res.data)
      console.log(res.data)
    })
    .catch(error=>{
      console.log(error)

    })



  }
  return (
<div className='container'>
<div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success " >
<div className="container-fluid">

<Link className="btn btn-outline-light" to="/articles/add">
<i class="fa-solid fa-plus"></i>
Ajouter article
</Link>
</div>
</nav>
</div>
<div className="py-4">
    <Table striped bordered hover size="sm" className="table border shadow">
      <thead>
        <tr>
          <th>Image</th>
          <th>Référence</th>
          <th>Désignationb</th>
          <th>Marque</th>
          <th>Prix</th>
          <th>Qté stock</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        { articles.map((art,index)=>
        <tr key={index}>
          <td><img src={art.imageart} width={80} height={80} /></td>
          <td>{art.reference}</td>
          <td>{art.designation}</td>
          <td>{art.marque}</td>
          <td>{art.prix}</td>
          <td>{art.qtestock}</td>
         <td> <Link className="btn btn-outline-primary mx-2" to={`/article/edit/${art._id}`}>
         <i class="fa-solid fa-pen-to-square"></i>
          Edit
        </Link>
         </td>
          <td><Button variant="outline-danger"
          onClick={() => handleDelete(art._id)}
          >
          
          <i class="fa-solid fa-trash"></i>
            Delete</Button></td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Listarticles
