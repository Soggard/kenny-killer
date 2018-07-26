<template>
  <div class="shopping-area">
    <div class="groupContainer">
      <div class="saveButton">
        <button @click="saveGame" class="buyButton">Sauvegarder la partie</button>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/knife.png" alt="">
        </div>
        <div class="description">
          <h3>Couteau</h3>
          <p>Un couteau permet de tuer 3 Kenny par clic. <br>
            Coût :  100 <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buyWeapon('knife', 3)" id="buy_button_knife">Clyde ! J'vais te planter !</button>
        </div>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/huntingrifle.png" alt="">
        </div>
        <div class="description">
          <h3>Fusil de chasse</h3>
          <p>Le fusil de chasse permet de tuer 10 Kenny par clic. <br>
            Coût :  1000 <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buyWeapon('huntingrifle', 10)" id="buy_button_huntingrifle">Oh la belle, dis !</button>
        </div>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/assaultrifle.png" alt="">
        </div>
        <div class="description">
          <h3>Fusil d'assaut</h3>
          <p>Enchaînez 15 Kenny supplémentaires par clic avec ce fusil d'assault. <br>
            Coût :  10000 <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buyWeapon('assaultrifle', 15)" id="buy_button_assaultrifle">Ratatatatatatatata !</button>
        </div>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/friends.png" alt="">
        </div>
        <div class="description">
          <h3>Les copains ({{ autoClickers['nbFriends'] }})</h3>
          <p>Un copain tue un Kenny par seconde. <br>
            Coût :  ({{ prices['nbFriends'] }}) <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buy('nbFriends', 1)">Ramenez-vous, les gars !</button>
        </div>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/caitlynJenner.png" alt="">
        </div>
        <div class="description">
          <h3>Caitlyn Jenner ({{ autoClickers['nbCaitlyn'] }})</h3>
          <p>Caityn écrase 5 Kenny par seconde. <br>
            Coût :  ({{ prices['nbCaitlyn'] }}) <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buy('nbCaitlyn', 5)">Buckle up buckaroo !</button>
        </div>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/hunters.png" alt="">
        </div>
        <div class="description">
          <h3>Jimbo et Ned ({{ autoClickers['nbHunters'] }})</h3>
          <p>20 Kenny par seconde foncent droit sur eux. <br>
            Coût :  ({{ prices['nbHunters'] }}) <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buy('nbHunters', 20)">Oh mon Dieu, ils foncent droit sur nous !</button>
        </div>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/coon.png" alt="">
        </div>
        <div class="description">
          <h3>Le Coon ({{ autoClickers['nbCoon'] }})</h3>
          <p>Le Coon élimine 50 Kenny par secondes. <br>
            Coût :  ({{ prices['nbCoon'] }}) <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buy('nbCoon', 50)">Someone called the Coon ?</button>
        </div>
      </div>

      <div class="itemContainer">
        <div class="image">
          <img src="../assets/shop/nuke.png" alt="">
        </div>
        <div class="description">
          <h3>Explosion nucléaire ({{ autoClickers['nbNuke'] }})</h3>
          <p>Monsieur le Président, ce bouton rouge peut éliminer 200 Kennys par secondes. <br>
            Coût :  ({{ prices['nbNuke'] }}) <img src="../assets/KennyMoney.png" alt="$" class="kennyMoney"></p>
          <button class="buyButton" @click="buy('nbNuke', 200)">Nuke 'em all.</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'

Vue.use(VueLocalStorage)

