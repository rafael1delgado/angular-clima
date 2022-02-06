import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = `https://api.openweathermap.org/data/2.5/weather?&lang=sp&appid=`
  key2 = 'be665555ac9a1636a085b7a69869a89c';
  key = '33ee2059332d19402b24c2f316dd25d5';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);
  }
}
