import React from 'react'
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
import '../App.css';
import Basic from '../Screens/BasicCalc.js';

class TabView extends React.Component {
    constructor(props) {
        super(props)
        /* Variable de Tabs */
        this.state = {
            active: 0,
            visible: false
        }
    }
    render() {
        const { active } = this.state
        /* Cada pagina */
        const tabItems = (
            <TabItems value={active} style={{ marginBottom: '-5px'}}>
                <TabItem>
                    <Basic />
                </TabItem>
                <TabItem>
                    Currency Conversor
                </TabItem>
                <TabItem>
                    Unit Conversor
                </TabItem>
            </TabItems>
        )
        return (
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
                {/* Tabs y botones de tab */}

                <Tabs
                                    value={active}
                                    variant="fullWidth"
                                    onChange={({ active }) => this.setState({ active })}
                                >
                                        <Tab>BAS</Tab>
                                        <Tab>CUR</Tab>
                                        <Tab>UNI</Tab>
                                </Tabs>
                                {tabItems}

            </Card>

        )
    }
}

export default TabView
