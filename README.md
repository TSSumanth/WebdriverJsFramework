# WebdriverJsFramework

## After cloning:
    - run npm install to install node-modules in current project structure
    - Download chrome driver, Add chrome driver path in $PATH variable 
        nano ~/.zsh_profile
            export PATH=$PATH:/path/to/directory
            Hit Control + O to write your changes to the file. When prompted to confirm the file name, hit Return to proceed with the default. Press Control + X to exit the editor.
        source ~/.zsh_profile
        Error: “chromedriver” cannot be opened because the developer cannot be verified. Unable to launch the chrome browser
        FIX: Run this command: - xattr -d com.apple.quarantine chromedriver 

## Execute the typescript file using node:
    - node --require ts-node/register "script.ts"
 