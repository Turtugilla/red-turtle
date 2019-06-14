import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { PRODUCTOS } from 'src/app/models/Mock-Products';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private messageService: MessageService,
              private http: HttpClient) { }
  
  private productURL = 'http://33ce68f9.ngrok.io/Catalogo/webresources/entitys.product';

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.productURL)
      .pipe(
        tap(_ => this.log('fetched produducts')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );          
  }
  
  getProduct(id : number) : Observable<Product>{
    const url = `${this.productURL}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }

  updateProduct(product : Product): Observable<any>{
    const url = `${this.productURL}/${product.productId}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_=> this.log(`updated Product id=${product.productId}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  addProduct(product: Product): Observable<any>{
    const url = `${this.productURL}`;
    return this.http.post(url, product, httpOptions).pipe(
      tap(_=> this.log(`added Product id=${product.productId}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  deleteProduct(product: Product): Observable<any>{
    const url = `${this.productURL}/${product.productId}`;
    return this.http.delete(url).pipe(
      tap(_=> this.log(`deleted Product id=${product.productId}`)),
      catchError(this.handleError<any>('deleteProduct'))
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
