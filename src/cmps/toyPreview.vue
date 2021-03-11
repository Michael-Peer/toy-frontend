<template>
<!-- <section>
    
</section> -->
        <h1>{{ toy.name }}</h1>
</template>

<script>
export default {
    props: {
        toy: {
            required: true,
        },
    },
};
</script>