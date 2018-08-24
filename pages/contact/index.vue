<template>
    <div>
        <v-jumbotron color="primary" dark>
            <v-container fill-height>
            <v-layout align-center>
                <v-flex text-xs-center>
                <h3 class="display-3">Contact</h3>
                </v-flex> 
            </v-layout>
            </v-container>
        </v-jumbotron>
        <v-form ref="contactForm" v-model="contactForm" color="primary">
            <v-container fill-height>
                <v-layout row wrap >
                        
                    <v-flex xs12 md6>
                        <v-text-field
                            v-model="fName"
                            label="First Name">

                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                            v-model="lName"
                            label="Last Name">

                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                        v-model="company"
                        label="Company">

                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                        v-model="email"
                        label="Email">

                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                        v-model="pNumber"
                        label="Phone Number">

                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 md12>
                        <v-textarea
                        v-model="message"
                        label="Message"
                        auto-grow
                        ></v-textarea>
                    </v-flex>
                    <v-btn large color="success" @click="submit">
                        Submit
                        <v-icon right dark>mail</v-icon>
                    </v-btn>
                    <v-btn large color="warning" @click="clear">
                        Clear
                        <v-icon right dark>clear</v-icon>
                    </v-btn>
                </v-layout>
            </v-container>
        </v-form>    
        
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                fName: null,
                lName: null,
                company: null,
                email: null,
                pNumber: null,
                message: null,
                contactForm: null
            }
        },
        methods:{
            submit(){
                console.log('hi')
                axios.post('/api/contact',{
                    firstName: this.fName,
                    lastName: this.lName,
                    company : this.company,
                    email : this.email,
                    phoneNumber: this.pNumber,
                    message : this.message
                })
            },
            clear () {
                this.$refs.contactForm.reset()
            }
        }
    }
</script>

<style scoped>
    form{
        width: 100%;
    }
</style>