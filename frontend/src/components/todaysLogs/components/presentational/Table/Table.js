import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('teambuildr', {
  text: {
    primary: '#444444',
    secondary: '#898989',
  },
  background: {
    default: 'transparent',
  },
  // context: {
  //   background: '#cb4b16',
  //   text: '#FFFFFF',
  // },
  // divider: {
  //   default: '#073642',
  // },
  // action: {
  //   button: 'rgba(0,0,0,.54)',
  //   hover: 'rgba(0,0,0,.08)',
  //   disabled: 'rgba(0,0,0,.12)',
  // },
});

const teambuildrStyles = {
  headRow: {
    style: {
      padding: '20px 10px',
      border: 'none',
    },
  },
  headCells: {
    style: {
      fontFamily: 'Nunito Sans',
      fontSize: '12px',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '1.29px',
    },
  },
  cells: {
    style: {
      padding: '20px 18px',
      fontFamily: 'Nunito Sans',
      fontSize: '12px',
      fontWeight: '800',
    },
  },
  rows: {
    style: {
      background: 'white',
      // padding: '20px 10px',
      marginBottom: '10px',
      borderBottomWidth: '0px',
      borderRadius: '4px',
      boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.1)',
    },
    highlightOnHoverStyle: {
      backgroundColor: '#f9f9f9',
      borderBottomColor: '#f9f9f9',
    },
  },
};

const Table = ({
  ...props
}) => (

  <DataTable
    {...props}
    customStyles={teambuildrStyles}
    theme='teambuildr'
  />
);

export default Table;
