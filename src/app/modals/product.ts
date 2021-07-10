export class Product {
    id: number = 0;
    name: string = '';
    price: number = 0;
    url: string = '';
    description: string = '';

    constructor(values: any = {}) {
        this.id = values.id || 0;
        this.name = values.name || '';
        this.price = values.price || 0;
        this.url = values.url || '';
        this.description = values.description || '';
    }

}
