<template>
  <section class="contacts-section">
    <div>
      <h3>Contact Form</h3>
      <b-form @submit.prevent="onSubmit()">
        <b-form-group>
          <b-form-input
            v-model="fullName"
            type="text"
            placeholder="Full Name"
            class="contact-form-input"
          />
        </b-form-group>

        <b-form-group>
          <b-form-input
            v-model="email"
            type="text"
            placeholder="Email Address"
            class="contact-form-input"
          />
        </b-form-group>

        <b-form-group>
          <b-form-input
            v-model="subject"
            type="text"
            placeholder="Subject"
            class="contact-form-input"
          />
        </b-form-group>

        <b-form-group>
          <b-form-textarea
            v-model="message"
            type="textarea"
            placeholder="Your Message"
            class="contact-form-input contact-form-textare"
          />
        </b-form-group>

        <b-button
          class="contact-button"
          type="submit"
          :disabled="!doSendMessage ? false : true"
          >Send Message</b-button
        >
      </b-form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      subject: '',
      message: '',
      doSendMessage: false,
    }
  },
  methods: {
    async onSubmit() {
      const { fullName, email, subject, message } = this
      this.doSendMessage = true
      await this.$axios.post('api/contact/send-message', {
        fullName,
        email,
        subject,
        message,
      })
      this.doSendMessage = false
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts-section {
  padding-top: 10%;
  max-width: 1000px;
  margin: 0 auto;

  .contact-form-input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    margin: 2rem 0;
  }

  .contact-form-input:focus,
  .contact-form-input:active {
    outline: none;
    box-shadow: none;
    border-bottom-color: #f26b38;
  }

  .contact-form-textare {
    height: 10rem;
  }

  .contact-button {
    background-color: #f26b38;
    border: none;
    padding: 0.7rem;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 900px) {
  .contacts-section {
    div {
      margin: 2rem 2rem 0 2rem;
    }
  }
}
</style>
