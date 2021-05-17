import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji'

@Component({
  selector: 'app-emoji-selector',
  templateUrl: './emoji-selector.component.html',
  styleUrls: ['./emoji-selector.component.scss']
})
export class EmojiSelectorComponent implements OnInit {

  @Input() icon: any = {
    id: 'santa',
    name: 'Father Christmas',
    colons: ':santa::skin-tone-3:',
    text: '',
    emoticons: [],
    skin: 3,
    native: '🎅🏼'
  };
  @Output() selectEvent = new EventEmitter<any>();

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  change(event: any) {
    // this.selectEvent.emit(event.emoji);
    this.selectEvent.emit(event);
    this.isOpen = false;
    this.icon = event.emoji;
  }

}
