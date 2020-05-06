import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

var currentdate = new Date(); 
var datetime = "\n" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text
                style={{
                    width: '100%',
                    margin: 5,
                    textAlign: 'center',
                    borderWidth: 2,
                    backgroundColor: '#0f0',
                    fontSize: 30
                }}>
                {this.props.headerText}
                {datetime}
            </Text>
        );
    }
}

Header.propTypes = { headerText: PropTypes.string.isRequired };
