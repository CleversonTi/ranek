<template>
  <div class="produtos-lista">
    <section class="produtos-container">
      <div v-for="produto in produtos" :key="produto.id">
        <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo" />
        <p class="preco">R$ {{ produto.preco }}</p>
        <h2 class="titulo">{{ produto.nome }}</h2>
        <p class="descricao">{{ produto.descricao }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { api } from '@/services.js'
import { serialize } from '@/helpers.js'
import { serializeNew } from '@/helpers.js'

export default {
  name: 'ProdutosLista',
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    }
  },
  computed: {
    url() {
      const query = serialize(this.$route.query)

      return `/produto?_limit=${this.produtosPorPagina}${query}`
    },
  },
  methods: {
    getProdutos() {
      api
        .get(this.url)
        .then((response) => {
          this.produtos = response.data
        })
        .catch((error) => {
          console.error('Erro ao buscar produtos:', error)
        })
    },
  },
  watch: {
    url() {
      this.getProdutos()
    },
  },
  created() {
    this.getProdutos()
  },
}
</script>

<style scoped></style>
