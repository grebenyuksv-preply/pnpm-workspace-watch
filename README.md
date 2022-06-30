Run the watcher
```
nvm use
pnpm i # my pnpm --version says 7.2.1
node watch.js
```

Another tab:
```
pnpm i
pnpm i
...
```

Watcher shows many events — but none of them are `unlink` or `unlinkDir` (well, there is `unlink node_modules/.pnpm/lock.yaml.773913573`, but it only happens for that specific file).