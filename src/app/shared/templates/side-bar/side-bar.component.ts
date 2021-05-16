import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  segmentList: any[] = [];
  subscription: any;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      // console.log(message);
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
    this.segmentList[segmentIndex].tableList.push(tableItem);
  }

}
