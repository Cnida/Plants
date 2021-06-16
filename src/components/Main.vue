<template>
  <v-container>
    <v-layout row>

      <v-col>
        <v-layout row>
          <v-col
              v-for="n in 10"
              :key="n"
              cols="auto">
            <v-card
                :elevation="5"
                width="200">
              <v-img contain :src="require('@/assets/pot.svg')"/>
              <v-card-text>
                <v-btn block color="primary">Water</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-layout>
      </v-col>

      <v-col cols="auto">
        <v-card :elevation="5" height="100%">
          <v-card-text>
            <v-card :elevation="0" width="200">
              <v-img contain :src="require('@/assets/pot.svg')"/>
              <v-card-text>
                <v-btn block color="primary">Buy</v-btn>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Main',

  data: () => ({}),
}
</script>
