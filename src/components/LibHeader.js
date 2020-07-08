import React, { Component } from 'react'
import {connect} from "react-redux"

class LibHeader extends Component {
    render() {
        const {istrue, getname} = this.props;
        return (
            <div>
                <h1 className="display-4">{
                    istrue ?
                        <span>{getname}</span>
                        : <span>Yazılım Kütüphanesi</span>
                }</h1>

            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        istrue:state.isTrueReducers,
        getname:state.getNameReducers
    }
}


export default connect(mapStateToProps)(LibHeader)
