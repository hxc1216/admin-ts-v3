<script lang="ts" setup>
const props = defineProps({
    collapse:{
        type:Boolean,
        default:true,
    }
})
</script>
<template>
    <div class="side-bar-logo-container" :class="{collapse:props.collapse}" >
        <!-- <transition name=""> -->
        <router-link v-if="props.collapse" to="/">
            v3-admin-vite
        </router-link>
        <router-link v-else to="/">
            <img src="/plubic/favicon.ico" alt="">
        </router-link>
        <!-- </transition> -->
    </div>
</template>