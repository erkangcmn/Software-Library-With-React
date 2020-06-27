import React, { Component } from 'react';
import data from './data/data.json';
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import alertify from 'alertifyjs'

class Home extends Component {
  state = {
    istrue: false,
    headerName: '',
    arr: [],
    getName: "",
    npmArr: [],
    saveType: ""
  }
  onListGroupClick = (e) =>{
    console.log(e.target)
    if(e.target.id === "react"){
      this.setState({
        istrue: true,
        headerName: 'React',
        arr: data.react,
        getName: "React",
      })
    }else if(e.target.id === "nodejs"){
      this.setState({
        istrue: true,
        headerName: 'NodeJS',
        arr: data.nodejs,
        getName: "NodeJS"
      })
    }else{
      this.setState({
        istrue: true,
        headerName: 'React Native',
        arr: data.reactNat,
        getName: "React Native"
      })
    }

  }



  onUseLibClick = (npmLibs, e) => {

    let npmArr = this.state.npmArr;
    let AddedLib = npmArr.find(c => c.npmLibs.id === npmLibs.id)
    if (AddedLib) {
      alertify.error('Bu kütüphaneyi zaten eklediniz.');
    } else {
      this.setState({
        npmArr: [...this.state.npmArr, { npmLibs }]
      })

      alertify.success('Başarıyla Eklendi');
    }

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

    const { istrue, headerName, arr, getName, npmArr,saveType } = this.state;

    return (
      <>


        <div className="mt-5">
          
          <Row>
            <Col xs={2} className="mt-5">

              <ListGroup className="mt-4 menu" variant="flush"onClick={this.onListGroupClick}>
                {
                  getName === "React" ? 
                    <ListGroupItem id ="react" className="justify-content-between active">React </ListGroupItem>
                  : <ListGroupItem id ="react" className="justify-content-between">React </ListGroupItem>
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

            </Col>
                
            <Col>
              <h1 className="display-4">{
                istrue ?
                  <span> {headerName}</span>
                  : <span>Yazılım Kütüphanesi</span>
              }</h1>

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
             

              <table className="table table-borderless">
                <tbody>

                  {
                    arr.map(i => {
                      return (
                        <tr key={i.id}>

                          <th scope="row" className="lib-name">
                            <a href={i.url} target="_blank">{i.name}</a>
                            </th>
                   
                          <td>{i.info}</td>
                          <td><button onClick={this.onUseLibClick.bind(this, i)} type="button" className="btn btn-outline-success">Kullan</button></td>
                        </tr>
                      )

                    })
                  }

                </tbody>
              </table>

            </Col>
          </Row>
        </div>

      </>
    )
  }
}

export default Home
