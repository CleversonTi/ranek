<script>
import ProdutosBuscarVue from '@/components/ProdutosBuscar.vue'
import ProdutosListaVue from '@/components/ProdutosLista.vue'

export default {
  name: 'home',
  components: {
    ProdutosBuscarVue,
    ProdutosListaVue,
  },
}
</script>

<template>
  <section>
    <h1>Compre ou Venda</h1>
    <ProdutosBuscarVue />
    <ProdutosListaVue />
  </section>
</template>
<style scoped></style>
