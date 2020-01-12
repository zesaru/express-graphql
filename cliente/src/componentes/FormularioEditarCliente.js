import React, { Component } from 'react';

class FormularioEditar extends Component {

    state =  {
        emails: []
    }

    nuevoCampo = () => {
        this.setState({
            emails: this.state.emails.concat([{email:''}])
        })
    }

    leerCampo = i => e => {
        const nuevoMail = this.state.emails.map((email, index) => {
                if (i !== index) return email;
                return { ...email, email: e.target.value };
        });
        this.setState({ emails: nuevoMail });
    }

    quitarCampo = i => () => {
        this.setState({
            emails: this.state.emails.filter((s, index) => i !== index)
        });
    }



    render() { 

            const {emails} = this.state;
           
            return (
        
                   <form className="col-md-8 m-3">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Nombre</label>
                                    <input
                                        type="text" 
                                        className="form-control" 
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Apellido</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                     />
                                </div>
                            </div>
                          
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Empresa</label>
                                    <input
                                        type="text" 
                                        className="form-control" 
                                    />
                                </div>

                                {emails.map((input, index) => (
                                    <div key={index} className="form-group col-md-12">
                                        <label>Email {index + 1} : </label>
                                        <div className="input-group">
                                        
                                            <input 
                                                type="email"
                                                placeholder={`Email`}
                                                className="form-control" 
                                                onChange={this.leerCampo(index)}
                                                defaultValue={input.email}
                                            />
                                            <div className="input-group-append">
                                                <button 
                                                    className="btn btn-danger" 
                                                    type="button" 
                                                    onClick={this.quitarCampo(index)}> 
                                                    &times; Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="form-group d-flex justify-content-center col-md-12">
                                    <button 
                                        onClick={this.nuevoCampo}
                                        type="button" 
                                        className="btn btn-warning"
                                    >+ Agregar Email</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Edad</label>
                                    <input
                                        type="text" 
                                        className="form-control" 
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Tipo Cliente</label>  
                                    <select 
                                        className="form-control"
                                    >
                                        <option value="">Elegir...</option>
                                        <option value="PREMIUM">PREMIUM</option>
                                        <option value="BASICO">BÁSICO</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                        </form>
            )      
    }
}
 

export default FormularioEditar;