/**
 * ESLint configuration for browser-based ES2015+ JavaScript.
 * Updated for ESLint 9.x with flat config format.
 * Focus:
 * - Modern syntax (ES modules, let/const)
 * - Code complexity and quality checks
 * - Consistent formatting (indentation, semicolons)
 * - Good practices with arrays and objects
 * - Avoiding common mistakes students make
 */

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        alert: "readonly",
        confirm: "readonly",
        prompt: "readonly",
        fetch: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        navigator: "readonly",
        location: "readonly",
        history: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",

        // Node.js globals (for scripts)
        process: "readonly",
        Buffer: "readonly",
        global: "readonly",
        __dirname: "readonly",
        __filename: "readonly",

        // Common library globals
        axios: "readonly",
        _: "readonly" // Lodash
      }
    },

    files: ["**/*.js", "**/*.mjs"],

    rules: {
      // ----- ESLint Recommended Rules -----
      "constructor-super": "error",
      "for-direction": "error",
      "getter-return": "error",
      "no-async-promise-executor": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-semi": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-new-symbol": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      "no-setter-return": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-useless-backreference": "error",
      "no-useless-catch": "error",
      "no-useless-escape": "error",
      "use-isnan": "error",
      "valid-typeof": "error",

      // ----- Modern JavaScript / ES6+ -----
      "no-var": "error",                    // Never allow var, use let/const
      "prefer-const": "warn",               // Prefer const when not reassigned
      "prefer-arrow-callback": "warn",      // Use arrow functions for callbacks
      "prefer-template": "warn",            // Use template literals
      "prefer-destructuring": "warn",       // Use destructuring when possible
      "prefer-spread": "warn",              // Use spread operator
      "prefer-rest-params": "warn",         // Use rest parameters

      // ----- Formatting & Style (Indentation, Semicolons) -----
      "indent": ["error", 2, {              // 2-space indentation
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "FunctionDeclaration": { "parameters": 1, "body": 1 },
        "FunctionExpression": { "parameters": 1, "body": 1 },
        "CallExpression": { "arguments": 1 },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "offsetTernaryExpressions": false,
        "ignoredNodes": ["TemplateLiteral *"]
      }],
      "semi": ["error", "always"],          // Always require semicolons
      "semi-spacing": "error",              // Proper spacing around semicolons
      "semi-style": ["error", "last"],      // Semicolons at end of statements
      "no-extra-semi": "error",             // No unnecessary semicolons
      "quotes": ["warn", "double"],         // Use double quotes consistently
      "comma-dangle": ["error", "never"],   // No trailing commas
      "comma-spacing": ["error", { "before": false, "after": true }],
      "comma-style": ["error", "last"],
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],

      // ----- Complexity Rules -----
      "complexity": ["warn", 10],          // Max cyclomatic complexity
      "max-depth": ["warn", 4],            // Max nesting depth
      "max-len": ["warn", {                // Max line length
        "code": 100,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }],
      "max-lines": ["warn", {              // Max lines per file
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }],
      "max-lines-per-function": ["warn", {  // Max lines per function
        "max": 50,
        "skipBlankLines": true,
        "skipComments": true
      }],
      "max-params": ["warn", 5],           // Max function parameters
      "max-statements": ["warn", 20],       // Max statements per function

      // ----- Code Quality -----
      "eqeqeq": ["error", "always"],       // Always use strict equality
      "no-eval": "error",                  // No eval()
      "no-implied-eval": "error",          // No implied eval
      "no-new-func": "error",              // No Function constructor
      "no-script-url": "error",            // No javascript: URLs
      "no-alert": "warn",                  // Discourage alert/confirm/prompt
      "no-magic-numbers": ["warn", {       // Avoid magic numbers
        "ignore": [-1, 0, 1, 2],
        "ignoreArrayIndexes": true,
        "enforceConst": true
      }],
      "no-duplicate-imports": "warn",      // Keep imports clean
      "no-use-before-define": ["error", "nofunc"], // Declare before use

      // ----- Variables -----
      "no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",       // Allow unused args starting with _
          "varsIgnorePattern": "^_"        // Allow unused vars starting with _
        }
      ],
      "no-shadow": "warn",                 // Avoid shadowing variables
      "no-param-reassign": "warn",         // Discourage mutating function params
      "no-undef-init": "error",            // No initializing to undefined

      // ----- Arrays & Objects -----
      "array-callback-return": "warn",     // map/filter should return a value
      "no-array-constructor": "error",     // [] instead of new Array()
      "object-shorthand": ["warn", "always"], // { foo } instead of { foo: foo }
      "dot-notation": "warn",              // Use dot notation when possible
      "no-new-object": "error",            // {} instead of new Object()

      // ----- Functions -----
      "func-style": ["warn", "declaration", { "allowArrowFunctions": true }],
      "no-empty-function": "warn",         // Avoid empty functions
      "consistent-return": "error",        // Consistent return values

      // ----- Control Flow -----
      "curly": "error",                    // Always use braces
      "default-case": "warn",              // Require default case in switch
      "no-else-return": "warn",            // Simplify if-else chains
      "no-lonely-if": "warn",              // Use else-if instead of lonely if

      // ----- Error Prevention -----
      "no-throw-literal": "error",         // Throw Error objects, not literals
      "no-return-assign": "error",         // No assignment in return
      "no-sequences": "error",             // No comma operator
      "no-void": "error",                  // No void operator

      // Allow console for teaching/demo purposes
      "no-console": "off"
    }
  }
];
