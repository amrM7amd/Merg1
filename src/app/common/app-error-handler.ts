import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error)
    {
    //instead of Alert in Real application use Toast is better & usr friendly
    //instead of log  => log error on the server
         
        alert("An unexpected error occured. ");
        console.log(error);

    }
    
}