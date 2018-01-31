import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class BootstrapTableAsComponent extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    let tableHeaderColumns = this.props.children[2].props.children.map((header, index) => {
      let dataField = header.props.dataField;
      console.log('dataField: ', dataField);

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
        data={this.props.children[1]}
        strictSearch={true}
        search multiColumnSearch pagination
        striped hover>
        {tableHeaderColumns}
      </BootstrapTable>
    )
  }
}

export default BootstrapTableAsComponent;
