import { Product } from "../models/product.model";
import { faker } from '@faker-js/faker';

export const generateOneProduct = (): Product => {
    return {
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        description: faker.commerce.productDescription(),
        category: {
          id: faker.number.int(),
          name: faker.commerce.department()
        },
        images: [faker.image.url(),faker.image.url()]
      }
}

export const generateManyProducts = (size:number = 2): Product[] => {
    const products: Product[] = [];
    for (let i = 0; i < size; i++) {
        products.push(generateOneProduct());
    }
    return [...products];
}