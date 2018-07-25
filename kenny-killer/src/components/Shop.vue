<template>
    <div class="shopping-area">

        <div class="itemContainer">
            <button @click="saveGame">Save game</button>
            <h3>Couteau</h3>
            <p>Un couteau permet de tuer 3 Kenny par clic. Coût :  100</p>
            <button @click="buyWeapon('knife', 3)">Clyde ! J'vais te planter !</button>
        </div>

        <div class="itemContainer">
            <h3>Fusil de chasse</h3>
            <p>Un couteau permet de tuer 4 Kenny par clic. Coût :  600</p>
            <button @click="buyWeapon('huntingrifle', 4)">Oh la belle, dis !</button>
        </div>

        <div class="itemContainer">
            <h3>Fusil d'assaut</h3>
            <p>Enchaînez 7 Kenny supplémentaires par clic. Coût :  2000</p>
            <button @click="buyWeapon('assaultrifle', 7)">Ratatatatatatatata !</button>
        </div>



        <div class="itemContainer">
            <h3>Les copains ({{ autoClickers['nbFriends'] }})</h3>
            <p>Un copain tue un Kenny par seconde. Coût :  ({{ prices['nbFriends'] }})</p>
            <button @click="buy('nbFriends', 1)">Ramenez-vous, les gars !</button>
        </div>

        <div class="itemContainer">
            <h3>Caitlyn Jenner ({{ autoClickers['nbCaitlyn'] }})</h3>
            <p>Caityn écrase 5 Kenny par seconde. Coût :  ({{ prices['nbCaitlyn'] }})</p>
            <button @click="buy('nbCaitlyn', 5)">Buckle up buckaroo !</button>
        </div>

        <div class="itemContainer">
            <h3>Jimbo et Ned ({{ autoClickers['nbHunters'] }})</h3>
            <p>20 Kenny par seconde foncent droit sur eux. Coût :  ({{ prices['nbHunters'] }})</p>
            <button @click="buy('nbHunters', 20)">Oh mon Dieu, ils foncent droit sur nous !</button>
        </div>

        <div class="itemContainer">
            <h3>Le Coon ({{ autoClickers['nbCoon'] }})</h3>
            <p>Le Coon élimine 50 Kenny par secondes. Coût :  ({{ prices['nbCoon'] }})</p>
            <button @click="buy('nbCoon', 50)">Someone called the Coon ?</button>
        </div>

        <div class="itemContainer">
            <h3>Explosion nucléaire ({{ autoClickers['nbNuke'] }})</h3>
            <p>Monsieur le Président, ce bouton rouge peut éliminer 200 Kennys par secondes. Coût :  ({{ prices['nbNuke'] }})</p>
            <button @click="buy('nbNuke', 200)">Nuke 'em all.</button>
        </div>



    </div>
</template>


