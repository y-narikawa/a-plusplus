# A++

## Commit Prefix

### ルール
| prefix        | type                  | emoji |
|---------------|-----------------------|:-----:|
| :update:      | 機能追加、更新(update)       |  🔧   |
| :fix:         | バグ修正（fix)             |  🐛   |
| :refactoring: | リファクタリング(refactoring) |  ♻️   |
| :memo:        | メモ(memo)              |  📝   |

### [設定ファイル](https://gist.github.com/y-narikawa/e24fefc3ea696d6c3ee8623dccebf959)

### コミットメッセージの適用
```shell
$ git config commit.template <setting file dir>/.commit_template_a-plusplus
```

## TODO
- PC登録ページのアコーディオンの矢印が正常に動いていない
- step3のボタンの判定がおかしい（戻るボタンのみ）
- reg/step1、step2のタブレットのレスポンシブが色々壊れていた レイアウトが崩れている
- スマホ、ログインページのレイアウト
    - Stepタイトルが二行になることがある
    - 誕生日は横長になっている
    - 必須を米印に
    - チェックボックスが小さすぎる
    - アコーディオンがおかしい
- パスワードリセットまわりのレイアウト調整
- マイページ preview画面 作成