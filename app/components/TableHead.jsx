import React from 'react'

export default class TableHead extends React.Component {
    
    handleClick(index) {
        this.props.updateSort(index)
    }
    handleChange(event, index) {
        this.props.updateSearch(event.target.value, index)
    }
    render() {
        
        let headers = this.props.tableHeaders.map((element, index) => {
            return (
                <th key={`table-head-${index}`}>
                    <div className="form-group">
                        <label htmlFor={`header-${index}`}>{element.title}</label> 
                        <button type="button" className="btn btn-primary btn-xs pull-right" onClick={() => this.handleClick(index)}>
                            {element.sort}
                        </button>
                        <input type="text" className="form-control" id={`header-${index}`} value={element.search} onChange={(event) => this.handleChange(event, index)} />
                    </div>
                </th>
            )
        })
    

        return(
            <thead> 
                <tr>  
                    {headers}
                </tr> 
            </thead>              
        )        
    }
}