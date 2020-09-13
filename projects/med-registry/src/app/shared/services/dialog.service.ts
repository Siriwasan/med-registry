import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';

export interface DialogData {
  title: string;
  content: string;
  buttons: string[];
  style?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  createModalDialog(
    dialogData: DialogData
  ): MatDialogRef<ModalDialogComponent, any> {
    return this.dialog.open(ModalDialogComponent, {
      disableClose: false,
      autoFocus: true,
      data: {
        title: dialogData.title,
        content: dialogData.content,
        buttons: dialogData.buttons,
        style: dialogData.style,
      },
    });
  }
}
