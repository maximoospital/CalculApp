import React, {Component} from 'react'
import 'ui-neumorphism/dist/index.css'
import { create, all } from 'mathjs'
import {
    Subtitle2,
    Button,
    TextField,
    Subtitle1,
    H5,
    Card

} from 'ui-neumorphism';
import '../App.css';

/* Importa math y lo inicia */
const math = create(all,  {});

/* Crea variables para cada texto */
let BASans = "";
let history1 = "";
let history2 = "";
let history3 = "";
let calc = "";
let impresionGrande = calc;
let impresionChica = "";
let histNum = 0;
let firstPress = false;
let ParentesisPress = false;
let RaizPress = false;
let h5size = '24px';
let psize = '16px';


/* Limite de caracteres */
function limit (string = '', limit = 0) {
    return string.substring(0, limit)
}
class Basic extends Component {
    /* Boton de AC, limpia toda la calculadora */
    state = {
        History1 : { fontSize : psize, textAlign: 'left' },
        History2 : { fontSize : psize, textAlign: 'left' },
        History3 : { fontSize : psize, textAlign: 'left' }
    }
    AC() {
        BASans = "";
        calc = "";
        history1 = "";
        history2 = "";
        history3 = "";
        ParentesisPress = false;
        RaizPress = false;
        impresionGrande = calc;
        impresionChica = "";
        console.log("All Clear");
        this.forceUpdate();
    }
    H5Update(){
        if(calc.length > 21 && Number.parseInt(h5size.replace(/\D/g,''), 10) > 2){
            let solonumero = h5size.replace(/\D/g,'');
            let solonumero2 = Number.parseInt(solonumero, 10);
            let nuevoSize = (solonumero2 - 1) + 'px';
            h5size = nuevoSize;
            console.log(h5size);
            this.forceUpdate();
        } else {
            h5size = '24px';
            console.log(h5size);
            this.forceUpdate();
        }
    }
    DelUpdate(){
        if(calc.length < 21 && Number.parseInt(h5size.replace(/\D/g,''), 10) < 24){
            let solonumero = h5size.replace(/\D/g,'');
            let solonumero2 = Number.parseInt(solonumero, 10);
            let nuevoSize = (solonumero2 + 1) + 'px';
            h5size = nuevoSize;
            console.log(h5size);
            this.forceUpdate();
        } else {
            h5size = h5size;
            console.log(h5size);
            this.forceUpdate();
        }
    }
    /* Funcion para botones de numero, toma el parametro y lo agrega al string de calculo. Si ya hubo un calculo hecho borra */
    Boton(numero) {
            if(firstPress === true){
                calc = "";
                let agregado = calc + numero;
                calc = agregado;
                console.log(numero+" agregado");
                console.log(calc.length);
                firstPress = false;
                h5size = '24px';
                impresionGrande = calc;
                this.forceUpdate();
            } else {
                if(calc.slice(-2) === 'pi'){
                    let agregado = calc + '*' + numero;
                    calc = agregado;
                    console.log(numero+" agregado");
                    console.log(calc.length);
                    impresionGrande = calc;
                    this.H5Update();
                } else {
                    let agregado = calc + numero;
                    calc = agregado;
                    console.log(numero+" agregado");
                    console.log(calc.length);
                    impresionGrande = calc;
                    this.H5Update();
                }
            }
    }

    /* Funcion para eliminar numeros */
    Del() {
        let removido = calc.slice(0, -1);
        calc = removido;
        console.log("DEL");
        console.log(calc.length);
        impresionGrande = calc;
        this.DelUpdate();
        this.forceUpdate();
    }
    /* Funcion para botones de operador, con bifurcacion para evitar sobrelapar operadores */
    OperadorBoton(operador) {
        firstPress = false;
        if(calc.length === 0){
            if(operador === '-'){
                let agregado = calc + operador;
                calc = agregado;
                console.log(operador + " agregado");
                console.log(calc.length);
                console.log(calc.charAt(20));
                impresionGrande = calc;
                this.H5Update();
                this.forceUpdate();
            } else {
                console.log('No')
                this.forceUpdate();
            }
        } else {
            if (calc[calc.length - 1] === '+' || calc[calc.length - 1] === '*' || calc[calc.length - 1] === '/' || calc[calc.length - 1] === '.' || calc[calc.length - 1] === '-' || calc[calc.length - 1] === '^') {
                let agregado = calc.slice(0, -1) + operador;
                calc = agregado;
                console.log(operador + " agregado");
                console.log(calc.length);
                console.log(calc.charAt(20));
                impresionGrande = calc;
                this.H5Update();
                this.forceUpdate();
            } else {
                let agregado = calc + operador;
                calc = agregado;
                console.log(operador + " agregado");
                console.log(calc.length);
                console.log(calc.charAt(20));
                impresionGrande = calc;
                this.H5Update();
                this.forceUpdate();
            }
        }
    }
    /* Funcion para boton de parentesis, detecta si abriste o cerraste */
    Parentesis(){
        firstPress = false;
        if(calc.length === 20) {
            console.log("Limite");
            this.forceUpdate();
        } else {
            if(ParentesisPress === false){
                let agregado = calc + '(';
                calc = agregado;
                console.log('(' + " agregado");
                console.log(calc.length);
                impresionGrande = calc;
                ParentesisPress = true;
                this.forceUpdate();
            } else {
                if(calc.charAt(calc.length - 1) === '('){
                    console.log('No')
                    this.forceUpdate();
                } else {
                    let agregado = calc + ')';
                    calc = agregado;
                    console.log(')' + " agregado");
                    console.log(calc.length);
                    impresionGrande = calc;
                    ParentesisPress = false;
                    this.forceUpdate();
                }
            }
        }
    };
    /* Raices */
    Raiz(){
        firstPress = false;
        if(calc.length === 20) {
            console.log("Limite");
            this.forceUpdate();
        } else {
            if(RaizPress === false){
                let agregado = calc + 'sqrt(';
                calc = agregado;
                console.log('sqrt(' + " agregado");
                console.log(calc.length);
                impresionGrande = calc;
                RaizPress = true;
                this.forceUpdate();
            } else {
                if(calc.slice(-5) === 'sqrt('){
                    console.log('No')
                    this.forceUpdate();
                } else {
                    let agregado = calc + ')';
                    calc = agregado;
                    console.log(')' + " agregado");
                    console.log(calc.length);
                    impresionGrande = calc;
                    RaizPress = false;
                    this.forceUpdate();
                }
            }
        }
    };

