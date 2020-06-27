import React, { Component } from 'react';
import data from './data/data.json';
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import  alertify from 'alertifyjs'

class Home extends Component {
  state = {
    istrue: false,
    headerName: '',
    arr: [],
    getName: "",
    npmArr: []
  }
  onNodejsClick = (e) => {

    this.setState({
      istrue: true,
      headerName: 'NodeJS',
      arr: data.nodejs,
      getName: "NodeJS"
    })
  }

  onReactClick = (e) => {
    this.setState({
      istrue: true,
      headerName: 'React',
      arr: data.react,
      getName: "React",
    })
  }

  onReactNatClick = (e) => {
    this.setState({
      istrue: true,
      headerName: 'React Native',
      arr: data.reactNat,
      getName: "React Native"
    })
  }
  onUseLibClick = (npmLibs, e) => {
   
    let npmArr = this.state.npmArr;
    let AddedLib = npmArr.find(c =>c.npmLibs.id === npmLibs.id)
    if(AddedLib){
      alertify.error('Bu kütüphaneyi zaten eklediniz.');
    }else{
      this.setState({
        npmArr: [...this.state.npmArr, {npmLibs}]
      })
     
      alertify.success('Başarıyla Eklendi');
    }
   
  }




  render() {

    const { istrue, headerName, arr, getName, npmArr } = this.state;

    return (
      <>


        <div className="mt-5">


          <Row>
            <Col xs={2} className="mt-5">
              <ListGroup className="mt-4">
                {
                  getName === "React" ? <ListGroupItem onClick={this.onReactClick} className="justify-content-between active">React </ListGroupItem>
                    : <ListGroupItem onClick={this.onReactClick} className="justify-content-between">React </ListGroupItem>
                }
                {
                  getName === "NodeJS" ? <ListGroupItem onClick={this.onNodejsClick} className="justify-content-between active">NodeJS </ListGroupItem>
                    : <ListGroupItem onClick={this.onNodejsClick} className="justify-content-between">NodeJS </ListGroupItem>
                }
                {
                  getName === "React Native" ? <ListGroupItem onClick={this.onReactNatClick} className="justify-content-between active">React Native</ListGroupItem>
                    : <ListGroupItem onClick={this.onReactNatClick} className="justify-content-between">React Native</ListGroupItem>
                }

              </ListGroup>

            </Col>
                
            <Col>
              <h1 className="display-4">{
                istrue ?
                  <span> {headerName}</span>
                  : <span>Kütüphane </span>
              }</h1>

              <div className="mb-2 bg-info"><h6 className=" npmInstall table">npm i --save
              
              {npmArr.map(npm =>{
                return(
                  <span className ="ml-2" key={npm.npmLibs.id} >{npm.npmLibs.use}</span>
                )
                
              }
              )}
              </h6></div>
             

              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Adı</th>
                    <th scope="col">Açıklaması</th>
                    <th scope="col">URL</th>
                    <th scope="col">Kullan</th>
                  </tr>


                </thead>
                <tbody>

                  {
                    arr.map(i => {
                      return (
                        <tr key={i.id}>
                          <th scope="row">{i.name}</th>
                   
                          <td>{i.info}</td>
                          <td><a href={i.url}> <button type="button" className="btn btn-outline-danger">Git</button></a></td>
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
