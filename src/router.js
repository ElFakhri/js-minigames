import { createWebHistory, createRouter } from "vue-router";

import TicTacToe from "./pages/TicTacToe.vue";
import Index from "./pages/Index.vue";
import Memory from "./pages/Memory.vue";
import Connect4 from "./pages/Connect4.vue";

const routes = [
    {path:"/", component: Index},
    {path:"/games/tictactoe", component: TicTacToe},
    {path:"/games/memory", component: Memory},
    {path: "/games/connect4", component: Connect4},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

