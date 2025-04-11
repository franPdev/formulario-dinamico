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
            
            ></v-text-field>

            <!-- Los campos de tipo select -->

            <v-select
            v-else-if="campo.type === 'selectable'"
            :label="campo.label"
            :items="campo.options"
            v-model="fromData[campo.name]">
        
            </v-select>
     
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

// Aca inicio los valores por defecto del JSON

config.fields.forEach((campo) => {
    fromData[campo.name] = campo.default ??''
})

function enviarFormulario() {
    console.log('Datos enviados:', JSON.stringify(fromData, null, 2))   
}
</script>