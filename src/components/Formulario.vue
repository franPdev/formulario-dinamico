<template>
  <v-container class=" justify-center align-center fill-height">
    <v-card
      class="pa-8"
      width="400"
      elevation="4"
      rounded="lg"
      color="grey lighten-4"
    >

    <!-- Mensaje de exito -->
     <v-alert
     v-if="formularioEnviado"
     type="success"
     class="mb-6">
    Formulario enviado con exito</v-alert>



      <v-form>
        <h2
          class="form-title">
          {{ config.formTitle }}
        </h2>

        <Campo
          v-for="campo in config.fields"
          :key="campo.name"
          :campo="campo"
          :model-value="fromData[campo.name]"
          :rules="getRules(campo)"
          @update:modelValue="fromData[campo.name] = $event"
          class="mb-6"
           prepend-icon="mdi-account"
         
        />

        <v-btn color="primary" class="mt-4" block @click="enviarFormulario">
          Enviar
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import config from "../data/config.json";
import { reactive, ref } from "vue";

import Campo from "./Campo.vue";

// El objeto reactivo para almacenar los datos del formulario

const fromData = reactive<Record<string, any>>({});

// Variable para controlar el mensaje de exito
const formularioEnviado = ref(false);

//Funcion para getRules

function getRules(campo: any) {
  const rules = [];

  //validaciones para los campos requeridos

  const required = campo.validations?.find((v: any) => v.type === "required");
  if (required) {
    rules.push((v: string) => !!v || required.message);
  }

  //Validacion para minLegth

  const minLength = campo.validations?.find((v: any) => v.type === "minLength");
  if (minLength) {
    rules.push(
      (v: string) => (v && v.length >= minLength.value) || minLength.message
    );
  }

  //Validacion para regex

  const regex = campo.validations?.find((v: any) => v.type === "regex");
  if (regex) {
    const pattern = new RegExp(regex.pattern);
    rules.push((v: string) => (v && pattern.test(v)) || regex.message);
  }

  //Validacion para maxLength
  const maxLength = campo.validations?.find((v: any) => v.type === "maxLength");
  if (maxLength) {
    rules.push(
      (v: any) =>
        (!!v && String(v).length <= maxLength.value) || maxLength.message
    );
  }

  // Agregar validación para el campo "selectable" si no se selecciona una opción
  if (campo.type === "selectable") {
    rules.push((v: any) => !!v || "Este campo es obligatorio");
  }

  return rules;
}

// Aca inicio los valores por defecto del JSON

config.fields.forEach((campo) => {
  fromData[campo.name] = campo.default ?? "";
});

function enviarFormulario() {
  console.log("Datos enviados:", JSON.stringify(fromData, null, 2));
  formularioEnviado.value = true;

  //Rewstablecer el formulario

  config.fields.forEach((campo) => {
    fromData[campo.name] = campo.default ?? "";
  });

   //Ocultar mensaje de exito después de 1 segundo
  setTimeout(() => {
    formularioEnviado.value = false;
  }, 1000); 

}
</script>
