'use strict';

class TaskRequestService
{
    baseUrl

    constructor() { 
        this.baseUrl = 'http://localhost:8008/';
    }
    
    post(endpoint, data) {
        return $.ajax(
            {
                method: 'POST',
                url: `${this.baseUrl}${endpoint}`,
                data: data,
                dataType: 'json'
            }
        );
    }

    get(endpoint, data) {
        return $.ajax(
            {
                method: 'GET',
                url: `${this.baseUrl}${endpoint}`,
                data: data,
                dataType: 'json'
            }
        );
    }

    put(endpoint, data) {
        return $.ajax(
            {
                method: 'PUT',
                url: `${this.baseUrl}${endpoint}`,
                data: data,
                dataType: 'json'
            }
        );
    }

    delete(endpoint, data) {
        return $.ajax(
            {
                method: 'DELETE',
                url: `${this.baseUrl}${endpoint}`,
                data: data,
                dataType: 'json'
            }
        );
    }
}