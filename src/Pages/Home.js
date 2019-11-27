import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { Alert } from "reactstrap";
import Axios from 'axios';
import {
    Table,Button, Input, Row,DropdownItem
  } from 'reactstrap';
import Kartu from '../components/cards'
import CobaDropdown from '../components/dropdown'

class Home extends Component{
    state={
        data:[],
        buah:[],
        selectedId:null
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


    renderUserData = (id) =>{
        return this.state.data.map((val, index)=>{
            if(this.state.selectedId===val.id){
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td><Input type='text' placeholder='First Name' innerRef={(editFirstName)=>this.editFirstName=editFirstName}></Input></td>
                        <td><Input type='text' placeholder='Last Name' innerRef={(editLastName)=>this.editLastName=editLastName}></Input></td>
                        <td><Input type='text' placeholder='Email' innerRef={(editEmail)=>this.editEmail=editEmail}></Input></td>
                        <td>
                            <Button color='danger' onClick={this.cancel}>Cancel</Button> 
                            <Button color='success' onClick={()=> this.editData(val.id)}>Confirm</Button>
                            </td>
                    </tr>
                )
            }

                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{val.first_name}</td>
                        <td>{val.last_name}</td>
                        <td>{val.email}</td>
                        <td>
                            <Button color='danger' onClick={()=> this.deleteData(val.id)}>Delete</Button> 
                            <Button color='warning' onClick={()=> this.edit(val.id)}>Edit</Button>
                            </td>
                    </tr>
                )
        })
    }

    edit=(id)=>{
        this.setState({selectedId:id})
        
    }

    cancel=()=>{
        this.setState({selectedId:null})
    }
    
    deleteData=(id)=>{
        this.setState({selectedId:id})
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

    editData=(id)=>{
        var url=`http://localhost:2000/users/${id}`
        var editFirstName = this.editFirstName.value
        var editLastName = this.editLastName.value
        var editEmail = this.editEmail.value
        
        if(editFirstName===''){
            editFirstName=this.state.data[id-1].first_name
        }
        if(editLastName===''){
            editLastName=this.state.data[id-1].last_name
        }
        if(editEmail===''){
            editEmail=this.state.data[id-1].email
        }
        Axios.put(url,{
            first_name:editFirstName,
            last_name:editLastName,
            email:editEmail
        })
        .then((res)=>{
            this.componentDidMount()
            this.setState({selectedId:null})
        })
        .catch((err)=>{
            console.log(err)
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

    renderCard = () => {
        return this.state.data.map((val) => {
            return(
                <Kartu contoh={val.first_name} contoh2={val.last_name} contoh3={val.email}/>
            )
        })
    }


    renderDropdown=()=>{
        return this.state.data.map((val) => {
            return(
            <DropdownItem>{val.first_name}</DropdownItem>
            )
        })
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
                        <tfoot>
                            <tr>
                                <td>#</td>
                                <td><input type="text" className='form-control text-center' ref='namaDepan' placeholder='First Name'></input></td>
                                <td><input type="text" className='form-control text-center' ref='namaBelakang' placeholder='Last Name'></input></td>
                                <td><input type="email" className='form-control text-center' ref='email' placeholder='Email'></input></td>
                                <td>
                                <Button color='primary' onClick={this.submitData}>
                                    Submit
                                </Button>
                                <Button color='danger' onClick={this.deleteData}>
                                    Delete
                                </Button>
                                </td>
                            </tr>
                        </tfoot>
                    </Table>              
                    <Row>
                        <CobaDropdown x={this.renderDropdown()}/>
                    </Row>     
                    <Row>
                        {this.renderCard()}
                    </Row>           
            </div>
        )
    }
}

export default Home