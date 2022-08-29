let driver;
async function LogSuccess(message)
{
    await this.driver.executeScript(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "${message}"}}`);
}

async function LogFailure(message)
{
    await this.driver.executeScript(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "${message}"}}`);
}

const sleep = async function (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

module.exports ={
    LogSuccess,
    LogFailure,
    driver,
    sleep
}