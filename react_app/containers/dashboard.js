import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import data from '../data'
import Column from '../components/column'
class Dashboard extends Component {
	constructor(props){
		super(props)
		this.state=data;
	}
  render() {
  	console.log("this.state-->",this.state)
    return (
    	<DragDropContext onDragEnd={(e) =>console.log(e)}>
	    	{this.state.colOrder.map((col) =>{
		    	let column=this.state.colums[col];
		    	let task=column.taskIds.map((taskId) =>this.state.tasks[taskId])
	    		return (<Column key={column.id} column={column} task={task} />)
	    	})}
    	</DragDropContext>
    	)
  }
}


export default Dashboard;