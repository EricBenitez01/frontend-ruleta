<script>
    export default {
      data() {
        return {
          datos: [],
        }
      },
      methods: {
        getList() {
          fetch('https://localhost:44376/users', {
            'mode': 'no-cors', // Cambiado de 'no-cors' a 'cors'
            'headers': {
              'Access-Control-Allow-Origin': '*',
            }
          })
            .then(res => res.json) // Corrección: Llamar a res.json() con paréntesis
            .then(data => {
              this.datos = data;
              console.log('aca', this.datos); // Mover el console.log aquí para que se muestre después de asignar datos
            })
        }/* ,
        mounted() {
          this.getList();
        } */
      }
    }
</script>

<template>
  <div>hola</div>
  <div v-for="item in datos" :key="item.amount">
    <div>
      {{ item.name }}
    </div>
  </div>
</template>