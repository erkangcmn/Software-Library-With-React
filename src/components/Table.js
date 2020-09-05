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
    }
    onRemoveLibClick = (npmLibs) =>{
        this.props.removeLIBS(npmLibs)
    }



    render() {


        const { language, libs } = this.props;
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
                                                return (
                                                    <td>
                                                        <button id={i.id}
                                                            onClick={(a.name === i.name) ? this.onRemoveLibClick.bind(this, i): this.onUseLibClick.bind(this, i)}
                                                            type="button"
                                                            className="btn btn-outline-success">
                                                            {(a.name === i.name) ? "Kaldır" : "Kullan"}
                                                        </button>
                                                    </td>
                                                )
                                            }) :
                                            
                                            <button id={i.id}
                                                onClick={this.onUseLibClick.bind(this, i)}
                                                type="button"
                                                className="btn btn-outline-success">
                                                Kullan
                                            </button>
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
    },
    removeLIBS: (libs) =>{
        dispatch({ type: "REMOVE_LIBS", payload: libs })
    }

})

export default connect(mapStateToLanguage, mapDispatchToProps)(Table)
