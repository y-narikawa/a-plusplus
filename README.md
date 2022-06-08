# A++

## Commit Prefix

### ルール
| prefix        | type                  | emoji |
|---------------|-----------------------|:-----:|
| :update:      | 機能追加、更新(update)       |  🔧   |
| :fix:         | バグ修正（fix)             |  🐛   |
| :refactoring: | リファクタリング(refactoring) |  ♻️   |
| :memo:        | メモ(memo)              |  📝   |

### コミットメッセージの適用
```shell
$ cd <project>
$ git config commit.template .gitmessage
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