console.log("Mastodon Bot starting...");
	
import ENV from "dotenv";
ENV.config();
import Mastodon from "mastodon-api";
import util from 'util';
import { exec } from 'child_process';
import fs from "fs";
    // Step 0：加载需要的模块

const exec_promisify = util.promisify(exec);

const M = new Mastodon({
    client_key: process.env.CLIENT_KEY, // 使用.env中的信息，隐去上一个代码块中的相关信息
    client_secret: process.env.CLIENT_SECRET,
    access_token: process.env.AUTH_TOKEN,
    timeout_ms: 60 * 1000,  
        // optional HTTP request timeout to apply to all requests.
    api_url: "https://wxw.ooo/api/v1/", 
        // optional, defaults to https://mastodon.social/api/v1/
    })
    // Step 0: 连接账号


//=================================
// 功能 1：定时叹气
//=================================s

const sigh = 'python ./sigh.py';
// 获取相应功能的 .py

toot_sigh()
    .then(response => console.log(response))
    .catch(error => console.error(error));
// 定时开始之前先运行一次

setInterval(
    () => {
        toot_sigh()
            .then(response => console.log(response))
            .catch(error => console.error(error));
    },
    60 * 1000
    //3 * 60 * 60 * 1000
    // millisec = sec * 1000
); 
// 设置定时

async function toot_sigh(){
    const response = await exec_promisify(sigh);
    console.log(response.stdout);
    // Step 1: Exec processing (create a output string)
    
    const params = {
        status: response.stdout,
        visibility: 'unlisted'
    };
    // Step 2: Upload (return and attach to the following toot)

    const final_response = await M.post('statuses', params); 
    // Step 3: Toot!

    return {
        success: true
    };
}


//=================================
// 功能 2：我cp
//=================================
// const chuchu = 'python ./chuchu.py';
// 获取相应功能的 .py
const listener = M.stream('streaming/user');
	
listener.on('message', msg => {
    console.log(msg.event);
    console.log(msg.data.type);
    console.log('user event');
    
    if (msg.event === 'notification'){
        if (msg.data.type === 'favorite'){
            const acct = msg.data.account.acct;
            console.log(`${acct} favourtied you.`)
        }
    };
    
});

listener.on('error', err => console.log(err))



//=================================
// 功能 3：拍拍|抱抱
//=================================


//=================================
// 功能 4：噗噗（50%遇到噗宝，噗宝会拉出不同口味的屎）
//=================================