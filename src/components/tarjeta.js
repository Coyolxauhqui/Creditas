import React from 'react';
import logo2 from '../assets/img/logoDiscover.svg';
import logo_amex from '../assets/img/LogoAmericanExpress.svg';
import logo_visa from '../assets/img/logoVisa.svg';
import logo_master from '../assets/img/logoMasterCard.svg';

class Tarjeta extends React.Component {
    render() {
        //Agrega clase selecciono para mostra foco
        var noTarjeta_class = this.props.focos.foco_numero_t ? 'seleccionado' : '';
        var titular_class = this.props.focos.foco_titular_t ? 'contName seleccionado' : 'contName';
        var vencimiento_class = this.props.focos.foco_vencimiento_t ? 'contDate seleccionado' : 'contDate';
        var cvc_class = this.props.focos.foco_cvc_t ? 'flip desac vuelta' : 'flip desac';
        
        //Valida Número de la tarjeta y cambia logo
        var logoTarjeta = logo2;
        var validaNoTarjeta=String(this.props.numero_tarjeta);
        if (validaNoTarjeta.length > 0) {
            switch (validaNoTarjeta.substring(0, 1)) {
                case '3':
                    logoTarjeta=logo_amex;
                    break;
                    case '4':
                    logoTarjeta=logo_visa;
                    break;
                    case '5':
                        var dosDigitos=validaNoTarjeta.substr(0,2);
                        if(dosDigitos==='51' || dosDigitos==='52' || dosDigitos==='53' || dosDigitos==='54'){
                            logoTarjeta=logo_master;
                        }else{
                            logoTarjeta=logo2;
                        }
                    break;
                default:
                    logoTarjeta=logo2;
                    break;
            }
        }

        return (
            <div className={cvc_class} id="contenedor">
                <div className="front">
                    <div className="tRight">
                        <img src={logoTarjeta} className="logo" id="logo" alt="logo" />
                    </div>
                    <div className="divCol8 contTarjeta">
                        <div className="col8">
                            <input type="text" id="noTarjeta1" name="noTarjeta1" className={noTarjeta_class} value={this.props.numero_tarjeta} readOnly />
                        </div>
                        <div className="col8">&nbsp;</div>
                        <div className="col6">
                            <div id="contName" className={titular_class}>
                                Card Holder<br />
                                <input type="text" id="txtNombre1" value={this.props.titular} readOnly />
                            </div>
                        </div>
                        <div className="col2">
                            <div className={vencimiento_class} id="contDate">
                                Expires
                                <div className="divFecha">
                                    <div><input type="text" id="fechaMes1" value={this.props.vencimiento.mes} readOnly /></div>
                                    <div><input type="text" id="fechaYear1" value={this.props.vencimiento.anio} readOnly /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="back">
                    <div className="contTarjetaBack">
                        <div>CVC<input type="text" id="noCVC1" value={this.props.numero_cvc} readOnly /></div>
                        <div><img src={logo2} className="logoBack" alt="logo discover" /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tarjeta;