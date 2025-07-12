import path from 'node:path'

const config = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#': path.resolve(import.meta.dirname, 'src')
        }
      }
    ]
  ]
}

export default config
