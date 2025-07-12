/** @type{import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest'
  },
  preset: 'react-native'
}

export default config
