import React, {Component} from 'react';
import {Container, Icon, List} from 'semantic-ui-react'
import MainMenu from "../../components/MainMenu/MainMenu";
import AccountList from "../../components/AccountList/AccountList";
import Account from "../../components/Account/Account";
import req from "../../apis/AccountingApi";

export default class Dashboard extends Component {
    state = {accounts: []}

    componentDidMount() {
        const getAccounts = async () => {
            const res = await req.get("/api/accounts");
            this.setState({accounts: res.data._embedded.accounts})
            console.log(this.state.accounts)
        }
        getAccounts();
    }

    render() {
        return (
            <>
                <Container style={{margin: 20}}>
                    <MainMenu/>
                    <AccountList child accounts={this.state.accounts}/>
                </Container>
            </>
        )
    }

}