<template>
    <h2 class="font-bold text-primary-pressed">{{title}}</h2>
</template>
<script setup lang="ts">
defineProps({
    title : {
        type : String,
        default : "Masuk",
        required : true
    }
})
</script>