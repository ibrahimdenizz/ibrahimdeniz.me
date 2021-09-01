<template>
  <div class="project">
    <div>
      <img :src="project.image" alt="project image" width="450" height="300" />
    </div>
    <div>
      <h1>{{ project.name }}</h1>
      <p>{{ project.desc }}</p>
      <div class="buttons">
        <a
          :href="project.githubLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          Github Repo
        </a>
        <a
          :href="project.liveCode"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  margin-bottom: 4rem;

  div {
    margin-right: 4rem;
  }

  img {
    border: lightgray solid 1px;
    border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .buttons {
    margin-top: 2rem;

    .btn {
      background-color: #f26b38;
      color: #fff;
      margin-right: 1rem;
    }
    .btn:hover {
      background-color: darken(#f26b38, 10);
      color: #fff;
    }
  }
}
</style>
