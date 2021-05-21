<template>
    <div class="section-wrap">
        <h2 class="section-title">Chi sono?</h2>
        <div class="content-container">
            <p>Ciao, mi chiamo Alessandro.</p>
            <p>Sono un Jr. Web Developer di 22 anni, amante dell'informatica e di tutto ciò che la riguarda, sempre pronto all'innovazione e ad imparare nuove tecnologie.</p>
            <p>Sono diplomato come Tecnico Informatico  all'Istituto Tecnico Tecnologico "G. & M. Montani" e specializzato in Sviluppo Web Full Stack tramite Boolean Careers, un corso intensivo di 6 mesi dedicato alla programmazione web.</p>
            <div id="instruction">
                <a href="https://www.istitutomontani.gov.it/nuovo/it/" target="_blank" rel=”noopener”><img id="montani-logo" src="@/assets/logo_montani_nuovo_v4.png" alt="logo Montani" /></a>
                <a href="https://www.boolean.careers/" target="_blank" rel="noopener"><img id="boolean-logo" src="@/assets/logo_boolean.png" alt="logo Boolean" /></a>
            </div>
            <div id="cv">
                <a href="#" target="_blank">Scarica il mio CV</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .content-container {

        p {
            margin-bottom: $margin-mid + 25;
        }

        #instruction {
            display: flex;
            justify-content: space-around;
            margin-top: $margin-max;

            a {
                width: 150px;
                align-self: center;
                text-align: center;

                img {
                    transition: $transition-time;

                    &#montani-logo {
                        @include imgWidthHeight(80%, 80%);
                    }

                    &#boolean-logo {
                        @include imgWidthHeight(100%, 100%);
                        
                    }

                    &:hover {
                        transform:scale(0.96);
                    }
                }
            }
            
        }

        #cv {
            display: flex;
            justify-content: center;
            margin-top: $margin-max;

            a {
                font-size: 20px;
                border: 1px solid $secondary-color;
                padding: 5px 10px;
                border-radius: 4px;
                transition: $transition-time;
                
                &:hover {
                    background-color: $button-color-hover;
                    transform: scale(0.98);
                }
            }
        }
    }

    @media (max-width: $smartphone-max-breakpoint) {
        .section-wrap {
            overflow: scroll;
        }
    }

    @media (min-width: $smartphone-max-breakpoint + 1 ) and  (max-width: $tablet-max-breakpoint) {

    }
</style>