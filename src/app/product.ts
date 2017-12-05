export interface IProduct{
    sku: string;
    name: string;
    type: string;
    category: string;
    short_description: string;
    long_description: string;
    brand: string;
    onsale: boolean;
    small_image: string;
    large_image: string;
    price: string[];
}