<template>
  <div style="display: flex">
    <div class="background">
      <img src="@/assets/signUp/Background.png" />
    </div>
    <div class="sign-up-logo">
      <a href="/">
        <img src="@/assets/logo-common.png" class="logo" />
      </a>
    </div>
    <div class="forms-area">
      <div class="forms">
        <span class="forms-head">Create an account</span>
        <form>
          <b-form-group
            label="Full name"
            label-for="name"
            :state="nameState"
            class="custom-form-group"
            invalid-feedback="Invalid form"
          >
            <b-form-input
              id="name"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Email adress"
            label-for="email"
            :state="emailState"
            class="custom-form-group"
            invalid-feedback="Please use a real e-mail"
          >
            <b-form-input
              id="email"
              v-model="email"
              :state="emailState"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Password"
            label-for="password"
            :state="passwordState"
            class="custom-form-group"
            invalid-feedback="Password must be at least 8 characters"
          >
            <b-form-input
              id="password"
              v-model="password"
              :state="passwordState"
              :type="showPassword ? 'text' : 'password'"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Repeat password"
            label-for="repassword"
            :state="repasswordState"
            class="custom-form-group"
            invalid-feedback="Passwords must match"
          >
            <b-form-input
              id="repassword"
              v-model="repassword"
              :state="repasswordState"
              :type="showPassword ? 'text' : 'password'"
              required
            ></b-form-input>
          </b-form-group>
        </form>
        <div class="btn-area">
          <b-btn
            type="submit"
            class="custom-btn-sign-up"
            @click="register()"
            :disabled="isLoading"
          >
            <p style="margin: 0" v-if="isLoading">Loading...</p>
            <p style="margin: 0" v-else>SIGN UP</p>
          </b-btn>
          <img width="99%" src="@/assets/signUp/or.png" />
          <b-btn class="custom-btn-google-sign-up" @click="SignUpGoogle()">
            <img style="margin-right: 5px" src="@/assets/signUp/Google.png" />
            Sign up with GOOGLE
          </b-btn>
        </div>
        <div class="log-in-area">
          <span> Already have an account? </span>
          <a href="#" class="log-in-href" @click="ShowLogin()"> Log in</a>
        </div>
      </div>
    </div>
    <div class="img-area">
      <img class="img-custom-style" src="@/assets/signUp/SignUpImage.png" />
    </div>
    <log-in-modal
      @hide-log="isLogInVisible = false"
      :isVisible="isLogInVisible"
    ></log-in-modal>
  </div>
</template>

<script>
import LogInModal from "@/components/sharedComponents/logInModal/LogInModal.vue";
export default {
  components: {
    LogInModal,
  },
  data() {
    return {
      isLogInVisible: false,
      isLoading: false,
      showPassword: false,
      name: "",
      email: "",
      password: "",
      repassword: "",
      nameState: null,
      emailState: null,
      passwordState: null,
      repasswordState: null,
    };
  },
  computed: {
    isValidForm() {
      return (
        this.nameState === true &&
        this.emailState === true &&
        this.passwordState === true &&
        this.repasswordState === true
      );
    },
    showForm() {
      return !this.isLoading;
    },
  },
  methods: {
    ShowLogin() {
      this.isLogInVisible = true;
    },
    validateInput(inputName) {
      const input = this[inputName];
      return input.length >= 8;
    },
    validateRepass(passName, repassName) {
      const pass = this[passName];
      const repass = this[repassName];
      return pass === repass;
    },
    register() {
      this.nameState = this.name.length > 0;
      this.emailState = /.+@.+/.test(this.email);
      this.passwordState = this.validateInput("password");
      this.repasswordState =
        this.validateInput("repassword") &&
        this.validateRepass("password", "repassword");

      if (this.isValidForm) {
        this.isLoading = true;
        this.$store
          .dispatch("register", {
            name: this.name,
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            if (response) {
              // Успешный вход
            } else {
              console.log(response);
              this.$toasted.show("Account already exists", {
                theme: "bubble",
                position: "top-center",
                duration: 3000,
              });
            }
            this.isLoading = false;
          });
      }
    },
    SignUpGoogle() {
      this.$store.dispatch("loginWithGoogle");
    },
  },
};
</script>

<style scoped>
.background {
  position: absolute;
  top: -30%;
  left: 15%;
  z-index: -1;
}
.sign-up-logo {
  position: absolute;
  top: 2%;
  left: 2%;
}
.logo {
  width: 200px;
}
.forms-area {
  width: 55%;
  display: flex;
  justify-content: center;
  text-align: start;
}
.forms {
  position: relative;
  top: 60px;
  left: 90px;
  height: 50%;
}
.forms-head {
  color: #007878;
  font-size: 48px;
  font-family: "GT Walsheim Pro Medium";
  font-weight: 800;
}
.form-control {
  border-color: #1e8686b0;
}
.custom-form-group {
  margin-bottom: 30px;
  margin-top: 10px;
  font-family: "GT Walsheim Pro Medium";
  font-weight: 300;
  font-size: 16px;
  color: #007878;
  text-align: left;
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
  color: #007878;
}
.btn-area {
  padding: 10px 0px 20px 0px;
  height: 46%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.custom-btn-sign-up {
  background-color: #007878;
  border-color: #61b47d00;
  width: 100%;
  font-family: "GT Walsheim Pro Medium";
  font-size: 18px;
  font-weight: 700;
}
.custom-btn-sign-up:hover {
  background-color: #97d6d6;
  color: #007878;
  border-color: #63acff00;
}
.custom-btn-sign-up:not(:disabled):not(.disabled):active {
  background-color: #007878;
  color: white;
}
.custom-btn-google-sign-up {
  color: #007878;
  background-color: white;
  border-color: #007878;
  width: 100%;
  font-family: "GT Walsheim Pro Medium";
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-btn-google-sign-up:hover {
  background-color: #97d6d6;
  border-color: #63acff00;
}
.custom-btn-google-sign-up:not(:disabled):not(.disabled):active {
  background-color: #007878;
  color: white;
}
.log-in-area {
  display: flex;
  color: black;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  font-family: "GT Walsheim Pro Regular";
}
.log-in-href {
  margin-left: 5%;
  color: #007878;
  text-decoration: none;
}
.log-in-href:hover {
  color: #97d6d6;
  text-decoration: underline;
}
.log-in-href:not(:disabled):not(.disabled):active {
  color: #007878;
}
.img-custom-style {
  height: 100%;
  width: 100%;
  justify-content: flex-end;
}
.img-area {
  width: 45%;
  display: flex;
}
</style>

<style>
.invalid-feedback {
  position: absolute;
  margin: 0;
}
</style>
