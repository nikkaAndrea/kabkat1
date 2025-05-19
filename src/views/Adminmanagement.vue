<template>
  <div class="container">
    <div class="title-page">
      <h1>User Management</h1>
    </div>

    <div class="content">
      <div class="user-management">
        <div class="header">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search users..."
            class="search-input"
          />
          <button class="add-button" @click="openModal()">Add User</button>
        </div>

        <table class="user-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in paginatedUsers"
              :key="user.id"
            >
              <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>
                <span
                  :class="{'status-active': user.active, 'status-inactive': !user.active}"
                >
                  {{ user.active ? 'Active' : 'Inactive' }}
                </span>
              </td>
              <td>
                <button class="action-btn" @click="openModal(user)">Edit</button>
                <button class="action-btn delete" @click="deleteUser(user.id)">Delete</button>
              </td>
            </tr>
            <tr v-if="filteredUsers.length === 0">
              <td colspan="5" class="no-data">No users found.</td>
            </tr>
          </tbody>
        </table>

        <div class="pagination-controls">
          <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
    </div>

    <!-- User Modal -->
    <div
      class="modal-overlay"
      v-if="showModal"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>{{ editingUser ? 'Edit User' : 'Add User' }}</h2>
        <form @submit.prevent="submitUser">
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              id="username"
              v-model="userForm.username"
              type="text"
              required
              placeholder="Enter username"
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              id="email"
              v-model="userForm.email"
              type="email"
              required
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label>
              <input
                type="checkbox"
                v-model="userForm.active"
              />
              Active
            </label>
          </div>
          <button type="submit" class="submit-btn">
            {{ editingUser ? 'Update' : 'Add' }} User
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminManagement",
  data() {
    return {
      users: [
        { id: 1, username: "alice", email: "alice@example.com", active: true },
        { id: 2, username: "bob", email: "bob@example.com", active: false },
        { id: 3, username: "carol", email: "carol@example.com", active: true },
        { id: 4, username: "dave", email: "dave@example.com", active: true },
        { id: 5, username: "eve", email: "eve@example.com", active: false },
        { id: 6, username: "frank", email: "frank@example.com", active: true },
        { id: 7, username: "grace", email: "grace@example.com", active: true },
        { id: 8, username: "heidi", email: "heidi@example.com", active: false },
        { id: 9, username: "ivan", email: "ivan@example.com", active: true },
        { id: 10, username: "judy", email: "judy@example.com", active: true },
        { id: 11, username: "karen", email: "karen@example.com", active: false },
      ],
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: "",
      showModal: false,
      editingUser: null,
      userForm: {
        id: null,
        username: "",
        email: "",
        active: true,
      },
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) return this.users;
      const q = this.searchQuery.toLowerCase();
      return this.users.filter(
        (user) =>
          user.username.toLowerCase().includes(q) ||
          user.email.toLowerCase().includes(q)
      );
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage) || 1;
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredUsers.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    openModal(user = null) {
      if (user) {
        this.editingUser = user;
        this.userForm = { ...user };
      } else {
        this.editingUser = null;
        this.userForm = { id: null, username: "", email: "", active: true };
      }
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitUser() {
      if (this.editingUser) {
        // Update existing user
        const index = this.users.findIndex((u) => u.id === this.editingUser.id);
        if (index !== -1) {
          this.users.splice(index, 1, { ...this.userForm });
        }
      } else {
        // Add new user
        const newId = this.users.length
          ? Math.max(...this.users.map((u) => u.id)) + 1
          : 1;
        this.users.push({ ...this.userForm, id: newId });
      }
      this.closeModal();
    },
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.users = this.users.filter((user) => user.id !== id);
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
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

.content {
  width: 94%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.user-management {
  margin-top: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.search-input {
  width: 300px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-button {
  background-color: #4764d9;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #3752b3;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
}

.user-table th {
  background-color: #4764d9;
  color: white;
}

.status-active {
  color: #4caf50;
  font-weight: bold;
}

.status-inactive {
  color: #f44336;
  font-weight: bold;
}

.action-btn {
  padding: 6px 12px;
  margin-right: 6px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: white;
}

.action-btn:hover {
  opacity: 0.9;
}

.action-btn.delete {
  background-color: #f44336;
}

.action-btn:not(.delete) {
  background-color: #4764d9;
}

.no-data {
  text-align: center;
  padding: 20px 0;
  color: #999;
  font-style: italic;
}

.pagination-controls {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.pagination-controls button {
  background-color: #4764d9;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: white;
  padding: 25px 30px;
  border-radius: 8px;
  width: 350px;
  max-width: 90vw;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
}

.close-button {
  position: absolute;
  right: 15px;
  top: 12px;
  font-size: 22px;
  cursor: pointer;
  color: #999;
}

.close-button:hover {
color: #4764d9;
}

.form-group {
margin-bottom: 15px;
}

.form-group label {
display: block;
margin-bottom: 6px;
font-weight: 600;
}

.form-group input[type="text"],
.form-group input[type="email"] {
width: 100%;
padding: 10px 12px;
border: 1px solid #ccc;
border-radius: 4px;
}

.form-group input[type="checkbox"] {
margin-right: 6px;
}

.submit-btn {
background-color: #4764d9;
color: white;
border: none;
padding: 12px 18px;
width: 100%;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
}

.submit-btn:hover {
background-color: #3752b3;
}
</style>



