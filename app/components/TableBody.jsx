import React from 'react'

export default class TableBody extends React.Component {
    render() {
        let rows = this.props.filteredData.map((row, index1) => {
            var tableDatas = []
            this.props.orderOfHeaders.forEach((header, index2) => {
                tableDatas.push(<td key={`table-data-${index1}-${index2}`} >{row[header]}</td>)
            })
            return (<tr key={`table-row-${index1}`}>{tableDatas}</tr>)
        })
        return(
            <tbody> 
                {rows}
            </tbody>            
        )        
    }
}