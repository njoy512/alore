import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-list-segments',
  templateUrl: './list-segments.component.html',
  styleUrls: ['./list-segments.component.scss']
})
export class ListSegmentsComponent implements OnInit {

  segmentList: any[] = [];
  subscription: any;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log(message);
      if (message.data.action == 'segment') {
        this.segmentList.push(message.data.item);
      } else if (message.data.action == 'table') {
        this.updateTableList(message.data.item, message.data.index);
      }
      // console.log(this.segmentList);
    });
  }

  ngOnInit(): void {
  }

  // to update tableList
  updateTableList(tableItem: any, segmentIndex: number) {
    console.log(tableItem, segmentIndex);
    this.segmentList[segmentIndex].tableList.push(tableItem);
    console.log(this.segmentList);
  }

}
