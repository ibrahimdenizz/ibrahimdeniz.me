<template>
  <section class="contacts-section">
    <div>
      <h3>Contact Form</h3>
      <b-form>
        <b-form-group>
          <b-form-input
            type="text"
            placeholder="Full Name"
            class="contact-form-input"
          />
        </b-form-group>

        <b-form-group>
          <b-form-input
            type="text"
            placeholder="Email Address"
            class="contact-form-input"
          />
        </b-form-group>

        <b-form-group>
          <b-form-input
            type="text"
            placeholder="Subject"
            class="contact-form-input"
          />
        </b-form-group>

        <b-form-group>
          <b-form-textarea
            type="textarea"
            placeholder="Your Message"
            class="contact-form-input contact-form-textare"
          />
        </b-form-group>

        <b-button class="contact-button" type="submit" disabled
          >Send Message</b-button
        >
      </b-form>
    </div>
  </section>
</template>

<script>
export default {}
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
</style>
