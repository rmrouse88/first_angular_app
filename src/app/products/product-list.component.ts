import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product"
import { ProductService } from "./product.service";

@Component({
    selector: "product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent 
    implements OnInit {
        pageTitle: string = "Product List";
        imageWidth: number = 50;
        imageMargin: number = 2;
        showImage: boolean = false;
        errorMessage: string;

        // use getter and setter for the listFilter field on the DOM

        _listFilter: string;

        get listFilter(): string {
            return this._listFilter;
        }

        set listFilter(value:string) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        }
        
        filteredProducts: IProduct[];

        products: IProduct[] = [];

        constructor(private _productService : ProductService) {}

        ngOnInit(): void { //no return type, so make the return type = 'void'
            this._productService.getProducts()
                .subscribe(
                    products => {
                        this.products = products;
                        this.filteredProducts = this.products;
                    },
                    error => this.errorMessage = <any>error);
            
            console.log('In OnInit');
            }
    
        performFilter(filterBy: string): IProduct[] {
            filterBy = filterBy.toLocaleLowerCase();
            return this.products.filter((product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        };
        
        toggleImage(): void {
            this.showImage = !this.showImage;
        }

        onRatingClicked(message : string) : void {
            this.pageTitle = 'Product List: ' + message;
        }
}