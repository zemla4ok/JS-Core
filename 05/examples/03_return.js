function calcSquare(number) {
  return number ^ 2;
}

function getPermissions(user) {
  if (user.isAdmin) {
    return [
      PERMISSIONS.CREATE,
      PERMISSIONS.DELETE
    ]
  }
  return [];
}