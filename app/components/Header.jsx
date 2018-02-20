import React from 'react'

export default class Header extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-xs-12">
                    <div className="page-header text-center">
                      <h1> {this.props.pageTitle} </h1>
                    </div>
                </div>
            </div>
        )        
    }
}