<template>
    <div>
        <div class="user-container">
            <label>Username:</label>
            <input placeholder="Type in your username" type="text" v-model="username" maxlength="20" @keyup="checkForEnterBtn($event)"/>
            <button @click="onClickGetUser">Select Username</button>
        </div>
        <div v-if="user" class="table-container">
            <table>
                <tr>
                    <th>Username</th>
                    <th>Highscore</th>
                </tr>
                <tr>
                    <td>{{user.username}}</td>
                    <td>{{getScoreOfUser}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    name: "Form",
    data() {
        return {
            username: "",
            disable: false
        }
    },
    computed: {
        ...mapGetters(["getUser", "getScoreOfUser"]),
        ...mapState(["user", "error"])
    },
    methods: {
        ...mapActions(["fetchUser", "addUser"]),
        async onClickGetUser() {
            await this.fetchUser(this.username);
            // If user does not exist create a new one
            if(!this.getUser) {
              this.addUser(this.username)
            }
        },
        async checkForEnterBtn(e) {
            if(e.key === "Enter") await this.onClickGetUser(); 
        }
    }
}
</script>

<style scoped>
    .user-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin: 0 0 2rem 0;
    }

    .table-container >  table {
        align-items: center;
        width: 100%;
    }
</style>
