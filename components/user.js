import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text
                style={{
                    width: '100%',
                    margin: 5,
                    textAlign: 'left',
                    fontSize: 15
                }}>
                {this.props.nome}
                {this.props.sexo}
                {this.props.data_nasc}
                {this.props.data_atendimento}
                {this.props.sintomas}
                {this.props.doenca_preexitente}
                {this.props.statuscovid}
            </Text>
        );
    }
}

User.propTypes = { nome: PropTypes.string.isRequired };
User.propTypes = { sexo: PropTypes.string.isRequired };
User.propTypes = { data_nasc: PropTypes.string.isRequired };
User.propTypes = { data_atendimento: PropTypes.string.isRequired };
User.propTypes = { sintomas: PropTypes.string.isRequired };
User.propTypes = { doenca_preexitente: PropTypes.string.isRequired };
User.propTypes = { statuscovid: PropTypes.string.isRequired };