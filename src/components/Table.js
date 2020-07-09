import React, { Component } from 'react'
import alertify from 'alertifyjs'
import { connect } from "react-redux"
class Table extends Component {
    state = {
        npmArr: []
    }
    onUseLibClick = (npmLibs, e) => {

        let npmArr = this.state.npmArr;
        let AddedLib = npmArr.find(c => c.npmLibs.id === npmLibs.id)
        if (AddedLib) {
            alertify.error('Bu kütüphaneyi zaten eklediniz.');
        } else {
            this.props.updateLibs(npmLibs)
            alertify.success('Başarıyla Eklendi');
        }

    }


    render() {
        const { language } = this.props;
        return (

            <div>
                <table className="table table-borderless">
                    <tbody>

                        {
                            language.map(i => {
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
            </div>
        )
    }
}

function mapStateToLanguage(state) {
    return {
        language: state.languageReducers,
    }
}
const mapDispatchToProps = dispatch => ({
    updateLibs: (libs) => {
        dispatch({type:"LIBS", payload: libs})
    }

})

export default connect(mapStateToLanguage, mapDispatchToProps)(Table)
