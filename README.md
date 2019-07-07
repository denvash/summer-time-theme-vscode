<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time">
    <img alt="Create-React-VSCode" src="https://i.imgur.com/NGCIh3d.png">
  </a>
</p>


<p align="center">
  <!-- marketplace version -->
  <a href="https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time">
    <img alt="marketplace version" src="https://img.shields.io/vscode-marketplace/v/DennisVash.summer-time.svg?maxAge=3600&style=for-the-badge&labelColor=1C1E26&color=F699D9">
  </a>
  <!-- downloads -->
  <a href="https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time">
    <img alt="downloads" src="https://img.shields.io/visual-studio-marketplace/d/DennisVash.summer-time.svg?maxAge=3600&style=for-the-badge&labelColor=1C1E26&color=A8F79A">
  </a>
  <!-- rating -->
  <a href="https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time">
    <img alt="rating" src="https://img.shields.io/visual-studio-marketplace/stars/DennisVash.summer-time.svg?maxAge=86400&style=for-the-badge&labelColor=1C1E26&color=AEE9F5">
  </a>
</p>

> A modern Dark Material Theme which lets you forget the summer while coding.

<div align="center">

![s1](/images/screenshot_react.png)

![s1](/images/screenshot_editor.png)

</div>

## Features

> Detailed tokens coloring.

In next screenshot, try figuring out the variable types by their **COLOR** (find `const values`,`properties`, `functions`, `objects`, `object keys` etc.)

![f](/images/screenshot_features.png)

## Color Palette

<div align="center">

![p](/images/palette.png)

</div>

**Minimalistic** design _//_ **Concentrate** on what's important _//_ **Understand** the code flow.

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

  // SOP's Import Cost Extension Settings.
  "importCost.largePackageColor": "#F699D9",
  "importCost.mediumPackageColor": "#EBEA8B",
  "importCost.smallPackageColor": "#EBEA8B",

  // Others
  "javascript.format.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "breadcrumbs.enabled": true,

  // Telemetry
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
```

## Installation

👉 Via [Marketplace](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time#overview)

👉 `File > Preferences > Color Theme`

👉 Quick open (`Ctrl+P`) `ext install DennisVash.summer-time`

## Other Places

- [JetBrains-Theme](https://github.com/denvash/summer-time-theme-jetbrains)
