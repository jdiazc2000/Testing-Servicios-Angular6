import { Category } from './category.model';

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  taxes?: number;
}

export interface CreateProductDTO {
  title: string;
  price: number;
  images: string[];
  description: string;
  taxes?: number;
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }

