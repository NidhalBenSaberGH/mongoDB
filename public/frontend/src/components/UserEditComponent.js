import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

export default class UserEditComponent extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = { user: { name: '' } };
    
    }
    componentDidMount() {
        console.log('UserId', this.state);
        const { match: { params } } = this.props;

        axios.get(`http://localhost:3000/editUser/${params.userId}`)
        .then(res => {
            const user = res.data;
            console.log('User', user);
            this.setState({ user });
        });
    };

    // Edit User 

    render() {
        return (<h1>Hello world</h1>);
    }
}
