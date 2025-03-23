<template>
  <form>
    <input type="text" name="busca" id="busca" v-model="busca" />
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos" />
  </form>
</template>

<script>
import router from '@/router'
export default {
  data() {
    return {
      busca: '',
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } })
    },
  },
}
</script>

<style scoped></style>
