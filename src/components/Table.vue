<script setup lang="ts">
import Chips from './Chips.vue'

let toggle: boolean = false;
console.log(toggle);
let users: any = [];
console.log(users);

//import axios from 'axios'; // Asegúrate de tener Axios instalado en tu proyecto

async function get() {
    try {
        const response = await fetch('https://localhost:44376/users');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log('Datos de usuarios:', data.data);
        users = data.data;
        console.log(users);

        return data; // Resuelve la promesa con los datos
    } catch (error) {
        console.error('Error:', error);
        throw error; // Lanza el error para que se rechace la promesa
    }
}


async function post1(newUser: any) {
  try {
    // Manejar solicitud OPTIONS explícitamente para CORS
    await fetch('https://localhost:44376/users/CreateOrUpdateUser', {
      method: 'OPTIONS',
      headers: {
        'Access-Control-Allow-Origin': '*', // Cambia esto según tus necesidades
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Allow-Credentials': 'true'
      }
    });

    // Realizar la solicitud POST
    const response = await fetch('https://localhost:44376/users/CreateOrUpdateUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}


const newUser: any = { name: "benitez", amount: 200 };

function send(id: number): void {

    let color: String = '';
    if (id % 2 === 0) {
        color = 'negro';
    } else {
        color = 'rojo';
    }
    return alert('El id es ' + id + ' y el color es ' + color);
}

/* const toggle1 = () => {
    console.log(toggle);
    toggle = !toggle;
} */
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <div class="w-[80%] h-[65%] bg-[#0B8D27] p-6 rounded-md shadow-md">
            <table class="w-full h-full border-collapse text-white">
                <tbody>
                    <tr>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(25)">25</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(34)">34</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(27)">27</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(8)">8</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(13)">13</td>
                        <td class="roulette-cell bg-black" @click="send(20)">20</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(33)">33</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(6)">6</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(1)">1</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(14)">14</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(31)">31</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(22)">22</td>
                    </tr>
                    <tr>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(32)">32</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(15)">15</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(4)">4</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(21)">21</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(2)">2</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(19)">19</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(36)">36</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(11)">11</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(30)">30</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(23)">23</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(10)">10</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(5)">5</td>
                    </tr>
                    <tr>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(9)">9</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(18)">18</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(29)">29</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(24)">24</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(7)">7</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(12)">12</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(35)">35</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(16)">16</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(3)">3</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(26)">26</td>
                        <td class="roulette-cell bg-red-700 hover:bg-white/80 hover:text-black" @click="send(17)">17</td>
                        <td class="roulette-cell bg-black hover:bg-white/80 hover:text-black" @click="send(28)">28</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <Chips number="100" @click="post1(newUser)"></Chips>
            <Chips number="50" @click="get()"></Chips>
            <Chips number="25"></Chips>
        </div>
        <div>
            <!-- {{ users }} -->
        </div>
    </div>
</template>

<style>
.roulette-cell {
    width: 8px;
    height: 8px;
    border: 1px solid rgb(233, 229, 229);
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
</style>