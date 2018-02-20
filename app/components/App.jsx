import React from 'react'

import Header from './Header.jsx'
import TableHead from './TableHead.jsx'
import TableBody from './TableBody.jsx'

import dataFile from '../../data/dataFile.json'



export default class App extends React.Component {

    constructor(props) {
        super(props);
        var orderOfHeaders = Object.keys(dataFile.dataValues[0])
        var tableHeaders = orderOfHeaders.map(title => {return(
            {title: title, search: '', sort: 'unsorted' })})
        

        this.state = {
            data:           dataFile.dataValues,
            filteredData:   dataFile.dataValues,
            pageTitle:      dataFile.title,
            tableHeaders:   tableHeaders,
            orderOfHeaders: orderOfHeaders
        };
    

        this.updateSort = this.updateSort.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        // If the data was stored else where (API) one might choose to use fetch 
        // or AJAX request here to populate the data.
        var orderOfHeaders = Object.keys(dataFile.dataValues[0])
        var tableHeaders = orderOfHeaders.map(title => {return(
            {title: title, search: '', sort: 'unsorted' })})
        

        this.state = {
            data:           dataFile.dataValues,
            filteredData:   dataFile.dataValues,
            pageTitle:      dataFile.title,
            tableHeaders:   tableHeaders,
            orderOfHeaders: orderOfHeaders
        };
    }

    // Eventually this Logic will go in the Store
    updateSort(index){
        // cycle through unsorted -> ascending -> descending -> ascending -> descending -> ... 
        if (this.state.tableHeaders[index].sort == 'unsorted' || this.state.tableHeaders[index].sort == 'descending') {
            this.state.tableHeaders[index].sort = 'ascending'
        } else {
            this.state.tableHeaders[index].sort = 'descending'
        }
        
        this.sortDataOn(index)
        this.setState({
            tableHeaders: this.state.tableHeaders,
            filteredData: this.state.filteredData
        })
    }

    updateSearch(value, index) {
        this.state.tableHeaders[index].search = value
        this.filterDataOn(index)
        this.setState({
            tableHeaders: this.state.tableHeaders
        })
    }

    filterDataOn(index) {
        if (this.state.tableHeaders[index].search !== '') {
            this.state.filteredData = this.state.filteredData.filter((row) => {
                return row[this.state.orderOfHeaders[index]].toString().toLowerCase().includes(this.state.tableHeaders[index].search.toLowerCase())
            })
        } else {
            this.state.filteredData = this.state.data
            // search throw all the search strings and refilter on any search string that is not empty
            this.state.tableHeaders.forEach((header) => {
                if (header.search != '') {
                    this.state.filteredData = this.state.filteredData.filter((row) => {
                        return row[header.title].toString().toLowerCase().includes(header.search)
                    })
                }
            })
        }
    }

    sortDataOn(index) {
       this.state.filteredData.sort((element1, element2) => {
            let value1 = element1[this.state.orderOfHeaders[index]]
            let value2 = element2[this.state.orderOfHeaders[index]]
            if (this.state.tableHeaders[index].sort == 'ascending') {
                if (value1 < value2) {
                    return -1
                }
                if (value1 > value2) {
                    return 1
                }
                return 0
            }
            if (this.state.tableHeaders[index].sort == 'descending') {
                if (value1 < value2) {
                    return 1
                }
                if (value1 > value2) {
                    return -1
                }
                return 0
            }
        })
    }

    render(){
        return (
            <div className="container-fluid">
                <Header pageTitle = {this.state.pageTitle} />
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-xs-12 col-md-10">
                        <div className="table-responsive">
                            <table className="table table-condensed table-hover table-striped">
                                <TableHead 
                                    tableHeaders = {this.state.tableHeaders} 
                                    updateSort = {this.updateSort}
                                    updateSearch = {this.updateSearch} />
                                <TableBody 
                                    orderOfHeaders = {this.state.orderOfHeaders}                           
                                    filteredData = {this.state.filteredData} />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}