<template>
    <label>Hellow Dashboard</label>
    <button @click="logout">Logout</button>
</template>
<script setup lang="ts">

import {useRouter} from "vue-router"

const router = useRouter()

function logout(){
    localStorage.removeItem("isAuth");
    localStorage.removeItem("email");
    router.push("/login");
}

</script>