const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Game 1' },
      'task-2': { id: 'task-2', content: 'Game 2' },
      'task-3': { id: 'task-3', content: 'Game 3' },
      'task-4': { id: 'task-4', content: 'Game 4' },
    },
    columns: {
        'column-1': {
          id: 'column-1',
          title: 'Loved It',
          taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
          id: 'column-2',
          title: 'Liked It',
          taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Leave It',
            taskIds: [],
          },
        'column-4': {
          id: 'column-4',
          title: 'Haven't Played',
          taskIds: [],
        },
          
       
    // Facilitate reordering of the columns
    columnOrder: [ 'column-1']
  };
  
  export default initialData;