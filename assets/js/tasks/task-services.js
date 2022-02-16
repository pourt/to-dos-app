'use strict';

class TaskService
{

    requestService

    constructor()
    { 
        this.requestService = new TaskRequestService();

        this.initializeNewTaskButton();

        this.initializeTaskTable();
    }

    initializeNewTaskButton()
    {
        const self = this;

        $("#newTaskBtn").on("click", function () {
            $("#taskFormModal").modal('show');
        });

        self.initializeNewTaskForm();
    }

    initializeTaskTable()
    {
        this.getTaskListRequest().then(
            response => {
                const responseData = response.data;

                this.buildTaskTable(responseData);
            },
            error => {
                console.log('initializeTaskTable', error);
            }
        );  
    }

    buildTaskTable(taskLists)
    {
        const taskListTable = document.getElementById("taskListTable").getElementsByTagName('tbody')[0];

        taskListTable.innerHTML = '';

        Array.from(taskLists).forEach(rowData => {
            let newRow = taskListTable.insertRow(-1);

            Object.entries(rowData).forEach((value, key) => {
                let newCell = newRow.insertCell(key);
                newCell.innerHTML = value[1];
            });

            let actionCell = newRow.insertCell(-1);
            actionCell.innerHTML = `
                <a href='javascript:;' id="editTask" data-id='${rowData['id']}'><i class="fa fa-pencil"></i></a> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href='javascript:;' id="deleteTask" data-id='${rowData['id']}'><i class="fa fa-trash"></i></a>
            `;
        });

        this.initializeDeleteButton();

        this.initializeUpdateButton();
    }

    initializeNewTaskForm()
    {
        const saveTaskBtn = document.querySelector("#saveTaskBtn");

        saveTaskBtn.addEventListener('click', (evt) => {
            this.saveTask(saveTaskBtn.dataset.type);
        });
    }

    saveTask(type)
    {
        if (type == 'create')
        {
            this.createTask();
        } else if (type == 'update')
        {
            this.updateTask();
        }
        
    }

    createTask()
    {
        const taskModel = ['Name', 'Priority', 'Status'];

        let requestData = {}; 

        taskModel.forEach(field => {

            let fieldElement = document.querySelector(`#task${field}`);
            let fieldKey = field.toLowerCase();

            let data = [];
            data[fieldKey] = fieldElement.value;

            Object.assign(requestData, data);
        });

        //insert validation here

        this.saveNewTaskRequest(requestData).then(
            response => {
                const responseData = response.data;

                this.initializeTaskTable();

                $("#taskFormModal").modal('hide');
            },
            error => {
                console.log('saveNewTask', error);
            }
        );
    }

    initializeUpdateButton()
    {
        const taskTableRows = document.querySelectorAll("#taskListTable tbody tr");
        Array.from(taskTableRows, (rowElement) => {
            let updateBtn = rowElement.querySelector("#editTask");

            updateBtn.addEventListener('click', evt => {
                $("#taskFormModal").modal('show');
                $("#taskFormModal").attr('data-id', updateBtn.dataset.id);
                $("#taskFormModal").find("#saveTaskBtn").attr('data-id', updateBtn.dataset.id);
                $("#taskFormModal").find("#saveTaskBtn").attr('data-type', 'update');

                this.setFormValues(rowElement);
            });
        });
    }

    setFormValues(rowElement)
    {
        const formValues = rowElement.children;

        document.querySelector(`#saveTaskBtn`).setAttribute('data-id', formValues[0].textContent);
        document.querySelector(`#taskName`).value = formValues[1].textContent;
        document.querySelector(`#taskPriority`).value = formValues[2].textContent;
        document.querySelector(`#taskStatus`).value = formValues[3].textContent;
    }

    updateTask()
    {
        let id = $("#taskFormModal").find("#saveTaskBtn").attr('data-id');
        const taskModel = ['Name', 'Priority', 'Status'];

        let requestData = {}; 

        taskModel.forEach(field => {

            let fieldElement = document.querySelector(`#task${field}`);
            let fieldKey = field.toLowerCase();

            let data = [];
            data[fieldKey] = fieldElement.value;

            Object.assign(requestData, data);
        });

        Object.assign(requestData, {'id' : id});

        //insert validation here

        console.log('requestData', requestData);

        this.updateTaskRequest(requestData).then(
            response => {
                const responseData = response.data;

                this.initializeTaskTable();

                $("#taskFormModal").modal('hide');
            },
            error => {
                console.log('updateTaskRequest', error);
            }
        );
    }

    initializeDeleteButton()
    {
        const taskTableRows = document.querySelectorAll("#taskListTable tbody tr");
        Array.from(taskTableRows, (rowElement) => {
            let deleteBtn = rowElement.querySelector("#deleteTask");

            
        });
    }

    deleteTask(id)
    {
        let requestData = {
            'id': id
        };

        this.deleteTaskRequest(requestData).then(
            response => {
                const responseData = response.data;

                this.initializeTaskTable();

            },
            error => {
                console.log('saveNewTask', error);
            }
        );
    }

    //Request Services Injection

    getTaskListRequest()
    {
        return this.requestService.get('task');
    }

    saveNewTaskRequest(requestData)
    {
        return this.requestService.post('task', requestData);
    }

    deleteTaskRequest(requestData)
    {
        return this.requestService.delete('task', requestData);
    }

    updateTaskRequest(requestData)
    {
        return this.requestService.put('task', requestData);
    }
}