<template>
    <div>
        <p>Generador imágenes</p>

        <hr />

        <textarea name="Text1" cols="40" rows="5" v-model="promptsImagen"></textarea>
        <button v-on:click="prueba">INTRODUCIR PROMPTS</button>
        <hr />
        <label>IMAGEN: </label>
        <div v-if="this.urlImagen!=''">
        <img src="{{this.urlImagen}}"/>    
        </div>


    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "ImageComponent",
    data() {
        return {
            promptsImagen: "",
            urlImagen: "",
          
        }
    },
    methods: {
        prueba() {

            '388cb6f68fd8093e77f9927432536a800ac49aac'

            const headers = { 'Authorization': 'Token 388cb6f68fd8093e77f9927432536a800ac49aac' }
            const url = "https://api.nlpcloud.io/v1/gpu/stable-diffusion/image-generation";

            const data = {
                "text": this.promptsImagen
            }

            axios.post(url, data, { headers: headers }).then(response => {
                console.log(response.data)
                console.log(response.data.url)
              //  this.textoResumido = response.data.url
            }).catch(error => {
                console.log(error)
            })


            
        }
    },
    mounted() {

    }
}
</script>