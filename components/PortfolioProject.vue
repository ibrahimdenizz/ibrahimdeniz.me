<template>
  <div class="project">
    <div>
      <img :src="project.image" alt="project image" width="450" height="300" />
    </div>
    <div>
      <h1>{{ project.name }}</h1>
      <p>{{ project.desc }}</p>
      <div class="buttons">
        <a :href="project.githubLink" target="_blank" rel="noopener noreferrer">
          <b-button v-if="project.githubLink" class="btn">
            Github Repo
          </b-button>
          <b-button v-else class="btn" disabled> Github Repo </b-button>
        </a>
        <a :href="project.liveLink" target="_blank" rel="noopener noreferrer">
          <b-button v-if="project.liveLink" class="btn"> Live Demo </b-button>
          <b-button v-else class="btn" disabled> Live Demo </b-button>
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

@media screen and (max-width: 900px) {
  .project {
    display: block;

    img {
      width: 300px;
      height: 200px;
    }

    div {
      margin-right: 0;
      margin: 4rem 0;
    }
  }
}
</style>
