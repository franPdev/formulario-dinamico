<template>
  <div>
    <v-text-field
      v-if="esTexto"
      :type="campo.type"
      :label="campo.label"
      v-model="valor"
      :rules="rules"
      clearable
    ></v-text-field>

    <v-select
      v-else-if="campo.type === 'selectable'"
      :label="campo.label"
      :items="campo.options"
      v-model="valor"
      :rules="rules"
      clearable
    >
    </v-select>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Campo } from "../types";

//Props

const props = defineProps<{
  campo: Campo;
  modelValue: any;
  rules: ((v: any) => true | string)[];
}>();

const emit = defineEmits(["update:modelValue"]);

//computed

const valor = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const esTexto = ["text", "email", "number"].includes(props.campo.type);
</script>
