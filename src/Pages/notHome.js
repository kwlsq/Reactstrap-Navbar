import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class notHome extends Component{
    render(){
        return(
            <div>
                ini bukan Home
                <Link to='/'>
                    <button>
                        pindah ke Home
                    </button>
                </Link>
            </div>
        )
    }
}

export default notHome