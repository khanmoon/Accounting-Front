import React,{Component} from 'react';
import {Container, List} from "semantic-ui-react";
import Account from "../Account/Account";
import req from "../../apis/AccountingApi";


const AccountList = (props)=>{
    const accountitem = props.accounts.map((item,index) =>{
        return (<Account key={index} name={item.name}/>)
    })

    return(
        <List>
            {accountitem}
        </List>
    )
}

export default AccountList;
