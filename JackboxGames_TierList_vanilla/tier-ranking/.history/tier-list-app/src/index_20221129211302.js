import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column';
import initialData from './initial-data';


// First Create a <Title> react component that renders an <h1> which is
// centered, and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Print Title
<Wrapper>
  <Title>My Game Ranking!</Title>
</Wrapper>

const Container = styled.div`
  display: flex;
`


class App extends React.Component {
  state = initialData

  onDragStart = () => {
    document.body.style.color = 'red';
    document.body.style.transition = 'background-color 0.2s ease';
  }
  
  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination 
      ? destination.index /Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(1, 141, 217, ${opacity})`
  }

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';
  
    const {destination, source, draggableId } = result;
  
    if(!destination) {
      return;
    }
  
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
  
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
  
    if(start === finish) {
      const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
  
    const newColumn = {
      ...finish,
      taskIds: newTaskIds,
    };
  
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
  
    this.setState(newState);
    return;  
  }
  // Moving each card from one column to another 
  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };
  
  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };
  
  const newState = {
    ...this.state,
    columns: {
      ...this.state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  };
  this.setState(newState);
  };
  render() {
    return (
      
    
      <DragDropContext onDragEnd={this.onDragEnd}>
      <Container>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
