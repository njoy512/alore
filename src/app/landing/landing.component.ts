import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTableModalComponent } from '../shared/modals/add-table-modal/add-table-modal.component';
import { MessageService } from '../shared/service/message.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  segmentList: any[] = [];
  subscription: any;

  tempItems = [
    {
      segmentName: 'Segment 1',
      icon: {
        id: 'santa',
        name: 'Father Christmas',
        colons: ':santa::skin-tone-3:',
        text: '',
        emoticons: [],
        skin: 3,
        native: '🎅🏼'
      },
      desc: '',
      tableList: [
        {
          tableName: 'Table 1',
          icon: {
            id: 'santa',
            name: 'Father Christmas',
            colons: ':santa::skin-tone-3:',
            text: '',
            emoticons: [],
            skin: 3,
            native: '🎅🏼'
          },
          color: 'rgba(207, 223, 255, 1)'
        }
      ]
    },
    {
      segmentName: 'Segment 2',
      icon: {
        id: 'santa',
        name: 'Father Christmas',
        colons: ':santa::skin-tone-3:',
        text: '',
        emoticons: [],
        skin: 3,
        native: '🎅🏼'
      },
      desc: '',
      tableList: [
        {
          tableName: 'Table 1',
          icon: {
            id: 'santa',
            name: 'Father Christmas',
            colons: ':santa::skin-tone-3:',
            text: '',
            emoticons: [],
            skin: 3,
            native: '🎅🏼'
          },
          color: 'rgba(207, 223, 255, 1)'
        },
        {
          tableName: 'Table 2',
          icon: {
            id: 'santa',
            name: 'Father Christmas',
            colons: ':santa::skin-tone-3:',
            text: '',
            emoticons: [],
            skin: 3,
            native: '🎅🏼'
          },
          color: 'rgba(156, 199, 255, 1)'
        }
      ]
    }
  ]

  constructor(private messageService: MessageService, public dialog: MatDialog) {
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
    this.tempItems.forEach(item => {
      this.addSegment(item);
    });
  }

  // to update tableList
  updateTableList(tableItem: any, segmentIndex: number) {
    console.log(tableItem, segmentIndex);
    this.segmentList[segmentIndex].tableList.push(tableItem);
    console.log(this.segmentList);
  }

  addSegment(segmentItem: any) {
    let data = {
      action: 'segment',
      item: segmentItem
    }
    this.messageService.sendMessage(data);
  }

  addTable(tableItem: any, segmentIndex: number) {
    let data = {
      action: 'table',
      item: tableItem,
      index: segmentIndex
    }
    this.messageService.sendMessage(data);
  }

}
