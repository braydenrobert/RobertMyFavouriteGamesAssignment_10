import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ContentListComponent} from '../content-list/content-list.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {
  @Output() contentAdded = new EventEmitter<{
    id: number;
    title: string;
    description: string;
  }>();
  contents = [
    { id: 1, title: 'Sample Content', description: 'This is a sample content' },
  ];

  constructor(private dialog: MatDialog) {}

  onAddContent() {
    const dialogRef = this.dialog.open(ContentListComponent, {
      width: '250px',
      data: { title: '', description: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contents.push({
          id: this.contents.length + 1,
          title: result.title,
          description: result.description,
        });
        this.contentAdded.emit({
          id: this.contents.length,
          title: result.title,
          description: result.description,
        });
      }
    });
  }
}
