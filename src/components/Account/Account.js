import React, {Component} from 'react';
import {Container, Icon, List} from 'semantic-ui-react'

export default class Account extends Component {
    render() {
        return (
            <List.Item>
                <Icon onClick={e=>console.log(e)} name='right triangle'/>
                <List.Content>
                    <List.Header>{this.props.name}</List.Header>
                    <List.Description>
                        Floated icons are by default top aligned. To have an icon top aligned
                        try this example.
                    </List.Description>
                </List.Content>
            </List.Item>
        )
    }
}