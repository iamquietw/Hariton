import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, CardGrid, Card} from "@vkontakte/vkui"

import "../../../css/main.css"

class HomePanelBase extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    style: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Вопрос значит</h2>
                <p>Вас роняли в детстве?</p>
            </Alert>
        );
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Академия CS:GO</PanelHeader>
                <Group>
                    <Div>
                        <CardGrid>
                            <Card id="card_mechanics" size="m" mode={"shadow"}>
                                <div id={"card_mechanics_parent"} style={{ height: 96 }}>
                                    <div id={"card_mechanics_text"}>
                                        Особенности
                                        механики игры
                                    </div>
                                </div>
                            </Card>
                            <Card id="card_skins" size="m" mode={"shadow"}>
                                <div id="card_skins_parent" style={{ height: 96 }}>
                                    <div id={"card_skins_text"}>
                                        Скины

                                    </div>
                                </div>
                            </Card>
                            <Card id={"card_info"} size="l" mode={"shadow"}>
                                <div id={"card_info_parent"} style={{ height: 96 }}>
                                    <div id={"card_info_text"}>
                                        История и другая информация об игре
                                    </div>
                                </div>
                            </Card>
                            <Card id={"card_ranks"} size="l" mode={"shadow"}>
                                <div id={"card_ranks_parent"} style={{ height: 96 }}>
                                    <div id={"card_ranks_text"}>
                                        Всё о званиях и соревновательном режиме
                                    </div>
                                </div>
                            </Card>
                            <Card id="card_modes" size="s" mode={"shadow"}>
                                <div id={"card_modes_parent"} style={{ height: 96 }}>
                                    <div id={"card_modes_text"} >
                                        Режимы
                                    </div>
                                </div>
                            </Card>
                            <Card id={"card_test"} size="s" mode={"shadow"}>
                                <div id={"card_test_parent"} style={{ height: 96 }}>
                                    <div id={"card_test_text"}>
                                        Тесты
                                    </div>
                                </div>
                            </Card>
                            <Card id={"card_tactic"} size="s" mode={"shadow"}>
                                <div id={"card_tactic_parent"} style={{ height: 96 }}>
                                    <div id={"card_tactic_text"}>
                                        Тактики
                                    </div>
                                </div>
                            </Card>
                        </CardGrid>
                    </Div>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
