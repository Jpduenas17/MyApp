 const scanner = require('sonarqube-scanner'); // Importa libreria y se llamara scanner
scanner(
  {
  serverUrl: "http://localhost:9000",
  login:"admin",
  password:"admin1",
  options: {
    "sonar.sources": "./src",
    "sonar.exclusions": "**/*.test.tsx",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml",
    "sonar.eslint.reportPaths":"eslint-report.json"
  },
},
() => process.exit()
);