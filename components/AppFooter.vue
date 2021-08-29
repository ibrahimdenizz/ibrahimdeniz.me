<template>
  <footer>
    <div class="social">
      <a
        href="https://twitter.com/ibrahimdeniz44"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
      </a>
      <a
        href="https://github.com/ibrahimdenizz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'github']" class="icon" />
      </a>
      <a
        href="https://github.com/ibrahimdenizz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  text-align: right;
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 100;
  background: #fff;
}

.social {
  margin-right: 10rem;
}

.icon {
  color: black;
  margin: 1rem 1.5rem;
}
</style>
