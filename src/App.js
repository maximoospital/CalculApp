import React from 'react'
import 'ui-neumorphism/dist/index.css'
import 'ui-neumorphism/dist/index.css'
import {
    Card,
    Tab,
    Tabs,
    TabItem,
    IconButton,
    TabItems,
    CardHeader,
    Button,
    Dialog,
    H6,
    Subtitle2

} from 'ui-neumorphism';
import Icon from '@mdi/react'
import {mdiInformationOutline} from '@mdi/js';
import './App.css';
import Basic from './Screens/BasicCalc.js';

/* La app inicia y llama TabView, el programa que intercambia entre cada pestaña */

class App extends React.Component  {
    constructor(props) {
        super(props)
        /* Variable de Tabs */
        this.state = {
            active: 0,
            visible: false
        }
    }
    render() {
        return (
            <div className="App">
                {/* Tarjeta principal */}
                <Card id="Calcapp" dark bordered>
                    <Card flat dark>
                        {/* Alert oculto */}
                        <Dialog
                            maxWidth={250}
                            visible={this.state.visible}
                            onClose={() => this.setState({ visible: false })}
                        >
                            {/* Contenido del alert */}
                            <Card className="dialog">
                                Aplicacion de calculadora con multiples modos, desarrollada en React.  <br /> <br />
                                <Button onClick={() => this.setState({ visible: false })}>
                                    cerrar
                                </Button>
                            </Card>
                        </Dialog>
                        {/* Titulo, autor y boton de alert */}
                        <CardHeader
                            title={<H6>Calculapp</H6>}
                            style={{ margin: '5px' }}
                            subtitle={
                                <Subtitle2 secondary>Maximo Ospital @ 2022</Subtitle2>
                            }
                            action={
                                <IconButton rounded text={false} onClick={() => this.setState({ visible: true })}>
                                    <Icon path={mdiInformationOutline} size={1} />
                                </IconButton>
                            }
                        />

                        <Basic/>
                    </Card>
                </Card>
            </div>
        );
    }
}

export default App;
