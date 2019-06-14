import { Injectable } from '@angular/core';
import { ProductCode } from 'src/app/models/ProductCode';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCodeService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

    private productCodesURL = 'http://localhost:8080/Catalogo/webresources/entitys.productcode';

    getProductCode() : Observable<ProductCode[]>{
      return this.http.get<ProductCode[]>(this.productCodesURL)
        .pipe(
          tap(_ => this.log('fetched product codes')),
          catchError(this.handleError<ProductCode[]>('getProductCode', []))
        );          
    }

    private log(message: string){
      this.messageService.add(`Product Service: ${message}`);
    }
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}