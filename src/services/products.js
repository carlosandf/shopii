import { API_URL } from '../utils/constants.js';

export class ProductsApi {
  async getAll () {
    try {
      const res = await fetch(`${API_URL}/products`);

      if (!res.ok) throw Error('Error inesperado');

      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
