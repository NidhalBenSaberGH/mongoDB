import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

export default class UsersComponent extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get(`http://localhost:3000/users`)
        .then(res => {
            const users = res.data;
            console.log('Users', users);
            this.setState({ users });
        })
    }
    render() {
        
        const columns = [
            {
                Header: 'Name',
                accessor: 'name'
            }, 
            {
                Header: 'Email',
                accessor: 'email',
            }, 
            {
                Header: 'Password',
                accessor: 'password'
            },
            {
                header: 'Actions',
                id: 'links',
                Cell: ({row}) => (
                    
                    <Link 
                    state={{userId: row._original._id}}
                    to={{ pathname: `/users/edit/${row._original._id}` }}>
                        Edit
                    </Link>
                )
            }
        ];

        return <ReactTable
            data={this.state.users}
            columns={columns}
        />;
    }
}