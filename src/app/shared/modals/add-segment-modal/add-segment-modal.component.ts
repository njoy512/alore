import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-add-segment-modal',
  templateUrl: './add-segment-modal.component.html',
  styleUrls: ['./add-segment-modal.component.scss']
})
export class AddSegmentModalComponent implements OnInit {

  icon = {
    id: 'santa',
    name: 'Father Christmas',
    colons: ':santa::skin-tone-3:',
    text: '',
    emoticons: [],
    skin: 3,
    native: '🎅🏼'
  };
  name = '';
  desc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddSegmentModalComponent>,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  nameChangeEvent(event: any) {
    // console.log(event.target.value);
    this.name = event.target.value;
  }

  iconChangeEvent(event: any) {
    // console.log(event.target.value);
    this.icon = event.emoji;
  }

  descChangeEvent(event: any) {
    // console.log(event.target.value);
    this.desc = event.target.value;
  }

  submit() {
    if (this.name != '' && this.desc != '') {
      let data = {
        color: this.desc,
        icon: this.icon,
        segmentName: this.name,
        tableList: []
      }
      console.log(data);
      this.addSegment(data);
      this.onNoClick();
    }
  }

  addSegment(segmentItem: any) {
    let data = {
      action: 'segment',
      item: segmentItem
    }
    this.messageService.sendMessage(data);
  }

  // Close dailog
  onNoClick(): void {
    this.dialogRef.close();
  }

}
