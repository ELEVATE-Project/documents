# Service Standardization

This document specifies structural and code-level standardization steps that should be done across all the Elevate micro-services.

## Structural Standardization

### **Expected Micro-service Directory Structure**

```
./<service-name>/
├── .circleci
├── Dockerfile
├── .dockerignore
├── .git
├── .gitignore
├── README.md
└── src
    ├── app.js
    ├── jsconfig.json
    ├── node_modules
    ├── package.json
    └── package-lock.json
```

## Code-Level Standardization

### **Packages/Tools Used**

1. Prettier
2. Eslint
3. Module-Alias
4. husky
5. lint-staged
6. JsConfig

### **Installation & Setup**

1.  Install Prettier & Eslint:

    ```
    ELEVATE/<service-name>/src$ npm install prettier eslint --save-dev
    ```

    -   Add **.prettierrc.json** file to root of service directory:

        ```
        ./<service-name>/
        ├── .prettierrc.json    <----
        ├── README.md
        └── src
        ```

        **.prettierrc.json** sample:

        ```
        {
            "trailingComma": "es5",
            "tabWidth": 4,
            "semi": false,
            "singleQuote": true,
            "printWidth": 120,
            "useTabs": true,
            "overrides": [
                {
                    "files": ["*.yml", "*.yaml"],
                    "options": {
                        "tabWidth": 2
                    }
                }
            ]
        }
        ```

    -   Add **.eslintrc.json** file to src directory of service:

        ```
        ./<service-name>/src
        ├── app.js
        ├── .eslintrc.json  <----
        └── validators
        ```

        **.eslintrc.json** sample:

        ```
        {
            "env": {
                "browser": false,
                "commonjs": true,
                "es2021": true,
                "node": true
            },
            "extends": "eslint:recommended",
            "parserOptions": {
                "ecmaVersion": "latest"
            },
            "rules": {
                "indent": ["error", "tab", { "SwitchCase": 1 }],
                "linebreak-style": ["error", "unix"],
                "quotes": ["error", "single", { "avoidEscape": true }],
                "semi": ["error", "never"]
            }
        }
        ```

2.  Install Module-Alias:

    ```
    ELEVATE/<service-name>/src$ npm install module-alias
    ```

    Follow setup instructions at: https://www.npmjs.com/package/module-alias

    Sample Module-Alias mapping in **package.json**:

    ```
    "_moduleAliases": {
    	"@root": ".",
    	"@configs": "configs",
    	"@constants": "constants",
    	"@controllers": "controllers",
    	"@db": "db",
    	"@generics": "generics",
    	"@health-checks": "health-checks",
    	"@middlewares": "middlewares",
    	"@public": "public",
    	"@routes": "routes",
    	"@services": "services",
    	"@validators": "validators"
    }
    ```

    A **jsconfig.json** file is required in the **src** directory in order for **IntelliSense** features to work with module aliases:

    **jsconfig.json** sample:

    ```
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6",
            "baseUrl": "./",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "paths": {
                "@configs*": ["./configs*"],
                "@constants*": ["./constants*"],
                "@controllers*": ["./controllers*"],
                "@db*": ["./db*"],
                "@generics*": ["./generics*"],
                "@health-checks*": ["./health-checks*"],
                "@middlewares*": ["./middlewares*"],
                "@public*": ["./public*"],
                "@routes*": ["./routes*"],
                "@services*": ["./services*"],
                "@validators*": ["./validators*"]
            }
        },
        "exclude": ["node_modules"]
    }

    ```

3.  Install Husky & Lint-Staged:

    ```
    ELEVATE/<service-name>/src$ npm install husky lint-staged --save-dev
    ```

    -   Add the following script to **scripts config** of **package.json**:

        ```
        "prepare": "cd .. && husky install src/.husky"
        ```

    -   Run the prepare script to create **.husky** directory:

        ```
        ELEVATE/<service-name>/src$ npm run prepare
        ```

    -   Run husky command to add **pre-commit** file:

        ```
        ELEVATE/<service-name>/src$ npx husky add .husky/pre-commit "npm test"
        ```

    -   Above two steps should create **.husky** directory in **src**:

        ```
        ./<service-name>/src/.husky/
        ├── _
        │   ├── .gitignore
        │   └── husky.sh
        └── pre-commit
        ```

    -   Modify the contents of **pre-commit** file as shown:

        ```
        #!/usr/bin/env sh
        . "$(dirname -- "$0")/_/husky.sh"

        cd src
        npx lint-staged
        npm test

        ```

        Note: Any command specified in the pre-commit hook file will be run before every commit.

    -   Add following **lint-staged** configuration to **package.json**:

        ```
        "lint-staged": {
            "../*": "prettier --ignore-unknown --write",
            "*": "prettier --ignore-unknown --write"
        }
        ```

    Note: If no tests are specified, configure test script to exit with value 0 in **package.json (Scripts)**.

    ```
    "test": "echo \"Error: no test specified\" && exit 0"
    ```

## Package Links

1. Prettier: https://www.npmjs.com/package/prettier
2. Eslint: https://www.npmjs.com/package/eslint
3. Lint-staged: https://www.npmjs.com/package/lint-staged
4. Husky: https://www.npmjs.com/package/husky
5. Module-alias: https://www.npmjs.com/package/module-alias

## Additional Resources

1. Prettier Pre-commit: https://prettier.io/docs/en/precommit.html
2. Eslint Rules: https://eslint.org/docs/rules/
3. Husky Documentation: https://typicode.github.io/husky/#/
