<!DOCTYPE html>
<html>

<head>
    <title>To-do's</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="/assets/css/styles.css" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="d-flex flex-column ">
        <div class="flex-fill d-flex justify-content-end p-3">
            <div class="w-25 input-group mb-3">
                <input type="text" class="form-control" placeholder="Search">
                <a class="btn btn-primary" id="newTaskBtn"><i class="fa fa-file"></i> New Task</a>
            </div>
        </div>
        <div>
            <table class="table" id="taskListTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>


    <div class=" modal" id="taskFormModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">New Task</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" id="taskName" value="test" placeholder="Name of task">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Priority</label>
                        <select class="form-control" id="taskPriority">
                            <option value="">-Priority-</option>
                            <option selected value="high">High</option>
                            <option value="moderate">Moderate</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Status</label>
                        <select class="form-control" id="taskStatus">
                            <option value="">-Status-</option>
                            <option selected value="new">New</option>
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-type='create' id="saveTaskBtn">Save</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/e29a6e5cfc.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="/assets/js/tasks/task-request.js" type="text/javascript"></script>
    <script src="/assets/js/tasks/task-services.js" type="text/javascript"></script>
    <script src="/assets/js/scripts.js" type="text/javascript"></script>

    <script>
        $(document).ready(function() {
            const taskService = new TaskService();
        });
    </script>
</body>

</html>