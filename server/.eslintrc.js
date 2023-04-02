module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": "",
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "function-paren-newline": ["error", "consistent"],
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-shadow": ["error"],
        "max-len": ["warn", { "code": 200 }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
            }
        ],
        "no-shadow": "off",
        "no-undef": "off",
        "linebreak-style": "off",
        "no-use-before-define": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-empty-function": "off",
        "import/no-extraneous-dependencies": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }],
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
