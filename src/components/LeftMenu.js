import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from "react-redux"

class LeftMenu extends Component {
  state = {
    isTrue: false,
    getName: "",
  }


  onListGroupClick = (e) => {
    this.props.updateIsTrue(true)

    if (e.target.id === "react") {
      this.props.updateLanguage(this.props.data.react)
      this.props.updateName("React")
    } 
    else if (e.target.id === "nodejs") {
      this.props.updateLanguage(this.props.data.nodejs)
      this.props.updateName("NodeJS")
    }
    else {
      this.props.updateLanguage(this.props.data.reactNat)
      this.props.updateName("React Native")
    }

  }
  render() {
    const { getName } = this.props;

    return (

      <div>
        <ListGroup className="mt-4 menu" variant="flush" onClick={this.onListGroupClick}>
          {
            getName === "React" ?
              <ListGroupItem id="react" className="justify-content-between active">React </ListGroupItem>
              : <ListGroupItem id="react" className="justify-content-between">React </ListGroupItem>
          }
          {
            getName === "NodeJS" ?
              <ListGroupItem id="nodejs" className="justify-content-between active">NodeJS </ListGroupItem>
              : <ListGroupItem id="nodejs" className="justify-content-between">NodeJS </ListGroupItem>
          }
          {
            getName === "React Native" ?
              <ListGroupItem id="reactnat" className="justify-content-between active">React Native</ListGroupItem>
              : <ListGroupItem id="reactnat" className="justify-content-between">React Native</ListGroupItem>
          }

        </ListGroup>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    data: state.arrDataReducers,
    getname:state.getNameReducers
  }
}

const mapDispatchToProps = dispatch => ({
  updateLanguage: (language) => {
    dispatch({ type: 'SELECTED_LANGUAGE', payload: language }
    )
  },
  updateIsTrue: (istrue) => {
    dispatch({ type: 'ISTRUE', payload: istrue }
    )
  },
  updateName:(name)=>{
    dispatch({type: 'NAME', payload: name})
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)

