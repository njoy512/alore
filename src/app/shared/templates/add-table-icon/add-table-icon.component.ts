import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTableModalComponent } from '../../modals/add-table-modal/add-table-modal.component';

@Component({
  selector: 'app-add-table-icon',
  templateUrl: './add-table-icon.component.html',
  styleUrls: ['./add-table-icon.component.scss']
})
export class AddTableIconComponent implements OnInit {

  @Input() segmentIndex: any = [];

  imgSrc = 'assets/images/plus-black.svg';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  gotoAddTable(): void {
    const dialogRef = this.dialog.open(AddTableModalComponent, {
      width: '550px',
      data: { index: this.segmentIndex }
    });

    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }

}
