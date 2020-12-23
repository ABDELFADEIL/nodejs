let tasksList = [
    {
        id: 1,
        title: 'Mack coffee',
        status: 'Created'
    },
    {
        id: 2,
        title: 'Run 100 kms',
        status: 'Created'
    },
    {
        id: 3,
        title: 'Meet Macron',
        status: 'Created'
    },
    {
        id: 4,
        title: 'Stop whate',
        status: 'finish'
    }
]


exports.tasksList = (req, res, next)=> {
    res.status(200).json({tasksList:tasksList})
}

exports.detail_task = (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    const task = tasksList.filter(task => task.id == id);
    res.status(200).json({task: task})
    res.status(200).json({task: task})
}

exports.add_task = (req, res, next)=> {
    const newTask = req.body;
    tasksList.push(newTask)
    res.status(200).json({message:'task added'})
}

// update_task
exports.update_task = (req, res, next)=> {
    const task = req.body;
    const index = tasksList.findIndex(task => task.id == task.id);
    tasksList[index].status = task.status
    tasksList[index].title = task.title;
    res.status(200).json({message:'task updated'})
}



// remove_task
exports.remove_task = (req, res, next)=> {
    const id = req.params.id;
    const index = tasksList.findIndex(task => task.id == id);
    if (index > -1) {
        tasksList.slice(index, 1);
    }
    res.status(200).json({message:'task deleted '+index})
}