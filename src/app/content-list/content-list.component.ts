import {Component, Inject, OnInit} from '@angular/core';
import { Content } from 'helper-files/content-interface';
import { GamesServiceService } from '../games-service.service';
import { MessageService } from '../message.service';
import { content } from '../../../helper-files/contentDb';
import { ContentTypeFilterPipe } from 'src/app/type-filter.pipe';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-content-list',
  template: `
    <mat-card>
      <mat-card-title>All Content</mat-card-title>
      <mat-card-content>
        <mat-progress-bar *ngIf="isLoading" mode="indeterminate"></mat-progress-bar>
        <mat-grid-list cols="3" rowHeight="400px">
          <mat-grid-tile *ngFor="let content of contents">
            <mat-card>
              <mat-card-header>
                <mat-card-title>{{ content.title }}</mat-card-title>
              </mat-card-header>
              <img mat-card-image [src]="content.imgURL" alt="{{ content.title }}" />
              <mat-card-content>
                <p>{{ content.description }}</p>
              </mat-card-content>
              <mat-card-footer>
                <p>Creator: {{ content.creator }}</p>
                <p>Type: {{ content.type }}</p>
                <p>Tags: {{ content.tags }}</p>
              </mat-card-footer>
            </mat-card>
          </mat-grid-tile>
        </mat-grid-list>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="onCancelClick()">Cancel</button>
      </mat-card-actions>
    </mat-card>
    <div *ngFor="let content of contents">
      <h3>{{ content.title }}</h3>
      <p>{{ content.type }}</p>
      <a [routerLink]="['/detail', content.id]">View Details</a> <!-- Link to content detail page with id parameter -->
    </div>
  `,
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];
  isLoading = false;

  constructor(
    public gamesService: GamesServiceService,
    public messageService: MessageService,
    public dialogRef: MatDialogRef<ContentListComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.gamesService.getContent().subscribe(
      (content) => {
        this.contents = content;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.snackBar.open('Failed to load content. Please try again later.', 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
