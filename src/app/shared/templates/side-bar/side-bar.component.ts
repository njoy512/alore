import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSegmentModalComponent } from '../../modals/add-segment-modal/add-segment-modal.component';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  segmentList2: any[] = [];
  subscription: any;

  constructor(private messageService: MessageService, public dialog: MatDialog) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      // console.log(message);
      if (message.data.action == 'segment') {
        this.segmentList2.push(message.data.item);
      } else if (message.data.action == 'table') {
        // this.updateTableList(message.data.item, message.data.index);
      }
      // console.log(this.segmentList2);
    });
  }

  ngOnInit(): void {
  }

  gotoAddSegment(): void {
    const dialogRef = this.dialog.open(AddSegmentModalComponent, {
      width: '550px',
      // data: { index: segmentIndex }
    });

    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }

  // // to update tableList
  updateTableList(tableItem: any, segmentIndex: number) {
    this.segmentList2[segmentIndex].tableList.push(tableItem);
  }

}