<script>
    import VueLocalStorage from 'vue-localstorage';
    import Vue from 'vue'

    Vue.use(VueLocalStorage)

    export default {
        name: 'Shop',
        data() {
            return {
                autoClickers: {
                    'nbFriends': 0,
                    'nbCaitlyn': 0,
                    'nbHunters': 0,
                    'nbCoon': 0,
                    'nbNuke': 0,
                },
                prices: {
                    'nbFriends': 15,
                    'nbCaitlyn': 60,
                    'nbHunters': 150,
                    'nbCoon': 500,
                    'nbNuke': 3000,
                    'knife': 100,
                    'huntingrifle': 600,
                    'assaultrifle': 2000,
                },
                killsPerTick: {
                    'nbFriends': 1,
                    'nbCaitlyn': 5,
                    'nbHunters': 20,
                    'nbCoon': 50,
                    'nbNuke': 200,
                },
                equipedItems: {
                    'knife': false,
                    'huntingrifle': false,
                    'assaultrifle': false,
                },
                interval:''
            }
        },
        mounted : function(){
            this.loadGame();
            // Le jeu se sauvegarde toutes les 30 secondes
            this.interval = setInterval(() => {
                this.saveGame();
            }, 30000);
        },
        beforeDestroy () {
            clearInterval(this.interval)
        },
        methods: {
            buy(objet, value) {
                console.log("Achat échoué");
                if (this.prices[objet] <= this.$store.state.countTotal) {
                    this.equipedItems[objet] = true;
                    this.autoClickers[objet]++;
                    this.$store.commit('SpendKills', this.prices[objet]);
                    this.$store.commit('UpgradeKps', value);
                    console.log('Upgrade KPS : '+ this.$store.state.killPerSecond);
                    this.prices[objet] = Math.round(this.prices[objet] *1.25);
                    console.log(value);
                    console.log(objet);
                    console.log(this.autoClickers[objet]);

                }

            },
            buyWeapon(objet, value) {
                if (this.prices[objet] <= this.$store.state.countTotal && !this.equipedItems[objet]) {
                    this.$store.commit('SpendKills', this.prices[objet]);
                    this.$store.commit('UpgradeKpc', value);

                }

            },
            loadGame() {
                console.log('Loading saved game');
                console.log('Prices : '+JSON.parse(localStorage.getItem('prices')));
                console.log('autoClickers : '+JSON.parse(localStorage.getItem('autoClickers')));
                console.log('KPT : '+JSON.parse(localStorage.getItem('killsPerTick')));
                console.log('Equiped : '+JSON.parse(localStorage.getItem('equipedItems')));

                // Données du shop
                localStorage.getItem('autoClickers') != null ? this.autoClickers = JSON.parse(localStorage.getItem('autoClickers')) : '';
                localStorage.getItem('prices') != null ? this.prices = JSON.parse(localStorage.getItem('prices')) : '';
                localStorage.getItem('killsPerTick') != null ? this.killsPerTick = JSON.parse(localStorage.getItem('killsPerTick')) : '';
                localStorage.getItem('equipedItems') != null ? this.equipedItems = JSON.parse(localStorage.getItem('equipedItems')) : '';
                localStorage.getItem('autoClickers') != null ? console.log('ça passe, c est pas nul') : console.log('ça devrait pas passer, c est nul');

                console.log('Cookies :' + localStorage.getItem('countTotal'));
                if (localStorage.getItem('countTotal') != null && localStorage.getItem('killPerClick') != null && localStorage.getItem('killPerSecond') != null) {
                    this.$store.commit('LoadGame', {
                        'countTotal': parseInt(localStorage.getItem('countTotal')),
                        'killPerClick': parseInt(localStorage.getItem('killPerClick')),
                        'killPerSecond': parseInt(localStorage.getItem('killPerSecond')),
                    });
                    console.log('Executing order 66 :' + localStorage.getItem('countTotal'));
                }
                console.log('Cookies :' + this.$store.state.countTotal);
            },
            saveGame() {
                console.log('Saving game : '+JSON.stringify(this.prices));
                // Données du shop
                localStorage.setItem('autoClickers', JSON.stringify(this.autoClickers));
                localStorage.setItem('prices', JSON.stringify(this.prices));
                localStorage.setItem('killsPerTick', JSON.stringify(this.killsPerTick));
                localStorage.setItem('equipedItems', JSON.stringify(this.equipedItems));

                // Données globales
                localStorage.setItem('countTotal', this.$store.state.countTotal);
                localStorage.setItem('killPerClick', this.$store.state.killPerClick);
                localStorage.setItem('killPerSecond', this.$store.state.killPerSecond);
            },
            replacer(key, value) {
                return value.replace(/[^\w\s]/gi, '');
            }
        }
    }
</script>

<style>
    .shopping-area {
        position: absolute;
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        right:0;
        top:0;
        overflow-y: auto;
    }

    .itemContainer {
        background: wheat;
        width: 100%;
        height: 100px;
        padding: 5px 0;
    }
</style>