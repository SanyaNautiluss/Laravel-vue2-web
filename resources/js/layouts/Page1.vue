<template>
    <div>
      <md-table v-model="paginatedUsers" :bordered="bordered" md-card md-sort="name" md-sort-order="asc">
          <md-table-toolbar>
            <h1 class="md-title">Table 1</h1>
          </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        </md-table-row>
  
        <md-table-pagination
          :md-page-size="3"
          :md-page-options="[1,2,3,4,5]"
          :md-update="updatePagination"
          :md-data="users"
          :md-paginated-data.sync="paginatedUsers" />
      </md-table>

      <md-table v-model="paginatedUsers" md-card md-sort="name" md-sort-order="asc">
        <md-table-toolbar>
          <h1 class="md-title">Table 2</h1>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        </md-table-row>
  
        <md-table-pagination
          :md-page-size="3"
          :md-page-options="[1,2,3,4,5]"
          :md-update="updatePagination2"
          :md-data="users"
          :md-paginated-data.sync="paginatedUsers" />
      </md-table>

      <md-table v-model="paginatedUsers" md-card md-sort="name" md-sort-order="asc">
        <md-table-toolbar>
          <h1 class="md-title">Table 3</h1>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Gender">{{ item.gender }}</md-table-cell>
          <md-table-cell md-label="Job Title">{{ item.title }}</md-table-cell>
        </md-table-row>
        <md-table-pagination
          :md-page-size="3"
          :md-page-options="[1,2,3,4,5]"
          :md-update="updatePagination3"
          :md-data="users"
          :md-paginated-data.sync="paginatedUsers" />
      </md-table>
    </div>
  </template>
  
  <script>
    export default {
      name: 'TablePagination',
      data: () => ({
        users: [
            {
            id: 1,
            name: "Shawna Dubbin",
            email: "sdubbin0@geocities.com",
            gender: "Male",
            title: "Assistant Media Planner"
            },
            {
            id: 2,
            name: "Odette Demageard",
            email: "odemageard1@spotify.com",
            gender: "Female",
            title: "Account Coordinator"
            },
            {
            id: 3,
            name: "Vera Taleworth",
            email: "vtaleworth2@google.ca",
            gender: "Male",
            title: "Community Outreach Specialist"
            },
            {
            id: 4,
            name: "Lonnie Izkovitz",
            email: "lizkovitz3@youtu.be",
            gender: "Female",
            title: "Operator"
            },
            {
            id: 5,
            name: "Thatcher Stave",
            email: "tstave4@reference.com",
            gender: "Male",
            title: "Software Test Engineer III"
            },
            {
            id: 6,
            name: "Karim Chipping",
            email: "kchipping5@scribd.com",
            gender: "Female",
            title: "Safety Technician II"
            },
            {
            id: 7,
            name: "Helge Holyard",
            email: "hholyard6@howstuffworks.com",
            gender: "Female",
            title: "Internal Auditor"
            },
            {
            id: 8,
            name: "Rod Titterton",
            email: "rtitterton7@nydailynews.com",
            gender: "Male",
            title: "Technical Writer"
            },
            {
            id: 9,
            name: "Gawen Applewhite",
            email: "gapplewhite8@reverbnation.com",
            gender: "Female",
            title: "GIS Technical Architect"
            },
            {
            id: 10,
            name: "Nero Mulgrew",
            email: "nmulgrew9@plala.or.jp",
            gender: "Female",
            title: "Staff Scientist"
            }
        ],
        paginatedUsers: [],
      }),
      methods: {
        updatePagination (page, pageSize, sort, sortOrder) {
          console.log('pagination has updated', page, pageSize, sort, sortOrder);
        }
      },
    }
  </script>