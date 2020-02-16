import React from 'react';
//Componentes
import Tarjeta from './tarjeta';
import Formulario from './formulario';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formato_tarjeta: '################',
            numero_tarjeta: '#### #### #### ####',
            titular: 'AD SOYAD',
            vencimiento: {
                mes: 'MM',
                anio: 'YY'
            },
            numero_cvc:'',
            focos: {
                foco_numero_t: false,
                foco_titular_t: false,
                foco_vencimiento_t: false,
                foco_cvc_t: false,
            }
        };
    }
    callBackNumeroT = (childData) => {
        var numCaracteres = childData.length;
        var childata_t = childData + this.state.formato_tarjeta.substring(numCaracteres);
        
        childata_t = childata_t.substring(0, 4) + "  " + childata_t.substring(4, 8).toString().replace(/\d(?=\d{0})/g, "*") + "   " + childata_t.substring(8, 12).toString().replace(/\d(?=\d{0})/g, "*") + "  " + childata_t.substring(12, 16);
        this.setState({ numero_tarjeta: childata_t })
    }
    callBackTitularT = (childData) => {
        this.setState({ titular: childData })
    }
    callBackVencimientoT = (childData) => {
        this.setState({ vencimiento: childData })
    }
    callBackCvcT = (childData) => {
        this.setState({ numero_cvc: childData })
    }
    CallBackFocusF = (childData) => {
        var focoNumero_t = false, focoTitular_t = false, focoVencimiento_t = false, focoCvc_t = false;
        switch (childData) {
            case 'noTarjeta':
                focoNumero_t = true;
                break;
            case 'txtNombre':
                focoTitular_t = true;
                break;
            case 'fechaMes':
                focoVencimiento_t = true;
                break;
            case 'fechaYear':
                focoVencimiento_t = true;
                break;
            case 'noCVC':
                focoCvc_t = true;
                break;
            default:
                break;
        }
        this.setState({
            focos: {
                foco_numero_t: focoNumero_t,
                foco_titular_t: focoTitular_t,
                foco_vencimiento_t: focoVencimiento_t,
                foco_cvc_t: focoCvc_t
            }
        });
    }

    render() {
        return (
            <div className="page">
                <Tarjeta numero_tarjeta={this.state.numero_tarjeta} titular={this.state.titular} vencimiento={this.state.vencimiento} numero_cvc={this.state.numero_cvc} focos={this.state.focos} />
                <Formulario pageCallBackNumeroT={this.callBackNumeroT}
                    pageCallBackTitularT={this.callBackTitularT}
                    pageCallBackVencimientoT={this.callBackVencimientoT}
                    pageCallBackCvcT={this.callBackCvcT}
                    pageCallBackFocusF={this.CallBackFocusF} />
            </div>
        )
    };
}

export default Page;