# SilaiBook

Offline-first Android app for tailors. Customer data is stored only in local SQLite; backup files are shared manually by the user.

## Test on a phone

```bash
npm install
npm start
```

Install Expo Go on Android, then scan the QR code shown by Expo.

## Create a launch build

```bash
npx eas-cli login
npx eas-cli build --platform android --profile preview
```

The `preview` profile produces an installable APK. For Google Play, use:

```bash
npx eas-cli build --platform android --profile production
```