    /* El boton de igual, calcula, guarda en memoria y muestra */
    Calculo(){
        console.log("Hacer calculo");
        BASans = math.round(math.evaluate(calc), 2);
        if(BASans.toString().length > 12){
            let BASresumido = math.round(BASans / 1000000000000) * 1000000000000;
            let BAStruncado = math.format(BASresumido, {notation: 'engineering'});
            BASans = BAStruncado;
            impresionGrande = BASans;
            impresionChica = calc;
            let agregadoHist = histNum + 1;
            histNum = agregadoHist;
            h5size = '24px';
            console.log(histNum);
        }else{
            console.log(BASans);
            impresionGrande = BASans;
            impresionChica = calc;
            let agregadoHist = histNum + 1;
            histNum = agregadoHist;
            h5size = '24px';
            console.log(histNum);
        }

        if(histNum === 1){
            history1 = calc + " = " + BASans;
        } else if(histNum === 2) {
            let histTrans1 = history1;
            let histTrans2 = history2;
            let histTrans3 = history3;
            history2 = histTrans1;
            history3 = histTrans2;
            history1 = calc + " = " + BASans;
        } else if(histNum === 3){
            let histTrans1 = history1;
            let histTrans2 = history2;
            history3 = histTrans2;
            history2 = histTrans1;
            history1 = calc + " = " + BASans;
        } else if(histNum === 4) {
            histNum = 1;
            let histTrans1 = history1;
            let histTrans2 = history2;
            let histTrans3 = history3;
            history2 = histTrans1;
            history3 = histTrans2;
            history1 = calc + " = " + BASans;
        } else {
            console.log("Limit");
        }
        firstPress = true;
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <Card id="Display" inset dark>
                    <Subtitle2 secondary className='Historial1' style={{textAlign: "left"}}>
                        ⠀{history1}
                    </Subtitle2>
                    <Subtitle2 secondary className='Historial2' style={{textAlign: "left"}}>
                        ⠀{history2}
                    </Subtitle2>
                    <Subtitle2 secondary className='Historial3' style={{textAlign: "left"}}>
                        ⠀{history3}
                    </Subtitle2>
                    <Subtitle1 primary className='Calculo'>
                        ⠀{impresionChica}
                    </Subtitle1>
                        <H5 className='TextoActual' style={{ fontSize: h5size }}>
                            {impresionGrande}
                        </H5>
                </Card>
                <div id="ButtonPanel">
                    <div id="ButtonRow">
                        <Button dark rounded id="ButtonNormal" onClick={() => this.AC()}>
                            AC
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Del()}>
                            DEL
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(BASans)}>
                            ANS
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Parentesis()}>
                            ( )
                        </Button>
                    </div>
                    <div id="ButtonRow">
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton('pi')}>
                            π
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Raiz()}>
                            √
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.OperadorBoton('^')}>
                            ^
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.OperadorBoton('/')}>
                            ÷
                        </Button>
                    </div>

                    <div id="ButtonRow">
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(7)}>
                            7
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(8)}>
                            8
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(9)}>
                            9
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.OperadorBoton('*')}>
                            ×
                        </Button>
                    </div>
                    <div id="ButtonRow">
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(4)}>
                            4
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(5)}>
                            5
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(6)}>
                            6
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.OperadorBoton('-')}>
                            -
                        </Button>
                    </div>
                    <div id="ButtonRow">
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(1)}>
                            1
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(2)}>
                            2
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(3)}>
                            3
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.OperadorBoton('+')}>
                            +
                        </Button>
                    </div>
                    <div id="ButtonRow">
                        <Button dark rounded id="ButtonNormal" onClick={() => this.Boton(0)}>
                            0
                        </Button>
                        <Button dark rounded id="ButtonNormal" onClick={() => this.OperadorBoton('.')}>
                            .
                        </Button>
                        <Button dark rounded bgColor='var(--primary)' id="ButtonDoble" onClick={() => this.Calculo()}>
                            =
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Basic;
