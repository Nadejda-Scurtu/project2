<template>
  <b-modal
    id="modal-login"
    ref="myModal"
    @show="resetModal"
    @hidden="hideLogIn()"
    :visible="isVisible"
    hide-header
    hide-footer
  >
    <div class="area-for-log-in-modal">
      <div class="log-in-header-area">
        <span class="log-in-header-text">Welcome back!</span>
        <span class="log-in-header">Log in to your account</span>
      </div>
      <div class="log-in-inputs">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Email address"
            label-for="email"
            invalid-feedback="Fill the e-mail field correctly!"
            :state="emailState"
            class="custom-form-group"
          >
            <b-form-input
              id="email"
              type="email"
              ref="email"
              v-model="email"
              :state="emailState"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Password"
            label-for="password"
            invalid-feedback="Fill the password field"
            :state="passwordState"
            class="custom-form-group"
          >
            <b-form-input
              id="password"
              v-model="password"
              type="password"
              ref="password"
              :state="passwordState"
              required
            ></b-form-input>
          </b-form-group>
          <div class="footer-area-log-in">
            <b-form-group class="custom-form-group">
              <b-form-checkbox
                v-model="rememberMe"
                id="rememberMeCheckbox"
                @change="handleCheckboxChange"
              >
                <p style="margin-bottom: 0; margin-left: 5px">
                  Remember me
                </p></b-form-checkbox
              >
            </b-form-group>

            <div class="forget-log-in">
              <a class="text-forget" href="/SignUp" :class="loginTextClass"
                >Forget your password?</a
              >
            </div>
          </div>
        </form>
      </div>
      <div>
        <div class="modal-button-forlog">
          <b-btn
            class="custom-btn-log-in"
            type="submit"
            :class="loginButtonClass"
            @click="handleOk"
          >
            LOG IN
          </b-btn>
        </div>
        <b-btn
          class="custom-btn-google-log-in"
          :class="googleButtonClass"
          @click="LogInGoogle()"
        >
          <img style="margin-right: 5px" src="@/assets/signUp/Google.png" /> Log
          in with GOOGLE
        </b-btn>
        <div class="new-account-area">
          <span>Create an account</span>
          <b-button
            href="/SignUp"
            variant="link"
            class="btn-custom-link"
            :class="loginTextClass"
          >
            Sign Up</b-button
          >
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: { isVisible: {} },
  data() {
    return {
      rememberMe: false,
      email: "",
      emailState: null,
      submittedEmails: [],

      password: "",
      passwordState: null,
      modalOpen: false,
    };
  },
  methods: {
    hideLogIn() {
      this.$emit("hide-log");
    },
    handleCheckboxChange() {
      const checkbox = document.getElementById("rememberMeCheckbox");
      if (this.rememberMe) {
        checkbox.classList.add("custom-checked"); // Добавляем класс после нажатия
      } else {
        checkbox.classList.remove("custom-checked"); // Удаляем класс, если чекбокс не отмечен
      }
    },
    toggleModal() {
      this.$refs["modal"].toggle("#toggle-btn");
    },

    checkFormValidity() {
      const mailValid = this.$refs.email.checkValidity();
      this.emailState = mailValid;
      const passValid = this.$refs.password.checkValidity();
      this.passwordState = passValid;
      if (!passValid || !mailValid) {
        return false;
      }
      return true;
    },
    resetModal() {
      this.email = "";
      this.emailState = null;
      this.password = "";
      this.passwordState = null;
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },
    validateInput(inputName) {
      const input = this[inputName];
      return input.length >= 8;
    },
    login() {
      this.emailState = /.+@.+/.test(this.email);
      this.passwordState = this.validateInput("password");

      if (this.isValidForm) {
        this.isLoading = true;
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            if (response) {
              // Успешный вход
            } else {
              console.log(response);
              this.$toasted.show("Wrong e-mail or password", {
                theme: "bubble",
                position: "top-center",
                duration: 3000,
              });
            }
            this.isLoading = false;
          });
      }
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.submittedEmails.push(this.email);
      try {
        this.login();
      } catch (error) {
        console.log("error");
      }
    },
    LogInGoogle() {
      this.$store.dispatch("loginWithGoogle");
    },
  },
  computed: {
    isValidForm() {
      return this.emailState === true && this.passwordState === true;
    },
    loginButtonClass() {
      const currentPage = window.location.pathname;
      if (currentPage === "/Shop") {
        return "btn-shop-color";
      } else if (currentPage === "/SignUp") {
        return "btn-common-color";
      }
      return "btn-tours-color";
    },
    googleButtonClass() {
      const currentPage = window.location.pathname;
      if (currentPage === "/Shop") {
        return "google-btn-shop-color";
      } else if (currentPage === "/SignUp") {
        return "google-btn-common-color";
      }
      return "google-btn-tours-color";
    },
    loginTextClass() {
      const currentPage = window.location.pathname;
      if (currentPage === "/Shop") {
        return "txt-shop-color";
      } else if (currentPage === "/SignUp") {
        return "txt-common-color";
      }
      return "txt-tours-color";
    },
  },
};
</script>

