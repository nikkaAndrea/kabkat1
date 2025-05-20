<template>
  <div class="container">
    <div class="title-page">
      <h1>KK Members List</h1>
    </div>

    <!-- Totals display -->
    <div class="totals-container">
      <p><strong>Total KK Members:</strong> {{ totalMembers }}</p>
      <p><strong>Female Members:</strong> {{ totalFemale }}</p>
      <p><strong>Male Members:</strong> {{ totalMale }}</p>
    </div>

    <div class="content">
      <div class="search-bar-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name..."
          class="search-bar"
        />
      </div>

      <table class="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.email">
            <td>{{ user.name }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adminmember",
  data() {
    return {
      searchQuery: "",
      currentPage: 1,
      usersPerPage: 10,
      users: [
        { name: "Alice Santos", gender: "Female", age: 28, address: "123 Main St", email: "alice@example.com" },
        { name: "John Cruz", gender: "Male", age: 35, address: "456 Elm St", email: "john@example.com" },
        { name: "Maria Dela Rosa", gender: "Female", age: 22, address: "789 Pine Ave", email: "maria@example.com" },
        { name: "Jose Ramirez", gender: "Male", age: 40, address: "321 Oak Blvd", email: "jose@example.com" },
        { name: "Karen Torres", gender: "Female", age: 30, address: "111 Palm Dr", email: "karen@example.com" },
        { name: "Marco Reyes", gender: "Male", age: 27, address: "234 Bay Rd", email: "marco@example.com" },
        { name: "Luisa Gomez", gender: "Female", age: 33, address: "876 River St", email: "luisa@example.com" },
        { name: "Diego Morales", gender: "Male", age: 29, address: "444 Hilltop", email: "diego@example.com" },
        { name: "Fatima Lee", gender: "Female", age: 26, address: "555 Cedar Ln", email: "fatima@example.com" },
        { name: "Carlos Ramos", gender: "Male", age: 31, address: "789 Forest St", email: "carlos@example.com" },
        { name: "Jessa Aguilar", gender: "Female", age: 23, address: "999 East Blvd", email: "jessa@example.com" },
        // ...add more as needed
      ],
    };
  },
  computed: {
    filteredUsers() {
      const q = this.searchQuery.toLowerCase();
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(q)
      );
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.usersPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.filteredUsers.slice(start, end);
    },

    // Totals for all users (ignores search filter)
    totalMembers() {
      return this.users.length;
    },
    totalFemale() {
      return this.users.filter(user => user.gender.toLowerCase() === "female").length;
    },
    totalMale() {
      return this.users.filter(user => user.gender.toLowerCase() === "male").length;
    },
  },
  watch: {
    searchQuery() {
      this.currentPage = 1; // Reset page on new search
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 18%;
  margin-top: 120px;
  padding-bottom: 50px;
  min-height: 100vh;
}

.title-page {
  color: #4764d9;
}

.totals-container {
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #333;
  display: flex;
  gap: 40px;
}
.totals-container p {
  margin: 0;
}

.content {
  width: 94%;
  border-radius: 8px;
  border: 2.7px solid #0038A8;
  background: #FFF;
  padding: 20px;
}

.search-bar {
  width: 300px;
  padding: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

.user-table th,
.user-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.user-table th {
  background-color: #4764d9;
  color: white;
}

.user-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.user-table tr:hover {
  background-color: #f1f1f1;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination button {
  padding: 8px 16px;
  background-color: #4764d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
