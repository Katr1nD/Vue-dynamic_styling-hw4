const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraph: true,
            inputBackgroundColor: ''
        };
    },
    computed: {
        userClasses() {
            return{
                user1: this.inputClass === 'user1', 
                user2: this.inputClass === 'user2',
                visible: this.paragraph,
                hidden: !this.paragraph
            };
        },
    },
    methods: {
        paragraphVisibility() {
            this.paragraph = !this.paragraph;
        }
    }
});

app.mount('#assignment');