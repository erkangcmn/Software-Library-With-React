import React, { Component } from 'react'

class SelectedLib extends Component {
  state ={
    saveType :""
  }

  onRadioButtonClick = (e) => {

    if (e.target.id === "save") {
      this.setState({
        saveType: " --save"
      })
    } else {
      this.setState({
        saveType: " -g"
      })

    }

  }

    render() {
      const {saveType} = this.state;
        return (
            <div>
                 <div className="install p-2 mb-3 bg-primary">npm i 
              
              {npmArr.map(npm =>{
                return(
                  <span className ="ml-2" key={npm.npmLibs.id} >{npm.npmLibs.use}</span>
                )
                
              }
              )}
              <span> </span>{saveType}</div>

              <form onClick={this.onRadioButtonClick}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="npmSave" id="save" value="option1" />
                  <label className="form-check-label" htmlFor="save">--save</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="npmSave" id="global" value="option2" />
                  <label className="form-check-label" htmlFor="global">-g</label>
                </div>
              </form>
                
            </div>
        )
    }
}

export default SelectedLib
