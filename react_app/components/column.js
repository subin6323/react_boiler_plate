import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
class Column extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (<div style={{border:"1px solid #000","width":"200px"}}>
              <h2 style={{"fontSize":"16px"}}>{this.props.column.title}</h2>
              <Droppable droppableId={this.props.column.id}>
              {(provided) => (
                 <ul ref={provided.innerRef} {...provided.droppableProps}>
                    {this.props.task.map((items) =><li style={{"border":"1px solid #000","marginBottom":"2px"}}>{items.data}</li>)}
                  </ul>
                )}
              </Droppable>
            </div>
            )
  }
}
export default Column;