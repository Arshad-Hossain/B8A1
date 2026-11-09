
# Combining Union (|) and Intersection (&) Types in TypeScript

## Introduction

In TypeScript, Union (`|`) and Intersection (`&`) types allow developers to create flexible and reusable type definitions. A Union type means a value can match one of several types, while an Intersection type combines multiple types into one. Combining them is especially useful when building applications with different user roles, permissions, or API response structures.

## Detailed Body

### 1. Lets look at Basic Types

Imagine developing an application where users can be administrators or regular users.

```typescript
type BasicUser = {
  id: number;
  name: string;
};

type AdminPermissions = {
  canManageUsers: boolean;
  canDeletePosts: boolean;
};
```

### 2. Combine Types Using Intersection (&)

An Intersection type combines properties from multiple types.

```typescript
type Admin = BasicUser & AdminPermissions;
```

An Admin must contain all properties from both types.

### 3. Create a Union (|) Type

A Union type allows a value to represent one of multiple possible structures.

```typescript
type RegularUser = BasicUser & {
  role: "user";
};

type Administrator = Admin & {
  role: "admin";
};

type User = RegularUser | Administrator;
```

Now, User can represent either a regular user or an administrator.

### 4. Use the Combined Type

```typescript
function displayUser(user: User): void {
  console.log(`Name: ${user.name}`);

  if (user.role === "admin") {
    console.log("Admin Permissions:");
    console.log(user.canManageUsers);
    console.log(user.canDeletePosts);
  } else {
    console.log("Regular User");
  }
}

const admin: User = {
  id: 1,
  name: "John",
  role: "admin",
  canManageUsers: true,
  canDeletePosts: true,
};

const user: User = {
  id: 2,
  name: "Alice",
  role: "user",
};

displayUser(admin);
displayUser(user);
```

### 5. When Is This Useful?

- Role-based access control.
- API response modeling.
- User permission management.
- Building reusable application data models.
- Representing different object structures.

## Conclusion

Union and Intersection types work together to create powerful and maintainable type definitions. Use Intersection (`&`) to combine shared properties and Union (`|`) to represent multiple possible structures. This approach is particularly useful for role-based access control, API responses, and complex application data models.
