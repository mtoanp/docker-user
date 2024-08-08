// init-mongo/init.js
db = db.getSiblingDB('docker_user');

// Create User with DB Access
db.createUser({
  user: 'dbUser',
  pwd: 'dbpassword',
  roles: [{ role: 'readWrite', db: 'docker_user' }]
})

print("User created")

