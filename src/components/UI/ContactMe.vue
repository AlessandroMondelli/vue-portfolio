<template>
    <div class="section-wrap">
        <h2 class="section-title">Contattami</h2>
        <div class="content-container clearfix">
            <div class="floated-container form-par">
                <p>Se vuoi, puoi lasciarmi un messaggio, un'idea, un consiglio.</p>
                <p>Qualsiasi cosa!</p>
                <contact-form></contact-form>
            </div>
            <div class="floated-container form-img">
            </div>
        </div>
    </div> 
</template>

<script>
import ContactForm from './Contact/ContactForm.vue'

export default {
    components: {
        ContactForm
    }
    
}
</script>

<style lang="scss" scoped>
    .content-container {

        .form-par {
            width: 70%
        }

        .form-img {
            width: 30%;
        }
    }
</style>