import React from 'react'
import Hog from './Hog'
import uuid from 'uuid'

export default class HogContainer extends React.Component {
    
    render(){

        const hogComponents = this.props.hogs.map((hog) => {
            return <Hog hog={hog} key={uuid()} /> 
        })

        return(
            <div className="ui grid container">
                {hogComponents}
            </div>
        )

    }

}