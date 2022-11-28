<template>

<div class="container">



    <div class="row"  >

        <div class="col-sm">
            <p>INPUT</p>
            
            <hr />
            
            <form method="post" v-on:submit.prevent="prueba()">
            
                <div class="form-group shadow-textarea">
            
                    <textarea cols="40" rows="5" v-model="textoATraducir" class="form-control z-depth-1"
                        style="color: antiquewhite; background-color: darkblue;"
                        placeholder="Introduzca el texto a traducir"></textarea>
            
                </div>
            
            
                <!--   <textarea name="Text1" cols="40" rows="5" v-model="textoATraducir" class="form-control" style="color: antiquewhite; background-color: darkblue;"></textarea> -->
            
                <select v-model="idiomaOrigen" class="form-control">
                    <option selected disabled value="">Traducir del</option>
                    <option value="eng_Latn">Inglés</option>
                    <option value="spa_Latn">Español</option>
                    <option value="fra_Latn">Francés</option>
                    <option value="ita_Latn">Italiano</option>
                    <option value="rus_Latn">Ruso</option>
                    <option value="zho_Hans">Chino (Simplificado)</option>
                    <option value="jpn_Latn">Japonés</option>
                </select>
                <select v-model="idiomaDestino" class="form-control">
                    <option selected disabled value="" class="form-control">Traducir al</option>
                    <option value="eng_Latn">Inglés</option>
                    <option value="spa_Latn">Español</option>
                    <option value="fra_Latn">Francés</option>
                    <option value="ita_Latn">Italiano</option>
                    <option value="rus_Latn">Ruso</option>
                    <option value="zho_Hans">Chino (Simplificado)</option>
                    <option value="jpn_Latn">Japonés</option>
                </select>
            
                <button class="btn btn-info">TRADUCIR</button>
            </form>
        </div>
        
        <div class="col-sm">
       
            <label>TRADUCCIÓN: </label>
                <hr />
            <p cols="40" rows="5">{{this.textoTraducido}}</p>
        
        </div>



    </div>
       
   
   
    
    </div>
</template>
<script>
import axios from 'axios';

export	default {
    name:	"TranslatorComponent",
    data()	{
        return	{
            textoATraducir:	"",
            textoTraducido:    "",
            idiomaOrigen: "",
            idiomaDestino: "",
        
        }
    },
    methods:	{
        prueba()	{
            
            if(this.textoATraducir==""||this.idiomaOrigen==""||this.idiomaDestino==""){
                alert("Introduzca un texto a traducir, y seleccione idioma origen y destino");}else{

             

            const headers = {'Authorization': 'Token 388cb6f68fd8093e77f9927432536a800ac49aac'}
            const url = "https://api.nlpcloud.io/v1/nllb-200-3-3b/translation";

            const data = {
                "text": this.textoATraducir,
                "source": this.idiomaOrigen,
                "target": this.idiomaDestino
            }   

            console.log(data)

            axios.post(url, data, {headers: headers}).then(response => {
                alert("Traduciendo, por favor espere unos segundos a que el servidor devuelva la traducción");
                console.log(response.data)
                console.log(response.data.translation_text)
                this.textoTraducido = response.data.translation_text
            }).catch(error => {
                console.log(error)
            })

        }}
    }, 
    mounted()	{

    }
}
</script>