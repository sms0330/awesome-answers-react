import React, {Component} from 'react'

class CurrentDateTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
        console.log(`1: constructor fired `)
    }

    componentDidMount(){
        console.log('3: componentDidMount');
        this.intervalId = setInterval(() => {
            this.setState((state) => {
                return{
                    date: new Date()
                }
            })
        }, 1000)
    }

    componentDidUpdate() {
        console.log('4: componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('5: componentWillUnmount')
        clearInterval(this.intervalId);
    }

    render() {
        console.log('2: render fired')
        return (
            <div>
                {
                    this.props.shouldShowTime ?
                    this.state.date.toLocaleString()
                    :
                    this.state.date.toLocaleString()
                }
            </div>
        )
    }
}

export default CurrentDateTime;