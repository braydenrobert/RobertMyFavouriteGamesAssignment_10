import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'helper-files/content-interface';
import { ContentServiceService } from '../content-service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  content: Content;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentServiceService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id'); // Get id parameter from URL
    this.contentService.getContentById(id)
      .subscribe(content => {
        this.content = content;
        this.messageService.add(`Content with id=${content.id} and title='${content.title}' retrieved`);
      });
  }

  goBack(): void {
  }
}
