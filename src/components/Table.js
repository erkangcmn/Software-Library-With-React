import React, { Component } from 'react'
import alertify from 'alertifyjs'
import { connect } from "react-redux"
class Table extends Component {

    state = {
        libs: [],

    }

    onUseLibClick = async (npmLibs, e) => {
        this.props.updateLibs(npmLibs)
        alertify.success('Başarıyla Eklendi');
        this.setState({
            libs: [...this.state.libs, parseInt(e.target.id)]
        })


    }



    render() {

        const { libs } = this.state;
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
                                            <a href={i.url} target="_blank" rel="noopener noreferrer">{i.name}</a>
                                        </th>

                                        <td>{i.info}</td>
                                        {libs.length > 0 ?
                                            libs.map(a => {

                                                console.log(libs)
                                                return (
                                                    <td key={i.id}>
                                                        <button id={i.id}
                                                            onClick={this.onUseLibClick.bind(this, i)}
                                                            type="button"
                                                            className={a === i.id ? "btn btn-outline-danger" : "btn btn-outline-success"}
                                                        >
                                                            {a === i.id ? "Kaldır" : "kullan"}
                                                        </button>
                                                    </td>
                                                )

                                            })
                                            : <td><button id={i.id} onClick={this.onUseLibClick.bind(this, i)} type="button" className="btn btn-outline-success">Kullan</button></td>
                                        }
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
        libs: state.getLibsReducers
    }
}
const mapDispatchToProps = dispatch => ({
    updateLibs: (libs) => {
        dispatch({ type: "LIBS", payload: libs })
    }

})

export default connect(mapStateToLanguage, mapDispatchToProps)(Table)
