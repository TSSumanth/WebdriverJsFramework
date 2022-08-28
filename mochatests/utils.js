let driver;
async function LogSuccess(message)
{
    await this.driver.executeScript(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "${message}"}}`);
}

async function LogFailure(message)
{
    await this.driver.executeScript(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "${message}"}}`);
}

module.exports ={
    LogSuccess,
    LogFailure,
    driver
}