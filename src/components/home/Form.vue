<template>
    <div>
        <label>Username: </label>
        <input placeholder="Type in your username" type="text" v-model="username"/>
        <button @click="onClickGetUser">Select Username</button>
        <p v-if="error">{{ error }}</p>
        <div v-if="user">
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
            username: ""
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
        }
    }
}
</script>

<style scoped>

</style>
