---
emoji: "💻"
title: ghqとfzfで快適にプロジェクト移動できるようにした
draft: false
tags: ["zsh"]
uploadAt: 2024-11-30
---
## プロジェクト移動がめんどくさい

そこのあなた！！！異なるプロジェクトを移動するときにいちいち `cd ~/repo/github.com/Kigou-No1/...`とかタイピングしていませんか？

そんなことしてると腱鞘炎になって死ぬので `fzf`というfuzzy-finderでblazing-fastなcdを実現しましょう。

自分用のメモとしてプロジェクト移動以外の備忘録も残しておきます。

## 導入

Ubuntu:

```bash
$ sudo apt install fzf
```

Windows:

```bash
$ winget install fzf 
```

## 使い方

`fzf`と単にコマンドラインで実行するとわかるんですが、このコマンドを実行するとインタラクティブなファインダーが起動して、ファイルを選択すると標準出力に選択したファイルのパスを返します。

これを用いてreverse-i-searchやタブ補完を代替したり、いろいろなことができるわけですね！

### ghq+fzf

`ghq`というローカルにクローンしてきたリポジトリを管理するためのツールと `fzf`を組み合わせることで爆速cdを実現できます

Powershell:

```powershell
function Get-FzfRepo {
    $repo = $(ghq list | fzf)
    Set-Location ( Join-Path $(ghq root) $repo)
}

Set-PSReadLineKeyHandler -Chord Ctrl+g -ScriptBlock { # Ctrl+gに割り当て
    Get-FzfRepo
    [Microsoft.PowerShell.PSConsoleReadLine]::AcceptLine()
} 
```

Zsh:

```bash
function ghq-fzf_change_directory() {
  local src=$(ghq list | fzf --preview "eza -l -g -a --icons $(ghq root)/{} | tail -n+4 | awk '{print \$6\"/\"\$8\" \"\$9 \" \" \$10}'")
  if [ -n "$src" ]; then
    BUFFER="cd $(ghq root)/$src"
    zle accept-line
  fi
  zle -R -c
}

zle -N ghq-fzf_change_directory
bindkey '^g' ghq-fzf_change_directory
```

### fzf+bck-i-search

zshやpowershellでctrl+rを押すとヒストリ検索ができるんですが、これをfzfを使って検索できるようにします。

Powershell:

```powershell

function Get-HistoryFzf {
    Invoke-Expression ((Get-Content $(Get-PSReadLineOption).HistorySavePath) | fzf)
}

Set-PSReadLineKeyHandler -Chord Ctrl+r -ScriptBlock {
    [Microsoft.PowerShell.PSConsoleReadLine]::AcceptLine()
    Get-HistoryFzf
}

```

Zsh:

```bash
function history-fzf() {
    local src=$(history | fzf --tac --preview "echo {} | awk '{print \$2}' | xargs -I % sh -c 'echo %; history | grep %'")
    if [ -n "$src" ]; then
        BUFFER="fc -s $src"
        zle accept-line
    fi
    zle -R -c
}

zle -N history-fzf
bindkey '^r' history-fzf
```

## まとめ

良い感じにcdできるようになってうれしい

dockerとかkubectlとかでも使えるようにすると便利だと思います
