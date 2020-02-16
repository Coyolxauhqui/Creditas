import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero_tarjeta: '',
            titular: '',
            vencimiento: {
                mes: 'MM',
                anio: 'YY'
            },
            numero_cvc:'',
        };
    }

    onFocus(event) {
        this.props.pageCallBackFocusF(event.target.id);
    }
    handleChange(event) {
        switch (event.target.id) {
            case 'noTarjeta':
                this.setState({ numero_tarjeta: event.target.value });
                this.props.pageCallBackNumeroT(event.target.value);
                break;
            case 'txtNombre':
                this.setState({ titular: event.target.value });
                this.props.pageCallBackTitularT(event.target.value);
                break;
            case 'fechaMes':
                this.setState({
                    vencimiento: {
                        mes: event.target.value,
                        anio: this.state.vencimiento.anio
                    }
                });
                this.props.pageCallBackVencimientoT({
                    mes: event.target.value,
                    anio: this.state.vencimiento.anio
                });
                break;
            case 'fechaYear':
                this.setState({
                    vencimiento: {
                        mes: this.state.vencimiento.mes,
                        anio: event.target.value
                    }
                });
                this.props.pageCallBackVencimientoT({
                    mes: this.state.vencimiento.mes,
                    anio: event.target.value
                });
                break;
            case 'noCVC':
                this.setState({ numero_cvc: event.target.value });
                this.props.pageCallBackCvcT(event.target.value);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="formularios">
                <div className="divCol">
                    <div className="col12">Card Number<br />
                        <input type="number" id="noTarjeta" value={this.state.numero_tarjeta} onChange={this.handleChange.bind(this)}  onFocus={ this.onFocus.bind(this) }   onInput = {(e) =>{
    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)}} />
                    </div>
                    <div className="col12">Card Name<br />
                        <input type="text" id="txtNombre" name="txtNombre" value={this.state.titular} onChange={this.handleChange.bind(this)} onFocus={ this.onFocus.bind(this) } />
                    </div>
                    <div className="col4">Expiration Date<br />
                        <select id="fechaMes" value={this.state.vencimiento.mes} onChange={this.handleChange.bind(this)} onFocus={ this.onFocus.bind(this) }>
                            <option value="MM">Month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div className="col4">&nbsp;<br />
                        <select id="fechaYear" value={this.state.vencimiento.anio} onChange={this.handleChange.bind(this)} onFocus={ this.onFocus.bind(this) }>
                            <option value="YY">Year</option>
                            <option value="19">2019</option>
                            <option value="20">2020</option>
                            <option value="21">2021</option>
                            <option value="22">2022</option>
                        </select>
                    </div>
                    <div className="col4">CVC<br />
                        <input type="number" id="noCVC" value={this.state.numero_cvc} onChange={this.handleChange.bind(this)} onFocus={ this.onFocus.bind(this) }  onInput = {(e) =>{
    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)}} />
                    </div>
                </div>
                <div><input type="submit" className="btn" value="Submit" /></div>
            </div>
        );
    }
}

export default Formulario;