<template>
    <v-form>
        <v-container>
            <h2 class="text-h5 mb-4"> {{ config.formTitle }}</h2>
            
            <div v-for="campo in config.fields" :key="campo.name">

            <!-- los campos para el texto, email y numero -->

            <v-text-field
                v-if="campo.type === 'text' || campo.type === 'email' || campo.type === 'number'"
                :type="campo.type"
                :label="campo.label"
                v-model="fromData[campo.name]"
                :rules="getRules(campo)"
                clearable
            
            ></v-text-field>

            <!-- Los campos de tipo select -->

            <v-select
            v-else-if="campo.type === 'selectable'"
            :label="campo.label"
            :items="campo.options"
            v-model="fromData[campo.name]"
            :rules="getRules(campo)"
                clearable
            ></v-select>
          
     
             </div>

             <v-btn class="mt-4" color="primary" @click="enviarFormulario">
                Enviar
             </v-btn>

        </v-container>
    </v-form>
</template>

<script setup lang="ts">
import config from '../data/config.json'
import { reactive } from 'vue'

// El objeto reactivo para almacenar los datos del formulario

const fromData = reactive<Record<string, any>>({})


//Funcion para getRules

function getRules(campo: any){
    const rules = []

    //validaciones para los campos requeridos 

    const required = campo.validations?.find((v: any) => v.type === 'required')
    if (required) {
        rules.push((v: string) => !!v || required.message)
    }

    //Validacion para minLegth

    const minLength = campo.validations?.find((v: any) => v.type === 'minLength')
    if (minLength) {
        rules.push((v: string) => (v && v.length >= minLength.value) || minLength.message)
    }

    //Validacion para regex

   const regex = campo.validations?.find((v: any) => v.type === 'regex')
    if (regex) {
     const pattern = new RegExp(regex.pattern)
        rules.push((v: string) => (v && pattern.test(v)) || regex.message)
    }


    //Validacion para maxLength
    const maxLength = campo.validations?.find((v: any) => v.type === 'maxLength')
    if (maxLength) {
     rules.push((v: any) => (!!v && String(v).length <= maxLength.value) || maxLength.message)

    }

    return rules
}

// Aca inicio los valores por defecto del JSON

config.fields.forEach((campo) => {
    fromData[campo.name] = campo.default ??''
})

function enviarFormulario() {
    console.log('Datos enviados:', JSON.stringify(fromData, null, 2))   
}
</script>