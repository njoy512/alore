import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AddSegmentModalComponent } from '../../modals/add-segment-modal/add-segment-modal.component';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  searchChanged: Subject<string> = new Subject<string>();
  filteredSegmentList: any = [];
  searchStr = '';

  segmentList2: any[] = [];
  subscription: any;

  constructor(private messageService: MessageService, public dialog: MatDialog) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      // console.log(message);
      if (message.data.action == 'segment') {
        this.segmentList2.push(message.data.item);
      } else if (message.data.action == 'table') {
      }
      this.searchStr = '';
      this.filteredSegmentList = this.segmentList2;
      // console.log(this.segmentList2);
    });
  }

  ngOnInit(): void {
    this.searchChanged.pipe(
      debounceTime(250)).subscribe((keyword: string) => this.updateFilteredList(keyword));
  }

  gotoAddSegment(): void {
    const dialogRef = this.dialog.open(AddSegmentModalComponent, {
      width: '550px',
      // data: { index: segmentIndex }
    });

    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }



  updateFilteredList(keyword: string) {
    if (keyword != '') {
      this.filteredSegmentList = this._filter(keyword);
    } else {
      this.filteredSegmentList = this.segmentList2;
    }
  }

  searchEvent(event: any) {
    this.searchItem(event.target.value);
  }

  searchItem(keyword: string) {
    // console.log(event.target.value);
    this.searchStr = keyword;
    this.searchChanged.next(keyword);
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.segmentList2.filter((segment: { segmentName: string; tableList: any[] }) => {

      // return segment.segmentName.toLowerCase().includes(filterValue)

      let isTableName = false;
      segment.tableList.forEach(table => {
        if (table.tableName.toLowerCase().includes(filterValue)) {
          isTableName = true;
        }
      });

      return segment.segmentName.toLowerCase().includes(filterValue) || isTableName;

    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
