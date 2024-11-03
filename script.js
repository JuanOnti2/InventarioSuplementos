const { createApp } = Vue;

createApp({
  data() {
    return {
      newProduct: { name: '', unitPrice: 0, quantity: 0 },
      inventory: []
    };
  },
  computed: {
    totalStock() {
      return this.inventory.reduce((total, product) => total + product.quantity, 0);
    },
    totalInvestment() {
      return this.inventory.reduce((total, product) => total + product.totalPrice, 0);
    }
  },
  methods: {
    addProduct() {
      if (this.inventory.length >= 12) {
        alert("El inventario ha alcanzado su límite de 12 productos."); // Mensaje si se supera el límite
        return;
      }
      if (this.newProduct.quantity > 12) {
        alert("La cantidad máxima permitida es de 12 unidades."); // Agregar mensaje de alerta si se supera el límite
        return;
      }
      const product = {
        ...this.newProduct,
        totalPrice: this.newProduct.unitPrice * this.newProduct.quantity
      };
      this.inventory.push(product); // Agrega producto al inventario
      this.newProduct = { name: '', unitPrice: 0, quantity: 0 }; // Resetea el formulario
    }
  }
}).mount('#app');
