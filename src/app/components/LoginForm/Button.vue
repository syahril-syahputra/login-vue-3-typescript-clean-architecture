<template>
    <button
        v-if="!isLoading"
        @click="$emit('pressed')"
        class="bg-primary-main shadow-button py-4 rounded-lg text-white font-bold text-sm hover:bg-primary-hover active:bg-primary-pressed"
    >
        {{ title }}
    </button>
    <div
        v-else
        class="flex flex-row py-4 justify-center items-center space-x-2 text-primary-main"
    >
        <div
            style="border-top-color: transparent"
            class="w-4 h-4 border-4 border-primary-main border-solid rounded-full animate-spin"
        ></div>
        <label>Loading</label>
    </div>
</template>
<script setup lang="ts">
defineEmits({
    pressed: () => {
        return true;
    },
});
defineProps({
    title: {
        type: String,
        default: "Button",
        required: true,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
});
</script>
