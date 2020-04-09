import React from 'react';

export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchField : {
                value: "",
                error: false
            }
        }
    }

    changeHandler = ({target : {value}}) => {
        this.setState({
            searchField : {
                value,
                error: false
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.searchChar("https://swapi.co/api/people/?search=" + this.state.searchField.value)
    }

    render() {
        return(
            <>
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.searchField.value} onChange={this.changeHandler}/>
                <input type="submit" value="search Star Wars character"/>
            </form>
            </>
        )
    }
}