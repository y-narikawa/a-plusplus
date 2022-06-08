# A++

## Commit Prefix

### ルール
| type                  | emoji |
|-----------------------|:-----:|
| 機能追加、更新(update)       |  🔧   |
| バグ修正（fix)             |  🐛   |
| リファクタリング(refactoring) |  ♻️   |
| メモ(memo)              |  📝   |

### コミットメッセージの適用
```shell
$ cd <project>
$ cp .gitmessage.example .gitmessage
$ git config commit.template .gitmessage
$ git config --add commit.cleanup strip
```

## TODO
- PC登録ページのアコーディオンの矢印が正常に動いていない
- reg/step1、step2のタブレットのレスポンシブが色々壊れていた レイアウトが崩れている
- スマホ、ログインページのレイアウト
    - Stepタイトルが二行になることがある
    - 誕生日は横長になっている
    - アコーディオンがおかしい
- パスワードリセットまわりのレイアウト調整
- マイページ preview画面 作成
- js分けたやつ実装
- マイページ preview画面 作成
