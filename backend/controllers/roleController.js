const Role = require("../models/Role");
const User = require("../models/User");

// Add a new role
const addRole = async (req, res) => {
  const { name, permissions } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Role name is required" });
  }

  try {
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const role = new Role({
      name,
      permissions, // Optional: Array of permissions
    });

    await role.save();

    res.status(201).json({ message: "Role added successfully", role });
  } catch (error) {
    console.error("Error adding role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all roles
const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({ message: "Failed to fetch roles" });
  }
};

// Get a specific role by ID
const getRoleById = async (req, res) => {
  const { id } = req.params;

  try {
    const role = await Role.findById(id);

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.status(200).json(role);
  } catch (error) {
    console.error("Error fetching role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Assign a role to a user
const assignRoleToUser = async (req, res) => {
  const { userId, roleId } = req.body;

  if (!userId || !roleId) {
    return res
      .status(400)
      .json({ message: "User ID and Role ID are required" });
  }

  try {
    const user = await User.findById(userId);
    const role = await Role.findById(roleId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    user.role = roleId; // Assuming the User model has a `role` field
    await user.save();

    res.status(200).json({ message: "Role assigned to user successfully" });
  } catch (error) {
    console.error("Error assigning role to user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a role
const updateRole = async (req, res) => {
  const { id } = req.params;
  const { name, permissions } = req.body;

  try {
    const role = await Role.findById(id);

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    if (name) role.name = name;
    if (permissions) role.permissions = permissions;

    await role.save();

    res.status(200).json({ message: "Role updated successfully", role });
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a role
const deleteRole = async (req, res) => {
  const { id } = req.params;

  try {
    const role = await Role.findByIdAndDelete(id);

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    console.error("Error deleting role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addRole,
  getRoles,
  getRoleById,
  assignRoleToUser,
  updateRole,
  deleteRole,
};
