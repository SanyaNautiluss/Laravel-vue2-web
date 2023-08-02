<template>
    <div>
      <md-table v-model="users" md-card>  
          <md-table-toolbar>
            <h1 class="md-title">Table 4</h1>
          </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID 2" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Name 2" md-sort-by="name">{{ item.name }}</md-table-cell>
        </md-table-row>
      </md-table>
    
      <md-table v-model="users" md-card>  
          <md-table-toolbar>
            <h1 class="md-title">Table 5</h1>
          </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID 2" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Email 2" md-sort-by="email">{{ item.email }}</md-table-cell>
        </md-table-row>
      </md-table>

      <md-table v-model="users" md-card>  
          <md-table-toolbar>
            <h1 class="md-title">Table 6</h1>
          </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID 2" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Gender 2" md-sort-by="gender">{{ item.gender }}</md-table-cell>
          <md-table-cell md-label="Job Title 2" md-sort-by="title">{{ item.title }}</md-table-cell>
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
            id: 11,
            name: "Cybill Rimington",
            email: "crimingtona@usnews.com",
            gender: "Female",
            title: "Assistant Professor"
            },
            {
            id: 12,
            name: "Maureene Eggleson",
            email: "megglesonb@elpais.com",
            gender: "Male",
            title: "Recruiting Manager"
            },
            {
            id: 13,
            name: "Cortney Caulket",
            email: "ccaulketc@cbsnews.com",
            gender: "Male",
            title: "Safety Technician IV"
            },
            {
            id: 14,
            name: "Selig Swynfen",
            email: "sswynfend@cpanel.net",
            gender: "Female",
            title: "Environmental Specialist"
            },
            {
            id: 15,
            name: "Ingar Raggles",
            email: "iragglese@cbc.ca",
            gender: "Female",
            title: "VP Sales"
            }
        ]
      })
    }
  </script>