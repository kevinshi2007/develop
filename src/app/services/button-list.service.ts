import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Button} from '../models/button.model';

@Injectable()
export class ButtonListService {

    buttonsUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  /** GET buttons from the server */
  getButtonList (): Observable<Button[]> {
    return this.http.get<Button[]>(this.buttonsUrl);
  }
}

