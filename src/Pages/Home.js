import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Alert } from "reactstrap";

class Home extends Component{
    render(){
        return(
            <div>
                <Alert color="primary">
                    Ini home!
                </Alert>
                <Link to='/not-home'>
                    <button>
                        pindah ke notHome
                    </button>
                    
                </Link>
            </div>
        )
    }
}

export default Home