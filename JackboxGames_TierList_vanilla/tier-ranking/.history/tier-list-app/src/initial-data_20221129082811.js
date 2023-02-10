const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'First title' },
        'task-2': { id: 'task-2', content: 'Second title' },
        'task-3': { id: 'task-3', content: 'Third title' },
        'task-4': { id: 'task-4', content: 'Fourth title' },
        'task-5': { id: 'task-5', content: 'Fifth title' },
    },
    
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Loved It',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
        },
    },
    //Facilitates the reordering of the columns
    columOrder: ['column-1'],
};

export default initialData;
