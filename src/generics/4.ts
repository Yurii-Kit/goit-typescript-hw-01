type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// Тепер параметр може містити лише частину полів користувача
function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
