<template>
    <div class="flex text-md justify-center items-center h-screen">
        <CenteredBox>
            <Header2Vue title="Masuk" />
            <InputField v-model="email" placeholder="Email" />
            <InputField v-model="password" isPassword placeholder="password" />
            <label class="text-sm flex justify-end text-primary-pressed">Lupa Password ?
            </label>
            <Button @pressed="login" title="Masuk" />
        </CenteredBox>
    </div>
</template>
<script setup lang="ts">
import CenteredBox from "../components/CenteredBox.vue";
import Button from "../components/LoginForm/Button.vue";
import InputField from "../components/LoginForm/InputField.vue";
import Header2Vue from "../components/LoginForm/Header2.vue";


import { ref, toRef, reactive, watchEffect, VueElement } from "vue";
import LoginUseCase from "../../domain/usecases/interactor/user/login-use-case";
import UserLocalRepository from "../../data/local/user-local-repository";
import { useRouter } from "vue-router";

const email = ref("tnaisey0@wikimedia.org");
const password = ref("Lg68SO9n8");

const proses = reactive({
    isLoading: false,
    error: {
        status: false,
        message: "",
    },
});
const router = useRouter()
async function login(){
    const usercase = new LoginUseCase(new UserLocalRepository())
    try {
        proses.isLoading = true;
        const result = await usercase.execute(email.value, password.value);
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("email", email.value);
        
        router.push("/dashboard");

        console.log(result.email)
    } catch (error) {
        console.log(error)
        const a : string = error as string
        proses.error.status = true;
        proses.error.message = a;
    } finally {
        proses.isLoading = false;
    }
};
</script>
