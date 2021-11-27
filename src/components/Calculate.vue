<template>
  <div>
    <div :class="[isActive ? 'text-black' : 'text-red']" >{{ counter - textInput.length }}</div>
      <br>
      <br>
    <div id="container">
      <input type="text" v-model="textInput" v-on:keydown="clearMessage" class="textInput" :placeholder="`${placeholder}`">
    </div>
    <button id="calculateButton" name="submit" @click="calculateString">{{ buttonText }}</button>
    <p :class="errorClass">{{ errorMessageShort }}</p>
    <p :class="errorClass">{{ errorMessageLong }}</p>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import { isPrime, addLetters } from "../libs/prime";

export default {
  name: "Calculate",
  data() {
    return {
      textInput: "",
      counter: 10,
      isActive: true,
      hasError: false,
      resultMessage: "",
      showError: false
    }
  },
  props: {
    placeholder: String,
    buttonText: String,
  },
  methods: {
    calculateString: function() {
      if (this.$data.textInput.length === 0 || this.$data.textInput.length > 10) {
        this.hasError = true;
        this.showError = true;
      }
      const sum = addLetters(this.$data.textInput);
      this.resultMessage = isPrime(sum) ? `${sum} is a prime number` : `${sum} is not a prime number`;
    },
     clearMessage: function() {
      this.hasError = false;
      this.resultMessage = '';
    }
  },
  computed: {
    errorMessageShort() {
      return this.hasError && this.textInput.length === 0 ? "Please input alphabetic characters" : "";
    },
    errorMessageLong() {
      return this.hasError && this.textInput.length > 10 ? "ERROR: TEXT TOO LONG" : "";
    },
    errorClass() {
      return {
        show: this.hasError && (this.textInput.length === 0 || this.textInput.length > 10),
        hidden: this.textInput || this.textInput.length <= 10,
      }
    },
    result() {
      return this.$data.resultMessage;
    }
  },
  updated: function() {
    if (this.$data.textInput.length === 0) {
      this.showError = false;
      this.resultMessage = "";
    }
    if (this.$data.textInput.length > 10) {
      this.showError = false;
      this.resultMessage = "";
    }
    this.$data.textInput.length > 10 ? this.$data.isActive = false : this.$data.isActive = true;
  },
}
</script>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  width: 10em;
  height: 3em;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#applicationSubmit {
  display: flex;
  flex-direction: column;
}
.textInput {
  font-family: 'Helvetica neue';
  font-size: .9em;
  font-weight: 400;
  text-align: center;
  width: 20em;
  height: 2em;
  resize: none;
  border: solid #039efa 3px;
  border-radius: 10px;
}
#calculateButton {
  display: flex;
  align-self: center;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #fff !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #039efa;
	padding: 20px;
	border-radius: 5px;
	display: inline-block;
	border: none;
	transition: all 0.4s ease 0s;
}
#calculateButton:hover {
  cursor: pointer; 
  background: #434343;
	letter-spacing: 1px;
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.4s ease 0s;
}
.text-black {
  color: black;
}
.text-red {
  color: red;
}
.hidden {
 display: none;
}
.show {
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: 2em;
}
</style>