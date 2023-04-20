import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from 'helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  private apiUrl = 'http://localhost:3000/content';

  constructor(private http: HttpClient) {}

  testFunction(content: Content): Observable<any> {
    return this.http.post<any>(this.apiUrl, content);
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  private contentUrl = 'api/content';


  // Function to get content details by id
  getContentById(id: number): Observable<Content> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<Content>(url);
  }
}



