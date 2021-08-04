import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  constructor(public dialog: MatDialog) { }


  openNewFormDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: '../../dialogs/dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}