export default {
  name: 'Shop',
  data () {
    return {
      autoClickers: {
        'nbFriends': 0,
        'nbCaitlyn': 0,
        'nbHunters': 0,
        'nbCoon': 0,
        'nbNuke': 0
      },
      prices: {
        'nbFriends': 15,
        'nbCaitlyn': 60,
        'nbHunters': 150,
        'nbCoon': 500,
        'nbNuke': 3000,
        'knife': 100,
        'huntingrifle': 1000,
        'assaultrifle': 10000
      },
      killsPerTick: {
        'nbFriends': 1,
        'nbCaitlyn': 5,
        'nbHunters': 20,
        'nbCoon': 50,
        'nbNuke': 200
      },
      equipedItems: {
        'knife': false,
        'huntingrifle': false,
        'assaultrifle': false
      },
      interval: ''
    }
  },
  mounted: function () {
    this.loadGame()
    // Le jeu se sauvegarde toutes les 30 secondes
    this.interval = setInterval(() => {
      this.saveGame()
    }, 30000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    buy (objet, value) {
      if (this.prices[objet] <= this.$store.state.countTotal) {
        // Achat d'un autoclicker
        this.autoClickers[objet]++
        this.$store.commit('SpendKills', this.prices[objet])
        this.$store.commit('UpgradeKps', value)
        // Le prix de l'objet augmente de 40% à chaque achat
        this.prices[objet] = Math.round(this.prices[objet] * 1.4)
      }
    },
    buyWeapon (objet, value) {
      // Achat d'un objet
      if (this.prices[objet] <= this.$store.state.countTotal && !this.equipedItems[objet]) {
        this.$store.commit('SpendKills', this.prices[objet])
        this.$store.commit('UpgradeKpc', value)
        this.equipedItems[objet] = true
        document.getElementById('buy_button_' + objet).style.display = 'none'
      }
    },
    loadGame () {
      // Charge les données du shop
      if (Vue.localStorage.get('autoClickers') !== null) this.autoClickers = JSON.parse(Vue.localStorage.get('autoClickers'))
      if (Vue.localStorage.get('prices') !== null) this.prices = JSON.parse(Vue.localStorage.get('prices'))
      if (Vue.localStorage.get('killsPerTick') !== null) this.killsPerTick = JSON.parse(Vue.localStorage.get('killsPerTick'))
      if (Vue.localStorage.get('equipedItems') !== null) this.equipedItems = JSON.parse(Vue.localStorage.get('equipedItems'))

      // Envoie des données au Store
      if (Vue.localStorage.get('countTotal') !== null && Vue.localStorage.get('killPerClick') !== null && Vue.localStorage.get('killPerSecond') !== null) {
        this.$store.commit('LoadGame', {
          'countTotal': parseInt(Vue.localStorage.get('countTotal')),
          'killPerClick': parseInt(Vue.localStorage.get('killPerClick')),
          'killPerSecond': parseInt(Vue.localStorage.get('killPerSecond'))
        })
      }
      // Cache les boutons d'achat des objets déjà achetés
      for (var object in this.equipedItems) {
        if (this.equipedItems[object]) {
          document.getElementById('buy_button_' + object).style.display = 'none'
        }
      }
    },
    saveGame () {
      // Données du shop
      Vue.localStorage.set('autoClickers', JSON.stringify(this.autoClickers))
      Vue.localStorage.set('prices', JSON.stringify(this.prices))
      Vue.localStorage.set('killsPerTick', JSON.stringify(this.killsPerTick))
      Vue.localStorage.set('equipedItems', JSON.stringify(this.equipedItems))

      // Données globales
      Vue.localStorage.set('countTotal', this.$store.state.countTotal)
      Vue.localStorage.set('killPerClick', this.$store.state.killPerClick)
      Vue.localStorage.set('killPerSecond', this.$store.state.killPerSecond)
    },
    replacer (key, value) {
      return value.replace(/[^\w\s]/gi, '')
    }
  }
}
</script>

<style>
  .shopping-area {
    position: absolute;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    right:0;
    top:0;
    overflow-y: auto;
    overflow-x: hidden;
    background: wheat;
  }

  .itemContainer {
    max-width: 100%;
    padding: 5px 10px;
    display: flex;
    margin-bottom: 10px;
  }
  .kennyMoney {
    height: 20px;
    display: inline-block;
  }
  .image {
    width: 20%;
  }
  .image img{
    width: 100%;
  }
  .description {
    width: 80%;
  }

  .saveButton {
    background: wheat;
    padding: 20px;
  }
  .buyButton {
    -moz-box-shadow:inset 0px 1px 0px 0px #a6827e;
    -webkit-box-shadow:inset 0px 1px 0px 0px #a6827e;
    box-shadow:inset 0px 1px 0px 0px #a6827e;
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #7d5d3b), color-stop(1, #634b30));
    background:-moz-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
    background:-webkit-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
    background:-o-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
    background:-ms-linear-gradient(top, #7d5d3b 5%, #634b30 100%);
    background:linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#7d5d3b', endColorstr='#634b30',GradientType=0);
    background-color:#7d5d3b;
    -moz-border-radius:3px;
    -webkit-border-radius:3px;
    border-radius:3px;
    border:1px solid #54381e;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:13px;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #4d3534;
  }
  .buyButton:hover {
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #634b30), color-stop(1, #7d5d3b));
    background:-moz-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
    background:-webkit-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
    background:-o-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
    background:-ms-linear-gradient(top, #634b30 5%, #7d5d3b 100%);
    background:linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#634b30', endColorstr='#7d5d3b',GradientType=0);
    background-color:#634b30;
  }
  .buyButton:active {
    position:relative;
    top:1px;
  }
</style>
