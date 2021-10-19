new Vue({
    el:'#seccion',
    data:{
        programar:'',
        anios:'',
        metas:'',
        experiencia:'',
        leng:'',
        arraylenguaje:[],
        sino: true
    },
    methods:{
        gustar(){
            if(this.programar=="Si"){
                    this.sino=true;
            }else{
                this.sino=false;
            }
        },
        agregarLeng(){
            this.arraylenguaje.push(this.leng);
            this.leng='';
        },
        
        
    }
   
});