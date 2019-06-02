<div align="center">

# [![Logo](/images/logo-github.png)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time#overview)

</div>

[![Version](https://vsmarketplacebadge.apphb.com/version-short/DennisVash.summer-time.svg?subject=Summer%20Time&colorA=2B303B&colorB=A8F79A)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time) [![Rating](https://vsmarketplacebadge.apphb.com/rating/DennisVash.summer-time.svg?label=Ratings&colorA=2B303B&colorB=AEE9F5)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time) [![Installs](https://vsmarketplacebadge.apphb.com/installs/DennisVash.summer-time.svg?label=Installs&colorA=2B303B&colorB=F699D9)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time) [![Downloads](https://vsmarketplacebadge.apphb.com/downloads/DennisVash.summer-time.svg?label=Downloads&colorA=2B303B&colorB=EBEA8B)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time)

> A modern Dark Material Theme which lets you forget the summer while coding.

<div align="center">

![s1](/images/screenshot_react.png)

![s1](/images/screenshot_editor.png)

</div>

## Features

> Detailed tokens coloring.

In next screenshot, try to understand variable types by their **COLOR** (find `const`,`properties`, `functions`, `objects`, `object keys` etc.)

> ![f](/images/screenshot_features.png)

## Color Palette

<div align="center">

![p](/images/palette.png)

</div>

**Minimalistic** design __//__ **Concentrate** on what's important __//__ **Understand** the code flow.

- ![#F699D9](https://placehold.it/15/F699D9/000000?text=+) `#F699D9` Keywords, Operators
- ![#AEE9F5](https://placehold.it/15/AEE9F5/000000?text=+) `#AEE9F5` Read-Write Variables
- ![#EBEA8B](https://placehold.it/15/EBEA8B/000000?text=+) `#EBEA8B` Read Only Variables
- ![#A8F79A](https://placehold.it/15/A8F79A/000000?text=+) `#A8F79A` Static
- ![#ECF6FF](https://placehold.it/15/ECF6FF/000000?text=+) `#ECF6FF` Functions, Strings
- ![#282c34](https://placehold.it/15/282c34/000000?text=+) `#282c34` Background

## Configuration

🍧 FiraCode and Hack fonts, find more at [Nerd-Fonts](https://github.com/ryanoasis/nerd-fonts)

🍦 [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time)

🍨 [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

:construction_worker: [VSCode Settings](https://code.visualstudio.com/docs/getstarted/settings):

```json
  // Workbench
  "workbench.colorTheme": "Summer Time",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.statusBar.feedback.visible": false,
  "workbench.statusBar.visible": true,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.settings.enableNaturalLanguageSearch": false,
  "workbench.editor.enablePreviewFromQuickOpen": false,

  // Window
  "window.menuBarVisibility": "toggle",
  "window.zoomLevel": 1,
  "window.titleBarStyle": "custom",
  "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",

  // Explorer
  "explorer.confirmDelete": false,
  "explorer.sortOrder": "type",
  "explorer.confirmDragAndDrop": false,
  "explorer.decorations.badges": false,

  // Editor
  "editor.fontFamily": "FuraCode Nerd Font, Light",
  "editor.mouseWheelZoom": true,
  "editor.snippetSuggestions": "inline",
  "editor.autoClosingBrackets": "always",
  "editor.rulers": [100],
  "editor.renderIndentGuides": false,
  "editor.fontLigatures": true,
  "editor.renderControlCharacters": false,
  "editor.autoClosingQuotes": "always",
  "editor.formatOnSave": true,
  "editor.formatOnType": false,
  "editor.fontSize": 15,
  "editor.lineHeight": 24.65,
  "editor.letterSpacing": 0.5,
  "editor.fontWeight": "400",
  "editor.cursorStyle": "line-thin",
  "editor.cursorWidth": 5,
  "editor.cursorBlinking": "phase",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.renderWhitespace": "all",
  "editor.glyphMargin": true,
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "editor.suggestSelection": "first",
  "editor.smoothScrolling": true,
  "editor.minimap.renderCharacters": false,
  "editor.minimap.maxColumn": 200,
  "editor.minimap.showSlider": "always",
  "editor.detectIndentation": true,
  "editor.insertSpaces": true,

  // Terminal
  "terminal.integrated.cursorStyle": "underline",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontWeight": "normal",
  "terminal.integrated.fontFamily": "BlexMono Nerd Font Mono, ExtraLight",
  "terminal.integrated.rendererType": "dom",
  "terminal.integrated.fontWeightBold": "normal",

  // Files
  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  },
  "files.associations": {
    "*.react.js": "javascriptreact",
    "*.stories.js": "javascriptreact",
    "*.js": "javascript"
  },

  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },

  // Material Icons
  "material-icon-theme.activeIconPack": "react_redux",
  "material-icon-theme.folders.theme": "specific",
  "material-icon-theme.hidesExplorerArrows": true,
  "material-icon-theme.folders.color": "#F699D9",
  "material-icon-theme.files.associations": {
    "*.ts": "typescript",
    "fileName.ts": "angular",
    "*.react.js": "react"
  },

  // Sync
  "sync.gist": "37489160d4242adee13d821d95858f97",
  "sync.autoUpload": true,
  "sync.autoDownload": true,
  "sync.quietSync": true,
  "sync.forceDownload": false,

  // Git
  "git.autofetch": true,
  "git.confirmSync": false,

  // Prettier
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true,

  // Eslint
  "eslint.autoFixOnSave": true,
  "eslint.enable": true,
  "eslint.run": "onType",

  // SOP's Import Cost Extension Settings.
  "importCost.largePackageColor": "#F699D9",
  "importCost.mediumPackageColor": "#EBEA8B",
  "importCost.smallPackageColor": "#EBEA8B",

  // Better comments
  "better-comments.tags": [
    {
      "tag": "*",
      "color": "#EBEA8B",
      "strikethrough": false,
      "backgroundColor": "transparent"
    }
  ],

  // Bookmarks
  "numberedBookmarks.gutterIconFillColor": "#F699D9",
  "numberedBookmarks.gutterIconNumberColor": "#000",

  // Others
  "javascript.format.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "cSpell.userWords": [
    "Backend",
    "Hackathon",
    "Minimalistic",
    "Sider",
    "Vash",
    "antd",
    "syncronic",
    "webhooks"
  ],
  "breadcrumbs.enabled": true,

  "debug.toolBarLocation": "docked",

  "svg.preview.autoOpen": true,

  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "showMusicMetrics": false,
  "showGitMetrics": false,
  "showWeeklyRanking": false,

  // Telemetry
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,

  // GitLens
  "gitlens.views.repositories.location": "gitlens",
  "gitlens.views.fileHistory.location": "gitlens",
  "gitlens.views.lineHistory.location": "gitlens",
  "gitlens.views.compare.location": "gitlens",
  "gitlens.views.search.location": "gitlens",
  "gitlens.currentLine.enabled": false,
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.hovers.enabled": false,
  "gitlens.codeLens.enabled": false
```

## Installation

👉 Via [Marketplace](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time#overview)

👉 `File > Preferences > Color Theme`

👉 Quick open (`Ctrl+P`) `ext install DennisVash.summer-time`

## Other Places

- [JetBrains-Theme](https://github.com/denvash/summer-time-theme-jetbrains)
