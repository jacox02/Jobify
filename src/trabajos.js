import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const url= process.env.REACT_APP_API_URL;

class App extends Component {
    state={
      data:[],
      modalInsertar: false,
      modalEliminar: false,
      form:{
        title: '',
        position: '',
        keywords: '',
        worklocation: '',
        worktype: '',
        date: '',
        email: '',
        applymethod: '',
        category: '',
        description: ''
      } ,
      modalInsertar: false,
    }

    handleChange=async e=>{
      e.persist();
      await this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      });
    }
    mostrarmodalInsertar = ()=>{
      this.setState({modalInsertar:false});
    }
    
    insertar = ()=>{
      var valorN = {...this.state.form};
      var lista = this.state.data;
      lista.push(valorN);
      this.setState({data:lista, modalInsertar:false});
    }

}