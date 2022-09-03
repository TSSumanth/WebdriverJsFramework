let commonCapabilities = {
    "project": "Amazon Payment V2",
    "build": "staging_build_0.0.3",
    'name': "MyTestName"
};
let capabilities = [
    {
        "bstack:options": {
            "os": "Windows",
            "osVersion": "10"
        },
        "browserName": "chrome",
        "browserVersion": "104.0",
        ...commonCapabilities
    },
    {
        'bstack:options': {
            "os": "Windows",
            "osVersion": "8"
        },
        "browserName": "firefox",
        "browserVersion": "101.0",
        ...commonCapabilities
    }
    , {
        'bstack:options': {
            "os": "OS X",
            "osVersion": "Monterey"
        },
        "browserName": "safari",
        "browserVersion": "15.3",
        ...commonCapabilities
    },
    {
        'bstack:options': {
            "os": "OS X",
            "osVersion": "Big Sur"
        },
        "browserName": "firefox",
        "browserVersion": "103.0",
        ...commonCapabilities
    }
]



module.exports = {
    capabilities
}