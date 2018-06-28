import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw'

import { IProduct } from './product';

@Injectable()

export class ProductService{

    private _productUrl = 'https://raw.githubusercontent.com/DeborahK/Angular-GettingStarted/master/APM-Final%20V6/src/api/products/products.json';

    constructor(private _http : HttpClient ) {}

    getProducts() : Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    private handleError(err : HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);

    }
}
