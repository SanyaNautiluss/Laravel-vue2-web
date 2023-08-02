<template>
    <div>
      <md-table v-model="users" md-card>
        <md-table-toolbar>
            <h1 class="md-title">Table 7</h1>
          </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID 3" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Name 3" md-sort-by="name">{{ item.name }}</md-table-cell>
        </md-table-row>
      </md-table>

      <md-table v-model="users" md-card>
        <md-table-toolbar>
            <h1 class="md-title">Table 8</h1>
          </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID 3" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Email 3" md-sort-by="email">{{ item.email }}</md-table-cell>
        </md-table-row>
      </md-table>

      <md-table v-model="users" md-card>
        <md-table-toolbar>
            <h1 class="md-title">Table 9</h1>
          </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID 3" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Gender 3" md-sort-by="gender">{{ item.gender }}</md-table-cell>
          <md-table-cell md-label="Job Title 3" md-sort-by="title">{{ item.title }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </template>
  
  <script>
    export default {
      name: 'TableTemplate',
      data: () => ({
        users: [
        {
          id: 16,
          name: "Karmen Mines",
          email: "kminesf@topsy.com",
          gender: "Male",
          title: "Administrative Officer"
        },
        {
          id: 17,
          name: "Salome Judron",
          email: "sjudrong@jigsy.com",
          gender: "Male",
          title: "Staff Scientist"
        },
        {
          id: 18,
          name: "Clarinda Marieton",
          email: "cmarietonh@theatlantic.com",
          gender: "Male",
          title: "Paralegal"
        },
        {
          id: 19,
          name: "Paxon Lotterington",
          email: "plotteringtoni@netvibes.com",
          gender: "Female",
          title: "Marketing Assistant"
        },
        {
          id: 20,
          name: "Maura Thoms",
          email: "mthomsj@webeden.co.uk",
          gender: "Male",
          title: "Actuary"
        },
        ]
      })
    }
  </script>