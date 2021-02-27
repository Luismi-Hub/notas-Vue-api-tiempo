var app = new Vue({
    el: '#miApp',
        data: {
            nuevoRecordatorio:"",
            listaRecordatorios:[],
             
    },

    mounted() {
      if (localStorage.listaTareas) {
        this.listaRecordatorios = JSON.parse(localStorage.listaTareas)
      }
    },

    methods:{

        anadir: function () {
           this.listaRecordatorios.push(
               {
                titulo:this.nuevoRecordatorio,
                prioridad:0,
                fechaCreacion:new Date(),
                completado:false,
                
            }
  
               ),
           this.nuevoRecordatorio="";
           this.actualizaLE();
          },

          cambiarEstado: function (posicion){

            this.listaRecordatorios[posicion].completado = !this.listaRecordatorios[posicion].completado
          this.actualizaLE();

            // this.listaRecordatorios.splice(posicion,1)

          },


          actualizaLE: function(){
      
              localStorage.listaTareas = JSON.stringify(this.listaRecordatorios);

          },

          borrarTareasCompletadas: function(){

            for (i = 0; i < this.listaRecordatorios.length; i++) {
              if(this.listaRecordatorios[i].completado)
                this.listaRecordatorios.splice(i,1)

                this.actualizaLE();
                 
            }
            

          },


          borrarTarea: function(posicion){

           
          
                this.listaRecordatorios.splice(posicion,1)
                 
                this.actualizaLE();

            console.log("borrando")
                 
            },

            botonDisponible1: function(posicion){

              this.listaRecordatorios[posicion].prioridad = 3,
              this.ordenar()
        
              
               
          },

          botonDisponible2: function(posicion){

            this.listaRecordatorios[posicion].prioridad = 2,
            this.ordenar()
           
               
          },
          botonDisponible3: function(posicion){

            this.listaRecordatorios[posicion].prioridad = 1,
            this.ordenar()
          
               
          },

          tiempo: function(){

            window.location.href = "index2.html"
           

          },

          paginaNotas: function(){

            window.location.href = "index.html"
            

          },



          ordenar: function () {
            
        

          this.listaRecordatorios.sort((nota1,nota2)=>{

   
       
              
              if (nota1.prioridad) {
                return -1;
              }
              if (nota2.prioridad) {
                return 1;
              }
          
               return 0;
            
             })

            },

         
          },

    computed: {

        totalTareas: function () {
          return this.listaRecordatorios.length;
        },


        totalPendientes: function () {

            let total = 0;

            for (i = 0; i < this.listaRecordatorios.length; i++) {
              if(this.listaRecordatorios[i].completado)total++
                 
            }


            return total;
        }


    }


    
  })

 
  