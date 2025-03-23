<template>
  <header class="the-header">
    <nav>
      <RouterLink to="/" class="logo">
        <img src="@/assets/img/ranek.svg" alt="ranek" />
      </RouterLink>
      <RouterLink to="/login" class="btn"> Vender / Login </RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped></style>
