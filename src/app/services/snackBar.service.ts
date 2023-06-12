import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IipAddress } from '../models/ipModel';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    constructor(private snackBar: MatSnackBar,) { }
    
    openSuccessSnackBar(message:string) {
        this.snackBar.open(message, '', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 3000,
            panelClass: ['add-snackbar']
        });
    }

    openDeleteSnackBar(message: string) {
        this.snackBar.open(message, '', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 3000,
            panelClass: ['delete-snackbar']
        });
    }


}