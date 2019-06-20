import { Injectable } from '@angular/core';
import { Manufacturer } from 'src/app/models/Manufacturer';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ManufacturerService {
	constructor(private messageService: MessageService, private http: HttpClient) {}

	private manufacturerURL = 'http://f1a61517.ngrok.io/Catalogo/webresources/manufacturer';

	getManufacturer(): Observable<Manufacturer[]> {
		return this.http
			.get<Manufacturer[]>(this.manufacturerURL)
			.pipe(
				tap((_) => this.log('fetched manufacturers')),
				catchError(this.handleError<Manufacturer[]>('getManufacturers', []))
			);
	}

	private log(message: string) {
		this.messageService.add(`Product Service: ${message}`);
	}

	private handleError<T>(operation = 'operation', result?: T) {
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
