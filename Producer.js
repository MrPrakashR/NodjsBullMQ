// docker run -itd -p 6379:6379 redis => to run on redis server

const {Queue} = require("bullmq")

const notificationQueue = new Queue("email-queue",{
    connection : {
        host: "127.0.0.1",
        port: "6379"
    }
})

async function init() {
    const res = await notificationQueue.add('email to piysh',{
        email:"prakash@gmail.com",
        subject: "Welcome Mess",
        body: "Hey Prakash,Welcome"
    })
    console.log("Job added to Queue",res.id)
}

init()