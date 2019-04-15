# [![Logo](https://user-images.githubusercontent.com/27515937/52951387-5a008e00-338a-11e9-87c7-49f3ca3b539d.png)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time#overview)

[![Version](https://vsmarketplacebadge.apphb.com/version-short/DennisVash.summer-time.svg?subject=Summer%20Time&colorA=2B303B&colorB=A8F79A)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time) [![Rating](https://vsmarketplacebadge.apphb.com/rating/DennisVash.summer-time.svg?label=Ratings&colorA=2B303B&colorB=AEE9F5)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time) [![Installs](https://vsmarketplacebadge.apphb.com/installs/DennisVash.summer-time.svg?label=Installs&colorA=2B303B&colorB=F699D9)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time) [![Downloads](https://vsmarketplacebadge.apphb.com/downloads/DennisVash.summer-time.svg?label=Downloads&colorA=2B303B&colorB=EBEA8B)](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time)

> A modern Dark Material Theme which lets you forget the summer while coding.

The **minimalistic design** makes the developer to **concentrate** on what's important while **understanding** the code flow.

*Look it up at [VS-Marketplace](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time#overview).*

## Color Palette

<div align="center">
    <a>
        <img src="https://user-images.githubusercontent.com/27515937/52947285-f4f36b00-337e-11e9-9d42-06537443c648.png" alt="Summer-Time-Logo" width="300px" />
    </a>
</div>

## Usage

- ![#F699D9](https://placehold.it/15/F699D9/000000?text=+) `#F699D9` Keywords
- ![#AEE9F5](https://placehold.it/15/AEE9F5/000000?text=+) `#AEE9F5` Variables
- ![#EBEA8B](https://placehold.it/15/EBEA8B/000000?text=+) `#EBEA8B` Operators
- ![#A8F79A](https://placehold.it/15/A8F79A/000000?text=+) `#A8F79A` Static
- ![#ECF6FF](https://placehold.it/15/ECF6FF/000000?text=+) `#ECF6FF` Functions
- ![#232b33](https://placehold.it/15/232b33/000000?text=+) `#232b33` Background

## Screenshots

<div align="center">

![JavaScript Syntax](https://img.shields.io/badge/SYNTAX-JavaScript-gray.svg?colorB=F699D9)
![JavaScript](images/example-syntax-js.png)

<br>

![hr](images/hr.png)

<br>

![React Syntax](https://img.shields.io/badge/SYNTAX-React-gray.svg?colorB=F699D9)
![react](images/example-syntax-react.png)
![stateless](/images/example-stateless.png)

<br>

![hr](images/hr.png)

<br>

![Editor](https://img.shields.io/badge/EDITOR-View-gray.svg?colorB=F699D9)
![example2](/images/example-editor-js.png)

</div>

## Configuration

- FiraCode and Hack fonts, find more at [Nerd-Fonts](https://github.com/ryanoasis/nerd-fonts)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=DennisVash.summer-time)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

Recommended [VSCode Settings](https://code.visualstudio.com/docs/getstarted/settings):

```json
{
  // Work Bench
  "workbench.colorTheme": "Summer Time",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.statusBar.feedback.visible": false,
  "workbench.statusBar.visible": true,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.highlightModifiedTabs": true,

  // Window
  "window.menuBarVisibility": "toggle",
  "window.zoomLevel": 1,
  "window.titleBarStyle": "custom",

  // Explorer
  "explorer.confirmDelete": false,
  "explorer.sortOrder": "type",
  "explorer.confirmDragAndDrop": false,
  "explorer.decorations.badges": false,

  // Editor
  "editor.fontFamily": "FuraCode Nerd Font, Light",
  "editor.mouseWheelZoom": true,
  "editor.snippetSuggestions": "bottom",
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
  "editor.cursorBlinking": "solid",
  "editor.renderWhitespace": "all",
  "editor.glyphMargin": true,
  "editor.suggest.snippetsPreventQuickSuggestions": true,

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
  "sync.quietSync": false,

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
  "breadcrumbs.enabled": true,
  "debug.toolBarLocation": "docked",
  "markdown-preview-enhanced.enableTypographer": true,
  "svg.preview.autoOpen": true
}

```

## Other Places

- [ JetBrains Theme](https://github.com/denvash/summer-time-theme-jetbrains)
