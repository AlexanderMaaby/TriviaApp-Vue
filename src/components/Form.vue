<template>
    <div>
        <label>Username: {{username}}</label>
        <input placeholder="Type in your username" type="text" v-model="username"/>
        <button @click="onClickGetUser">Select Username</button>
        <p>{{ error }}</p>
        <div>{{user.id}}</div>
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
        ...mapGetters(["getUsers"]),
        ...mapState(["user", "error"])
    },
    methods: {
        ...mapActions(["fetchUser", "addUser"]),
        async onClickGetUser() {
            await this.fetchUser(this.username);
            if(!this.user) {
              //Todo update user state
              this.addUser(this.username)
            }
        }
    }
}
</script>
