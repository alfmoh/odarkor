import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError (error) {
        alert("Sorry, an error just occured. A report has been sent to the administrator");
        console.log(error)
    }
}