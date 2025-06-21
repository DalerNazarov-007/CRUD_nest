import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

const products = [
    {id:1, name: 'Samsung Galaxy S21', category: 'Smartphone'},
    {id:2, name: 'Apple MacBook Pro', category: 'Laptop'},
    {id:3, name: 'Sony m4', category: 'Headphones'},
]

@Injectable()
export class ProductService {
    private products = products;    
    constructor(private configService: ConfigService) {}
    create (body: any){
        this.products.push(body);
        return products;
    }

    get(){
        return this.products;
    }

    getById(id: number){
        return this.products.find(product => product.id === id);
    }

    update(id: number, body: any) {
    const product = this.getById(id)
    if (!product) {
        return null
    }
    if (body.name !== undefined) {
        product.name = body.name
    }
    if (body.category !== undefined) {
        product.category = body.category
    }

    return products;
}


    delete(id: number){
        const productData = products.filter(product => product.id !== id);
        if (productData.length === this.products.length) {
            return null;
        }
        this.products = productData;
        return this.products;
    }

}