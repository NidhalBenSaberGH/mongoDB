import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class UserEditComponent extends Component {
    state = {
        user: []
    };

    componentDidMount() {
        console.log('UserId', this.state);
        axios.get(`http://localhost:3000/users/${this.props.route.userId}`)
        .then(res => {
            const user = res.data;
            console.log('User', user);
            this.setState({ user });
        })
    }
    render() {
        return <div>
            {this.state.user.name}
            </div>;
    }
}