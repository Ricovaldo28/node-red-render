module.exports = {
    flowFile: "flows.json",
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2b$08$5q4/BVfHGe/TmKc8dGUHxOVzU1aM1OEv.1u6ogfJckgM50BpsU1g2", // password: admin123
            permissions: "*"
        }]
    },
    uiPort: process.env.PORT || 1880
}