<style scoped>
.area-for-log-in-modal {
  padding: 4%;
}
.log-in-header-area {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.log-in-header-text {
  font-family: "GT Walsheim Pro Regular";
  font-weight: 400;
  font-size: 14px;
  color: #757575;
}
.log-in-header {
  font-family: "GT Walsheim Pro Black";
  font-weight: 500;
  font-size: 24px;
  color: #1f3b22;
  padding-top: 1%;
}
.custom-form-group {
  margin-top: 7%;
  font-family: "GT Walsheim Pro Medium";
  font-weight: 300;
  font-size: 16px;
  color: #1f3b22;
}
.custom-form-group .custom-checkbox {
  display: flex;
  width: 120%;
}
.custom-form-group .custom-control-label {
  padding-left: 6%;
  font-size: 14px;
  font-family: "GT Walsheim Pro Medium";
  font-weight: 500;
  color: #1f3b22;
}
.btn-custom-link {
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
}
.btn-custom-link:hover {
  text-decoration: underline;
}
.footer-area-log-in {
  justify-content: space-between;
  display: flex;
  margin-top: 1%;
}
.modal-button-forlog {
  display: flex;
  justify-content: center;
  margin-top: 4%;
}
.new-account-area {
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  font-family: "GT Walsheim Pro Regular";
}
.custom-btn-log-in {
  border-color: #61b47d00;
  color: white !important;
  width: 100%;
  font-family: "GT Walsheim Pro Medium";
  font-size: 18px;
  font-weight: 700;
}
.custom-btn-google-log-in {
  margin-top: 10px;
  background-color: #00000000;
  width: 100%;
  font-family: "GT Walsheim Pro Medium";
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-forget {
  font-size: 14px;
  font-family: "GT Walsheim Pro Medium";
  font-weight: 500;
  text-decoration: none;
}
.text-forget:hover {
  font-size: 14px;
  font-family: "GT Walsheim Pro Medium";
  font-weight: 500;
  text-decoration: underline;
}
.forget-log-in {
  display: flex;
  align-items: flex-end;
}
.btn-common-color {
  background-color: #007878;
}
.btn-common-color:hover {
  background-color: #97d6d6;
}
.btn-common-color:not(:disabled):not(.disabled):active {
  background-color: #007878;
}
.txt-common-color {
  color: #007878;
}
.txt-common-color:hover {
  color: #97d6d6;
}
.txt-common-color:not(:disabled):not(.disabled):active {
  color: #007878;
}
.btn-shop-color {
  background-color: #002886;
}
.btn-shop-color:hover {
  background-color: #238aff;
}
.btn-shop-color:not(:disabled):not(.disabled):active {
  background-color: #002886;
}
.txt-shop-color {
  color: #002886;
}
.txt-shop-color:hover {
  color: #238aff;
}
.txt-shop-color:not(:disabled):not(.disabled):active {
  color: #002886;
}
.btn-tours-color {
  background-color: #1f3b22;
}
.btn-tours-color:hover {
  background-color: #b1b886;
}
.btn-tours-color:not(:disabled):not(.disabled):active {
  background-color: #1f3b22;
}
.txt-tours-color {
  color: #1f3b22;
}
.txt-tours-color:hover {
  color: #b1b886;
}
.txt-tours-color:not(:disabled):not(.disabled):active {
  color: #1f3b22;
}
.google-btn-shop-color {
  border-color: #002886;
  color: #002886 !important;
}
.google-btn-shop-color:hover {
  border-color: #238aff;
  color: white !important;
  background-color: #238aff;
}
.google-btn-shop-color:not(:disabled):not(.disabled):active {
  border-color: #002886;
  color: white !important;
  background-color: #002886;
}
.google-btn-common-color {
  border-color: #007878;
  color: #007878 !important;
}
.google-btn-common-color:hover {
  border-color: #97d6d6;
  color: #007878 !important;
  background-color: #97d6d6;
}
.google-btn-common-color:not(:disabled):not(.disabled):active {
  border-color: #007878;
  color: white !important;
  background-color: #007878;
}
.google-btn-tours-color {
  border-color: #1f3b22;
  color: #1f3b22 !important;
}
.google-btn-tours-color:hover {
  border-color: #CDDDC9;
  color: #1f3b22 !important;
  background-color: #CDDDC9;
}
.google-btn-tours-color:not(:disabled):not(.disabled):active {
  border-color: #1f3b22;
  color: white !important;
  background-color: #1f3b22;
}
</style>
