import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogContentExampleDialog } from './dialog-content-example-dialog';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

home:any =  'home';

 constructor(public dialog: MatDialog) {}

 openDialog() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog, {
    data: {
      icon: 'home' /*this.home*/
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  ngOnInit() {
  }

  foods: any[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

}
