module.exports = {
    flowFile: "flows.json",
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "admin",
            password: process.env.NODE_RED_PASSWORD || "$2b$08$5q4/BVfHGe/TmKc8dGUHxOVzU1aM1OEv.1u6ogfJckgM50BpsU1g2", // default: admin123
            permissions: "*"
        }]
    },
    uiPort: process.env.PORT || 1880
}
