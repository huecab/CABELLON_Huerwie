import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';
  private apiKey = 'live_PKPYE9APTS939p0qzMO4ml5ZTvMDN1afb7pRtz72DB5mx1FapUqhayQrKOl6Wlqf';

  constructor(private http: HttpClient) { }

  getCatImages(limit: number = 21): Observable<any[]> {
    const url = `${this.apiUrl}?limit=${limit}`;
    return this.http.get<any[]>(url, { headers: { 'x-api-key': this.apiKey } });
  }
}
