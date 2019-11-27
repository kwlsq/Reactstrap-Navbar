import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { Alert } from "reactstrap";
import Axios from 'axios';
import {
    Table,Button, Form
  } from 'reactstrap';

class Home extends Component{
    state={
        data:[]
    }

    componentDidMount(){
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            console.log(res.data)
            this.setState({data:res.data})
            console.log(this.state.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    renderUserData = () =>{
        return this.state.data.map((val, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                    <td>
                        <Button onClick={()=> this.deleteDataSpesifik(val.id)}>Delete</Button> 
                        <Button onClick={()=> this.editData(val.id)}>Edit</Button>
                        </td>
                </tr>
            )
        })
    }

    submitData=()=>{
        var namaDepan = this.refs.namaDepan.value
        var namaBelakang = this.refs.namaBelakang.value
        var email = this.refs.email.value
        Axios.post('http://localhost:2000/users', {
            first_name: namaDepan,
            last_name: namaBelakang,
            email:email
        })
        .then((res) => {
            console.log(res.data);
            Axios.get('http://localhost:2000/users')
            this.componentDidMount()
            this.refs.namaDepan.value=''
            this.refs.namaBelakang.value=''
            this.refs.email.value=''            
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    deleteData = () => {
        var panjang = this.state.data.length;
        console.log(panjang)
        var url = `http://localhost:2000/users/${panjang}`
        Axios.delete(url)
        .then(res => {
            this.componentDidMount()
            console.log(res.data)
        }).catch(error => {
            console.log(error);
        }); 
    }
    deleteDataSpesifik = (a) => {
        var url=`http://localhost:2000/users/${a}`
        Axios.delete(url)
        .then(res => {
            this.componentDidMount()
            console.log(res.data)
        }).catch(error => {
            console.log(error);
        }); 
    }

    render(){
        return(
            <div >
                <Alert color="primary">
                    Ini home!
                </Alert>
                <Link to='/not-home'>
                    <button>
                        pindah ke notHome
                    </button>
                    
                </Link>
                    <Table hover className="text-center">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.renderUserData()}
                        </tbody>
                    </Table>
                    <Form>
                    <input type="text" className='form-control' ref='namaDepan'></input>
                    <input type="text" className='form-control' ref='namaBelakang'></input>
                    <input type="email" className='form-control' ref='email'></input>
                    <Button color='primary' onClick={this.submitData}>
                        Submit
                    </Button>
                    <Button color='danger' onClick={this.deleteData}>
                        Delete
                    </Button>
                    </Form>
            </div>
        )
    }
}

export default Home