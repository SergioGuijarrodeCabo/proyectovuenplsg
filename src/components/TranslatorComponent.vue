<template>
    <div>
        <p>Translator</p>

        <hr/>

        <textarea name="Text1" cols="40" rows="5" v-model="textoAResumir"></textarea>
        <button v-on:click="prueba">RESUMIR</button>
        <hr/>
        <label>RESUMEN: </label>
        <p  cols="40" rows="5" >{{this.textoResumido}}</p>
        
        
    </div>
</template>
<script>
import axios from 'axios';

export	default {
    name:	"TranslatorComponent",
    data()	{
        return	{
            textoAResumir:	"",
            textoResumido:    "aqui va el resumen",
            textoPrueba: " If only my monkey brain could leave me go to sleep and not feel bummed out about the actions of a bunch of morons I just so happen to have spawned in same section of the world as. Trying to stay as stoic as I can by observing things from afar, accepting every side of the discussion as valid from the pov of the speaker and not take it personally, and not let it affect my mental health as long as I can afford to interact and exist independently of my passport."
        }
    },
    methods:	{
        prueba()	{

            '388cb6f68fd8093e77f9927432536a800ac49aac'

            const headers = {'Authorization': 'Token 388cb6f68fd8093e77f9927432536a800ac49aac'}
            const url = "https://api.nlpcloud.io/v1/bart-large-cnn/summarization";

            const data = {
                "text": this.textoAResumir
            }   

            axios.post(url, data, {headers: headers}).then(response => {
                console.log(response.data)
                this.textoResumido = response.data.summary_text
            }).catch(error => {
                console.log(error)
            })

       
           /*  const NLPCloudClient = require('nlpcloud');
            const client = new NLPCloudClient('bart-large-cnn', '388cb6f68fd8093e77f9927432536a800ac49aac', false, 'en');
           // const client = new NLPCloudClient('bart-large-cnn', 'fffd9bbd616a29556a80453936d29df3ef4e9d05', 'en');
           // const client = new NLPCloudClient('bart-large-cnn', '388cb6f68fd8093e77f9927432536a800ac49aac')
            //const client = new NLPCloudClient('bart-large-mnli', '2af258ca502d3f604264ab36a1cecb56c5b61ff5', 'en');

            console.log("texto a resumir: " + this.textoAResumir);
            client.summarization(this.textoPrueba)
                .then(function (response) {
                   // console.log(response.data.summary_text);
                    this.textoResumido = response.data.summary_text;
                    console.log(this.textoResumido);
                })
                .catch(function (err) {
                    console.error(err.response);
                    console.error(err.response.data);
                }); */
        }
    }, 
    mounted()	{

    }
}
</script>