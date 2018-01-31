import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class BootstrapTableAsComponent extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    let tableHeaderColumns = this.props.children.props.children.map((header, index) => {
      let dataField = header.props.dataField;

      return <TableHeaderColumn
        headerText={header.props.headerText}
        key={index} 
        isKey={header.props.isKey} 
        dataField={dataField} 
        >
        {header.props.showField}
      </TableHeaderColumn>;
    });
    
    return(
      <BootstrapTable
        data={this.props.data}
        strictSearch={true}
        search multiColumnSearch pagination
        striped hover>
        {tableHeaderColumns}
      </BootstrapTable>
    )
  }
}

export default BootstrapTableAsComponent;
